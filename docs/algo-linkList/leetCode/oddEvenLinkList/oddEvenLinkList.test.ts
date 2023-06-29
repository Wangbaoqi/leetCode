import { ListNode, oddEvenList } from './index';


const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test oddEventList', () => { 
  it('test_normal_list', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4,
            new ListNode(
              5
            )
          )
        )
      )
    );
    oddEvenList(head);
    expect(printLink(head)).toEqual([1, 3, 5, 2, 4]);
  });
  it('test_diff_list', () => { 
    const head = new ListNode(
      2,
      new ListNode(
        1,
        new ListNode(
          3,
          new ListNode(
            5,
            new ListNode(
              6,
              new ListNode(
                4,
                new ListNode(
                  7
                )
              )
            )
          )
        )
      )
    );
    oddEvenList(head);
    expect(printLink(head)).toEqual([2,3,6,7,1,5,4]);
  })
})