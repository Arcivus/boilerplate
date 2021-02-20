
export const getRomanNumber = (number: number): string => {
  return ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][number];
};

export const cleanTestId = (testId: string): string => {
  // remove dashes, braces, slashes, underscores, dots, spaces
  testId = testId || '';
  const result = testId
      .replace(/[\(\)']+/g,'')
      .replace(/\//g, ' ')
      .replace(/[!?,._\-]/g, ' ') // remove punctuation marks
      .trim()
      .replace(/\s+/g, '-');
  return result.toLowerCase();
};

export const convertFileSize = (bytes: number) => {
  const result = [0, 'KB'];
  result[0] = bytes / 1024;
  if (result[0] > 1000) {
    result[0] /= 1000;
    result[1] = 'MB';
  }
  if (result[0] > 1000) {
    result[0] /= 1000;
    result[1] = 'GB';
  }
  result[0] = +result[0].toFixed(2); // + makes sure there's no trailing zeroes
  return result;
}