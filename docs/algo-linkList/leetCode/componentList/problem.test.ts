import { ListNode, numComponents } from './index';

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

describe('test numComponents', () => {
	it('test_normal_listLink', () => {
		const head = generateLink([0, 1, 2, 3]);
		expect(numComponents(head, [0, 1, 3])).toBe(2);
	});

	it('test_normal_listLink-1', () => {
		const head = generateLink([0, 1, 2, 3, 4]);
		expect(numComponents(head, [0, 3, 1, 4])).toBe(2);
	});
});
