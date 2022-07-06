const posts = [
  {
    _id: "0",
    title: "Blog Post 1",
    slug: "/blog-post-1/",
    lastUpdated: "2021-01-07",
  },
];

function getPosts() {
  return {
    posts,
  };
}

module.exports = { getPosts };
