/*
 * @lc app=leetcode.cn id=355 lang=typescript
 *
 * [355] 设计推特
 */

// @lc code=start

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
    this.followed.delete(userId);
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
