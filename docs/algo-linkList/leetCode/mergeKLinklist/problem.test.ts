import { mergeKListsI, ListNode } from './index';

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

describe('test mergeKLists', () => {
	it('test_normal_list', () => {
		const list = [
			generateLink([1, 4, 5]),
			generateLink([1, 3, 4]),
			generateLink([2, 6])
		];
		const result = mergeKListsI(list);
		expect(printLink(result)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
	});

	it('test_empty_lists', () => {
		const list = [];
		expect(mergeKListsI(list)).toEqual(null);
	});

	it('test_empty_listLink', () => {
		const list = [null];
		expect(mergeKListsI(list)).toEqual(null);
	});
});
