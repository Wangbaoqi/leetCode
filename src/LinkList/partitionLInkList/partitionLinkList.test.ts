import { ListNode, partition_linkList, partition_linkList1 } from './86.分隔链表'

describe('test partition_linkList', () => { 

  it('test_partition_link_list_mid', () => {
    const head = new ListNode(
      1,
      new ListNode(
        3,
        new ListNode(
          5,
          new ListNode(
            2,
            new ListNode(
              4
            )
          )
        )
      )
    );

    const expected = new ListNode(
      1,
      new ListNode(
        3,
        new ListNode(
          2,
          new ListNode(
            4,
            new ListNode(
              5
            )
          )
        )
      )
    );

    expect(partition_linkList(head, 5)).toEqual(expected);
    // expect(partition_linkList1(head, 5)).toEqual(expected);
  });

  it('test_partition_link_list_right', () => {
    const head = new ListNode(
      1,
      new ListNode(
        3,
        new ListNode(
          5,
          new ListNode(
            2,
            new ListNode(
              4
            )
          )
        )
      )
    );

    const expected = new ListNode(
      1,
      new ListNode(
        3,
        new ListNode(
          5,
          new ListNode(
            2,
            new ListNode(
              4
            )
          )
        )
      )
    );
    
    expect(partition_linkList(head, 2)).toEqual(expected)
    // expect(partition_linkList1(head, 2)).toEqual(expected)
  });

  it('test_partition_link_list_left', () => {
    const head = new ListNode(
      1,
      new ListNode(
        3,
        new ListNode(
          5,
          new ListNode(
            2,
            new ListNode(
              4
            )
          )
        )
      )
    );

    const expected = new ListNode(
      1,
      new ListNode(
        3,
        new ListNode(
          2,
          new ListNode(
            5,
            new ListNode(
              4
            )
          )
        )
      )
    );
    
    expect(partition_linkList(head, 4)).toEqual(expected)
  });

  it('test_partition_link_list_less', () => {
    const head = new ListNode(
      2,
      new ListNode(1)
    )
    const expected = new ListNode(
      1,
      new ListNode(2)
    )
    expect(partition_linkList(head, 2)).toEqual(expected)
  });

})