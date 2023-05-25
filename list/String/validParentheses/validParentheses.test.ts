

import { isValid_stack } from './20.有效的括号'

describe('isValidParentheses', () => {

  it('test_balanced_parentheses', () => {
    expect(isValid_stack("()")).toBe(true);
    expect(isValid_stack("[]")).toBe(true);
    expect(isValid_stack("{}")).toBe(true);
    expect(isValid_stack("({[]})")).toBe(true);
  })

  it('test_nested_parentheses', () => {
    expect(isValid_stack("([]{})")).toBe(true);
    expect(isValid_stack("([{()}])")).toBe(true);
  })

  it("test_unbalanced_parentheses", () => {
    expect(isValid_stack("(")).toBe(false);
    expect(isValid_stack(")")).toBe(false);
    expect(isValid_stack("[[)")).toBe(false);
    expect(isValid_stack("{}}")).toBe(false);
  });

  it("test_mismatched_parentheses", () => {
    expect(isValid_stack("(]")).toBe(false);
    expect(isValid_stack("{)")).toBe(false);
    expect(isValid_stack("[}")).toBe(false);
  });

  it("test_only_opening_parentheses", () => {
    expect(isValid_stack("(")).toBe(false);
    expect(isValid_stack("((((((")).toBe(false);
  });

  it("test_only_closing_parentheses", () => {
    expect(isValid_stack(")")).toBe(false);
    expect(isValid_stack("))))))")).toBe(false);
  });

  it("test_odd_number_parentheses", () => {
    expect(isValid_stack("()(")).toBe(false);
    expect(isValid_stack("(()))")).toBe(false);
  });
  
  
  it("test_long_input", () => {
    let longInput = "";
    for (let i = 0; i < 100000; i++) {
        longInput += "()";
    }
    expect(isValid_stack(longInput)).toBe(true);
  });
  
})