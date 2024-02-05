import { ListNode, reverseList } from './code';

describe('test_reverse_linklist', () => {
  it('test_multiple_nodes_list_reverses_correctly', () => {
    const head = new ListNode(-1);
    // Arrange
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    head.next = node1;
    node1.next = node2;
    node2.next = node3;

    const reversedList = reverseList(head);

    // Assert
    expect(reversedList?.val).toBe(3);
    expect(reversedList?.next?.val).toBe(2);
    expect(reversedList?.next?.next?.val).toBe(1);
  });

  it('test_empty_nodes_list_reverse', () => {
    const head = null;
    const reversedList = reverseList(head);
    expect(reversedList).toBeNull();
  });
});
