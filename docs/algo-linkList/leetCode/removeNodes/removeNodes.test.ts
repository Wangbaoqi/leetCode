import { ListNode, removeNodes, removeNodesII } from "./index";

export const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe("test removeNodes", () => {
  it("test_normal_nodes", () => {
    const head = new ListNode(
      5,
      new ListNode(2, new ListNode(13, new ListNode(3, new ListNode(8))))
    );

    const ans = removeNodes(head);
    expect(printLink(ans)).toEqual([13, 8]);
  });

  it("test_normal_same_nodes", () => {
    const head = new ListNode(
      5,
      new ListNode(5, new ListNode(5, new ListNode(5, new ListNode(5))))
    );

    const ans = removeNodes(head);
    expect(printLink(ans)).toEqual([5, 5, 5, 5, 5]);
  });

  it("test_normal_reverse_way_nodes", () => {
    const head = new ListNode(
      5,
      new ListNode(2, new ListNode(13, new ListNode(3, new ListNode(8))))
    );

    const ans = removeNodesII(head);
    expect(printLink(ans)).toEqual([13, 8]);
  });
});
