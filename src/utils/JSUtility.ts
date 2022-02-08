export default {
  includeCommaInNumber: (number: number): string => {
    return number
      .toString()
      .split('')
      .reverse()
      .map((v, i) => (i % 3 === 0 && i !== 0 ? `${v},` : v))
      .reverse()
      .join('');
  },
};
