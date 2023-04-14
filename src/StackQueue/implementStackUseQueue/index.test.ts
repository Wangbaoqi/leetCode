
import MyQueue from './232.用栈实现队列';


describe('implement queue use stack', () => {


  it("test_push_and_pop", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
  });


  it("test_order_maintained", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.pop()).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
  });
})