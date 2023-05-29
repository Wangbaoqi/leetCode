
import { ListNode, reversePrint } from '.'

describe('test reversePrintLinkList', () => { 

  it('test_reverse_print_link_list', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3)
      )
    );
    const expected = [3, 2, 1];
    expect(reversePrint(head)).toEqual(expected);
  });

  
})