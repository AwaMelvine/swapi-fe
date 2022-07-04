// Source: https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
// I picked this util function over a pagination library because I don't really 
// think this pagination feature is worth installing a library just for it.
// Adding a new library will increase bundle size and have a negative impact
// on performance
export const generatePaginationNumbers = (currentPage: number, totalNumberOfPages: number) => {
  var current = currentPage,
      last = totalNumberOfPages - 1,
      delta = 6,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

  for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || i >= left && i < right) {
          range.push(i);
      }
  }

  for (let i of range) {
      if (l) {
          if (i - l === 2) {
              rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
              rangeWithDots.push('...');
          }
      }
      rangeWithDots.push(i);
      l = i;
  }

  return rangeWithDots;
}

export const ucfirst = (str: string) => {
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
};