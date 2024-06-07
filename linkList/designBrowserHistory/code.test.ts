import { BrowserHistory } from './code';

describe('test_browser_history', () => {
  test('test_step_browser_history', () => {
    const bs = new BrowserHistory('leetcode.com');
    bs.visit('google.com');
    bs.visit('facebook.com');
    bs.visit('youtube.com');

    // leet - google - facebook - youtube

    expect(bs.back(1)).toBe('facebook.com');
    expect(bs.back(1)).toBe('google.com');
    expect(bs.forward(1)).toBe('facebook.com');

    // leet - google - facebook - link

    bs.visit('linkedin.com');

    expect(bs.forward(2)).toBe('linkedin.com');
    expect(bs.back(2)).toBe('google.com');
    expect(bs.back(7)).toBe('leetcode.com');
  });
});
