/*
 * @lc app=leetcode.cn id=355 lang=typescript
 *
 * [355] 设计推特
 */

// @lc code=start

class ListNode {
  userId: number;
  tweetId: number;
  followerId: number;
  followeeId: number;
}

export class Twitter {
  constructor() {}

  postTweet(userId: number, tweetId: number): void {}

  getNewsFeed(userId: number): number[] {}

  follow(followerId: number, followeeId: number): void {}

  unfollow(followerId: number, followeeId: number): void {}
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
