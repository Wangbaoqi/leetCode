/**
 * This method will call the callback for every value in the
 * object, and return a new object with transformed values.
 * This is useful if, eg., you need to capitalize every value in
 * a dictionary-style object with string values.
 */
export const transformValues = (obj, callback) => {
  if (typeof obj !== 'object') {
    return obj;
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: callback(key, value),
    };
  }, {});
};

export const clamp = (val, min = 0, max = 1) =>
  Math.max(min, Math.min(max, val));


export const normalize = (
  number,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // FIrst, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);

  // Next, transpose that value to our desired scale.
  return (
    (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
  );
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};


export function detectBrowser() {
  if (typeof navigator === 'undefined') {
    return null;
  }
  if (
    (navigator.userAgent.indexOf('Opera') ||
      navigator.userAgent.indexOf('OPR')) != -1
  ) {
    return 'Opera';
  } else if (navigator.userAgent.indexOf('Chrome') != -1) {
    return 'Chrome';
  } else if (navigator.userAgent.indexOf('Safari') != -1) {
    return 'Safari';
  } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    return 'Firefox';
  } else if (
    navigator.userAgent.indexOf('MSIE') != -1 ||
    !!document.DOCUMENT_NODE == true
  ) {
    return 'IE';
  } else {
    return 'Unknown';
  }
}