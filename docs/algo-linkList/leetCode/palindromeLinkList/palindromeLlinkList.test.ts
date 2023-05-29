
import { ListNode, palindromeLink } from '.';

describe('test is palindromeLink', () => { 

  it('test_right_palindrome_linklist', () => {

    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          2,
          new ListNode(
            1
          )
        )
      )
    );
    expect(palindromeLink(head)).toBeTruthy();
  });

  it('test_wrong_palindrome_linklist', () => {

    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          2,
        )
      )
    );
    expect(palindromeLink(head)).toBeFalsy();
  });

  it('test_wrong_palindrome_two_nodes_linklist', () => {

    const head = new ListNode(
      1,
      new ListNode(
        2,
      )
    );
    
    expect(palindromeLink(head)).toBeFalsy();
  });
         
  it('test_right_palindrome_two_nodes_linklist', () => {

    const head = new ListNode(
      1,
      new ListNode(
        1,
      )
    );
    
    expect(palindromeLink(head)).toBeTruthy();
  });

})
