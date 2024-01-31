import { ListNode, Solution } from './code';

describe('test random linkList', () => {
  it('test_normal_linkList', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    const solution = new Solution(head);
    const result = [1, 2, 3];
    expect(result).toContain(solution.getRandom());
  });
});
