import { ListNode, nodesBetweenCriticalPoints } from "./index";

export const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe("test_nodesBetweenCriticalPoints", () => {
  it("test_two_nodesBetweenCriticalPoints", () => {
    const head = new ListNode(1, new ListNode(2));

    expect(nodesBetweenCriticalPoints(head)).toEqual([-1, -1]);
  });

  it("test_three_nodesBetweenCriticalPoints", () => {
    const head = new ListNode(
      5,
      new ListNode(
        3,
        new ListNode(
          1,
          new ListNode(2, new ListNode(5, new ListNode(1, new ListNode(2))))
        )
      )
    );
    expect(nodesBetweenCriticalPoints(head)).toEqual([1, 3]);
  });
});
