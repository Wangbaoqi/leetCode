import { ListNode, mergeNodes } from "./index";

const generateLink = (arr: number[]) => {
  const dummy = new ListNode(-1);

  let node = dummy;
  let len = arr.length;
  let i = 0;

  while (i < len) {
    node.next = new ListNode(arr[i++]);
    node = node.next;
  }

  return dummy.next;
};

export const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe("test mergeNodes", () => {
  it("test_normal_nodes", () => {
    const testArr = [0, 3, 1, 0, 4, 5, 2, 0];
    const head = generateLink(testArr);
    expect(printLink(mergeNodes(head))).toEqual([4, 11]);
  });

  it("test_normal_nodes", () => {
    const testArr = [0, 1, 0, 3, 0, 2, 2, 0];
    const head = generateLink(testArr);
    expect(printLink(mergeNodes(head))).toEqual([1, 3, 4]);
  });
});
