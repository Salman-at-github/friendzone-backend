const paginateResults = (page, pageSize, data, totalPostsCount) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalPostsCount); // Use Math.min to prevent endIndex from exceeding totalPostsCount

  const results = {};

  // results.results = data.slice(startIndex, endIndex);
  results.results = data;

  // Calculate total pages
  results.totalPages = Math.ceil(totalPostsCount / pageSize);

  return results;
};

module.exports = { paginateResults };
