import React from 'react';
import { useSandpack } from '@codesandbox/sandpack-react';

const MAX_MESSAGE_COUNT = 20;

export function useLogs() {
  const { listen } = useSandpack();

  const [logs, setLogs] = React.useState([]);

  const clearLogs = React.useCallback(() => {
    setLogs([]);
  }, []);

  React.useEffect(() => {
    const unsubscribe = listen((message) => {
      if (
        (message.type === 'start' && message.firstLoad) ||
        message.type === 'refresh'
      ) {
        setLogs([]);
      }

      if (message.type === 'console' && message.codesandbox) {
        setLogs((prev) => {
          // NOTE: For some reason, sometimes `message.log` is an
          // array with >100 items, and most of those items are
          // nonsense.
          // I don't think it's valid to have multiple logs at once,
          // since each log can have multiple parts.
          const logs = message.log.slice(0, 1);

          // Resolve dynamic strings
          const resolvedLogs = logs.map(resolveDynamicStrings);

          const messages = [...prev, ...resolvedLogs];

          return messages.slice(
            Math.max(0, messages.length - MAX_MESSAGE_COUNT)
          );
        });
      }
    });

    return unsubscribe;
  }, [listen]);

  return [logs, clearLogs];
}

/**
 * Sometimes, console logs use a weird string interpolation format
 * like this:
 *
 * [
 *   "Hello %s, how's %s?",
 *   "Ashley",
 *   "your son"
 *   "He's good!"
 * ]
 *
 * To format correctly, we need to do this interpolation ourselves.
 * The final output should be:
 *
 * [
 *   "Hello Ashley, how's your son?",
 *   "I'm good, you?"
 * ]
 *
 * The first string is the one with the slots. Strings 2 through N
 * are the strings to be inserted, though there may be additional
 * string afterwards that are NOT inserted. This method will slip
 * in the strings, and return a shorter array.
 */
export function resolveDynamicStrings(log) {
  const { data, ...otherStuff } = log;

  // Sometimes, paricularly when logging native events, `data`
  // is an object, not an array of logs. I suspect this is a
  // bug in Sandpack, or maybe in my code somewhere.
  // Doesn't matter. Let's ignore these bogus logs.
  if (!Array.isArray(data)) {
    return null;
  }

  let [firstLog, ...restLogs] = data;

  // Don't bother if the first item being logged isn't a string;
  if (typeof firstLog !== 'string') {
    return log;
  }

  const numOfInterpolations = data[0].match(/%s/g)?.length || 0;

  let i = 0;
  while (i < numOfInterpolations) {
    const replacement = restLogs.shift();
    firstLog = firstLog.replace('%s', replacement);
    i++;
  }

  return {
    data: [firstLog, ...restLogs],
    ...otherStuff,
  };
}

export function stringify(msg) {
  let string;

  try {
    string = JSON.stringify(msg, null, 2);
  } catch (error) {
    try {
      string = Object.prototype.toString.call(msg);
    } catch (err) {
      string = '[' + typeof msg + ']';
    }
  }

  return string;
}
