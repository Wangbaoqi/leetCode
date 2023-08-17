/*
 * @lc app=leetcode.cn id=355 lang=typescript
 *
 * [355] 设计推特
 */

// @lc code=start

class PriorityQueue {
  capacity: number;
  comparator: () => void;
  constructor(initialCapacity: number, comparator) {
    this.capacity = initialCapacity;
    this.comparator = comparator;
  }

  add(item: any) {}

  isEmpty(): boolean {
    return false;
  }

  poll() {}
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

    // tweets
    const tweets = [...users.values()].map(
      (userId) => this.userMap.get(userId).head
    );

    // TODO: merge K sort list

    // use PriorityQueue
    // sort tweets by time
    const pq = new PriorityQueue(
      users.size,
      (a, b) => b.tweetTime - a.tweetTime
    );

    // join in pq that head node of every linkList
    for (const id in users) {
      const tweet = users[id].head;
      if (!tweet) continue;
      pq.add(tweet);
    }

    while (!pq.isEmpty()) {
      if (result.length == this.recentMax) break;

      // popUp the max tweet
      const twt: Tweet = pq.poll();
      result.push(twt.tweetId);

      if (twt.next) {
        pq.add(twt.next);
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