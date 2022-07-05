const posts = [
  {
    _id: "0",
    title: "Blog Post 1",
    slug: "/blog-post-1/",
    lastUpdated: "2021-01-02",
  },
  {
    _id: "1",
    title: "Blog Post 2",
    slug: "/blog-post-2/",
    lastUpdated: "2021-01-01",
  },
  {
    _id: "2",
    title: "Blog Post 3",
    slug: "/blog-post-3/",
    lastUpdated: "2021-01-01",
  },
  {
    _id: "3",
    title: "Blog Post 4",
    slug: "/blog-post-4/",
    lastUpdated: "2021-01-01",
  },
];

function getPosts() {
  return {
    posts,
  };
}

module.exports = { getPosts };
