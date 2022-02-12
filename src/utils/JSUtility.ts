export default {
  includeCommaInNumber: (number: number): string =>
    number
      .toString()
      .split('')
      .reverse()
      .map((v, i) => (i % 3 === 0 && i !== 0 ? `${v},` : v))
      .reverse()
      .join(''),
};
