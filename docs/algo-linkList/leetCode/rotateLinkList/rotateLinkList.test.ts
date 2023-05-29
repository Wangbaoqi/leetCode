
import { ListNode, rotateRight } from '.';

describe('rotateLinkList test', () => { 

  it('test_k_len_less_link_len', () => {

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
                  7
                )
              )
            )
          )
        )
      )
    );

    const expected = new ListNode(
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
                new ListNode(
                  1
                )
              )
            )
          )
        )
      )
    );
    expect(rotateRight(head, 6)).toEqual(expected);

  });

  it('test_k_len_equal_link_len', () => {

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
                  7
                )
              )
            )
          )
        )
      )
    );

    const expected = new ListNode(
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
                  7
                )
              )
            )
          )
        )
      )
    );

    expect(rotateRight(head, 7)).toEqual(expected);

  });

  it('test_k_len_more_link_len', () => {

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
                  7
                )
              )
            )
          )
        )
      )
    );

    const expected = new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(
          5,
          new ListNode(
            6,
            new ListNode(
              7,
              new ListNode(
                1,
                new ListNode(
                  2
                )
              )
            )
          )
        )
      )
    );

    expect(rotateRight(head, 12)).toEqual(expected);
  });

})