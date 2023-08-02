import { ListNode, reverseKGroup } from './index';

const generateLink = (arr: number[]) => {
	const dummy = new ListNode(-1);

	let node = dummy;
	let len = arr.length;
	let i = 0;

	while (i < len) {
		node.next = new ListNode(arr[i++]);
		node = node.next;
	}

	return dummy.next;
};

export const printLink = (head: ListNode | null): number[] => {
	const res: number[] = [];
	for (let node = head; node != null; node = node.next) {
		res.push(node.val);
	}
	return res;
};

describe('test reverseKGroup', () => {
	it('test_normal_linklist_reverse_k-2', () => {
		const head = generateLink([1, 2, 3, 4, 5]);
		const result = printLink(reverseKGroup(head, 2));
		expect(result).toEqual([2, 1, 4, 3, 5]);
	});

	it('test_normal_linklist_reverse_k-3', () => {
		const head = generateLink([1, 2, 3, 4, 5]);
		const result = printLink(reverseKGroup(head, 3));
		expect(result).toEqual([3, 2, 1, 4, 5]);
	});

	it('test_normal_linklist_reverse_k-1', () => {
		const head = generateLink([1]);
		const result = printLink(reverseKGroup(head, 1));
		expect(result).toEqual([1]);
	});

	it('test_normal_linklist_reverse_k-1', () => {
		const head = generateLink([1, 2]);
		const result = printLink(reverseKGroup(head, 1));
		expect(result).toEqual([1, 2]);
	});
});
