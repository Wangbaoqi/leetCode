import { List } from "react-feather";
import { ListNode, reverseEvenLengthGroups } from "./index";

export const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe("test reverse even nodes", () => {
  it("test_normal_two_nodes", () => {
    const head = new ListNode(1, new ListNode(2));
    const ans = reverseEvenLengthGroups(head);
    expect(printLink(ans)).toEqual([1, 2]);
  });

  it("test_normal_three_nodes", () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    const ans = reverseEvenLengthGroups(head);
    expect(printLink(ans)).toEqual([1, 3, 2]);
  });

  it("test_normal_three_more_nodes", () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    );
    const ans = reverseEvenLengthGroups(head);
    expect(printLink(ans)).toEqual([1, 3, 2, 4, 5, 6]);
  });

  it("test_normal_three_more_nodes", () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4,
            new ListNode(
              5,
              new ListNode(
                6,
                new ListNode(
                  7,
                  new ListNode(8, new ListNode(9, new ListNode(10)))
                )
              )
            )
          )
        )
      )
    );
    const ans = reverseEvenLengthGroups(head);
    expect(printLink(ans)).toEqual([1, 3, 2, 4, 5, 6, 10, 9, 8, 7]);
  });
});
