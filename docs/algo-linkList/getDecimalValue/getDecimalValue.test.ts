import { ListNode, getDecimalValue } from './1290.二进制链表转整数';

describe('test getDecimalValue', () => { 

  it('test_normal_decimal_value', () => {
    const head = new ListNode(
      1,
      new ListNode(
        0,
        new ListNode(
          1
        )
      )
    );

    expect(getDecimalValue(head)).toBe(5);
  });
  
})