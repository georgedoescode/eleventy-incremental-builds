const posts = [
  {
    _id: "0",
    title: "Blog Post 1 - Updated Title",
    slug: "/blog-post-1/",
    lastUpdated: "2021-01-07",
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
  {
    _id: "4",
    title: "Blog Post 5",
    slug: "/blog-post-5/",
    lastUpdated: "2021-01-01",
  },
  {
    _id: "5",
    title: "Blog Post 6",
    slug: "/blog-post-6/",
    lastUpdated: "2021-01-01",
  },
  {
    _id: "6",
    title: "Blog Post 7",
    slug: "/blog-post-7/",
    lastUpdated: "2021-01-02",
  },
];

function getPosts() {
  return {
    posts,
  };
}

module.exports = { getPosts };
