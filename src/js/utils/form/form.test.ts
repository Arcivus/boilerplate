import {validateEmail} from "@/js/utils/form/form";

describe('Form utilities', () => {
  it('email validates correctly', () => {
    expect(validateEmail('test@example.com')).toBeTruthy();
  });
  it('email in wrong format fails check', () => {
    expect(validateEmail('text@text')).toBeFalsy();
  });
  it('typos in email fail check', () => {
    expect(validateEmail('text@example..com')).toBeFalsy();
  });
});