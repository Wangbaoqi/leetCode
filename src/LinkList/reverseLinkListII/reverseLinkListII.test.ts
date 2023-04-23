import { ListNode, reverseBetween } from './92.反转链表-ii';


describe('test reverseBetween', () => { 

  it('test_normal_reverse_link_list', () => { 
    const head = new ListNode(
      1,
      new ListNode(2,
        new ListNode(3,
          new ListNode(4,
            new ListNode(5,
            )
          )
        )
      )
    );

    reverseBetween(head, 2, 4)


  })


  it('test_one_reverse_link_list', () => {
    const head = new ListNode(1);

    reverseBetween(head, 2, 4);

    expect(reverseBetween(head, 2, 4)).toEqual(head);

  })
})