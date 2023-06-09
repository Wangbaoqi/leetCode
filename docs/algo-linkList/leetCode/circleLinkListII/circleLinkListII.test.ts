import { ListNode, detectCycle, detectCycleI } from './index';

describe('test_detect_Cycle_ListNode', () => {
  it('test_normal_cycle_list_node', () => {
    const node = new ListNode(1);
    const node1 = new ListNode(2);
    const node2 = new ListNode(3);
    const node3 = new ListNode(4);
    const node4 = new ListNode(5);

    node.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;

    expect(detectCycle(node)).toEqual(node2);
    expect(detectCycleI(node)).toEqual(node2);
  });

  it('test_un_normal_circle_linkList', () => {
    const node = new ListNode(1);
    const node1 = new ListNode(2);
    const node2 = new ListNode(3);
    const node3 = new ListNode(4);
    const node4 = new ListNode(5);

    node.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    expect(detectCycle(node)).toBeNull();
    expect(detectCycleI(node)).toBeNull();
  });

  it('test_one_un_circle_linkList', () => {
    const node = new ListNode(1);
    expect(detectCycle(node)).toBeNull();
    expect(detectCycleI(node)).toBeNull();
  });

  it('test_two_node_circle_linklist', () => {
    const node = new ListNode(1);
    const node1 = new ListNode(2);
    node.next = node1;
    node1.next = node;
    expect(detectCycle(node)).toEqual(node);
    expect(detectCycleI(node)).toEqual(node);
  });
});
