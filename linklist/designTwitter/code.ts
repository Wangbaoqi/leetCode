/*
 * @lc app=leetcode.cn id=355 lang=typescript
 *
 * [355] 设计推特
 */

// @lc code=start

class PriorityQueue<T> {
  comparator: (a: T, b: T) => number;
  data: T[] = [];
  capacity: number;
  constructor(initialCapacity: number, comparator = (a, b) => a - b) {
    this.comparator = comparator;
    this.capacity = initialCapacity;
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) return;

    for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  offer(value: T) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index: number) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(findIndex, index);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1: number, index2: number) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1]
    ];
  }

  poll(): T {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  size() {
    return this.data.length;
  }

  clear() {
    this.data = [];
  }

  isEmpty(): boolean {
    return false;
  }
}

class User {
  id: number;
  followed: Set<number>;
  head: Tweet | null;
  constructor(useId: number) {
    this.id = useId;
    this.followed = new Set();
    this.head = null;
    this.follow(useId);
  }
  follow(userId: number) {
    this.followed.add(userId);
  }
  unfollow(userId: number) {
    if (userId !== this.id) {
      this.followed.delete(userId);
    }
  }
  post(tweetId: number) {
    const timestamp = +new Date();
    const tweet = new Tweet(tweetId, timestamp);
    tweet.next = this.head;
    this.head = tweet;
  }
}

class Tweet {
  tweetId?: number = -1;
  tweetTime?: number = -1;
  next: Tweet | null;
  constructor(tweetId?: number, tweetTime?: number) {
    this.tweetId = tweetId;
    this.tweetTime = tweetTime;
  }
}

export class Twitter {
  recentMax: number;
  userMap: Map<number, User>;
  constructor() {
    this.recentMax = 10;
    this.userMap = new Map();
  }

  postTweet(userId: number, tweetId: number): void {
    if (!this.userMap.has(userId)) {
      this.userMap.set(userId, new User(userId));
    }
    const user = this.userMap.get(userId);
    user.post(tweetId);
  }

  getNewsFeed(userId: number): number[] {
    const result: number[] = [];
    if (!this.userMap.has(userId)) return result;

    // userIds
    const users = this.userMap.get(userId).followed;

    // TODO: merge K sort list

    // use PriorityQueue
    // sort tweets by time
    const pq = new PriorityQueue<Tweet>(
      users.size,
      (a, b) => b.tweetTime - a.tweetTime
    );

    // join in pq that head node of every linkList
    for (const id in users) {
      const tweet = users[id].head;
      if (!tweet) continue;
      pq.offer(tweet);
    }

    while (!pq.isEmpty()) {
      if (result.length == this.recentMax) break;

      // popUp the max tweet
      const twt: Tweet = pq.poll();
      result.push(twt.tweetId);

      if (twt.next) {
        pq.offer(twt.next);
      }
    }

    return result;
  }

  follow(followerId: number, followeeId: number): void {
    if (!this.userMap.has(followerId)) {
      this.userMap.set(followerId, new User(followerId));
    }
    if (!this.userMap.has(followeeId)) {
      this.userMap.set(followeeId, new User(followeeId));
    }
    this.userMap.get(followerId).follow(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    if (this.userMap.has(followerId)) {
      this.userMap.get(followerId).unfollow(followeeId);
    }
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end
