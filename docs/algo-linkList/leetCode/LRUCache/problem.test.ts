import { ListNode, LRUCache } from './index';

export const printLink = (head: ListNode | null): number[] => {
	const res: number[] = [];
	for (let node = head; node != null; node = node.next) {
		res.push(node.value);
	}
	return res;
};

describe('test_lru-cache', () => {
	it('test_normal', () => {
		const cache = new LRUCache(2);

		cache.put(1, 1);
		cache.put(2, 2);
		cache.get(1);
		cache.put(3, 3);
		cache.get(2);
		cache.put(4, 4);
		cache.get(1);
		cache.get(3);
		cache.get(4);

		const result = printLink(cache.linkList.dummyHead);
		expect(result).toEqual([-1, 4, 3, -1]);
	});
});
