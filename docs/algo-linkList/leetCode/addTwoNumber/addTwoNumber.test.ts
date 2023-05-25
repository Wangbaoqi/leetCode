
import { ListNode, addTwoNumbers } from './2.两数相加';


describe('test addTwoNumbers for LinkList', () => { 

  it('test_two_link_list_same_sum_less_then_9', () => {
    const l1 = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4
          )
        )
      )
    );
    const l2 = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4
          )
        )
      )
    );
    const expected = new ListNode(
      2,
      new ListNode(
        4,
        new ListNode(
          6,
          new ListNode(
            8
          )
        )
      )
    );
    expect(addTwoNumbers(l1, l2)).toEqual(expected)
  });

  it('test_two_link_list_same_sum_0', () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);
    const expected = new ListNode(0);
    addTwoNumbers(l1, l2);
    expect(addTwoNumbers(l1, l2)).toEqual(expected)
  });

  it('test_two_link_list_same_sum_diff_less_than_9', () => {
    const l1 = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4
          )
        )
      )
    );

    const l2 = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3
        )
      )
    );

    const expected = new ListNode(
      2,
      new ListNode(
        4,
        new ListNode(
          6,
          new ListNode(
            4
          )
        )
      )
    );
    addTwoNumbers(l1, l2);
    expect(addTwoNumbers(l1, l2)).toEqual(expected)
  });

  it('test_two_link_list_same_sum_more_then_9', () => {
    const l1 = new ListNode(
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
    const l2 = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4,
            new ListNode(5)
          )
        )
      )
    );
    const expected = new ListNode(
      2,
      new ListNode(
        4,
        new ListNode(
          6,
          new ListNode(
            8,
            new ListNode(
              0,
              new ListNode(1)
            )
          )
        )
      )
    );
    expect(addTwoNumbers(l1, l2)).toEqual(expected)
  });

  it('test_two_link_list_diff_sum_more_then_9', () => {
    const l1 = new ListNode(
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
                new ListNode(7)
              )
            )
          )
        )
      )
    );

    const l2 = new ListNode(
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

    const expected = new ListNode(
      2,
      new ListNode(
        4,
        new ListNode(
          6,
          new ListNode(
            8,
            new ListNode(
              0,
              new ListNode(
                7,
                new ListNode(7)
              )
            )
          )
        )
      )
    )
    expect(addTwoNumbers(l1, l2)).toEqual(expected)

  });

  it('test_two_link_list_all_sum_9', () => {
    const l1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              9,
              new ListNode(
                9,
                new ListNode(9)
              )
            )
          )
        )
      )
    );
    const l2 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9
          )
        )
      )
    );
    const expected = new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              0,
              new ListNode(
                0,
                new ListNode(
                  0,
                  new ListNode(1)
                )
              )
            )
          )
        )
      )
    );

    expect(addTwoNumbers(l1, l2)).toEqual(expected);
  });


})
