const posts = [
  {
    _id: "0",
    title: "Blog Post 1",
    slug: "/blog-post-1/",
    lastUpdated: "2021-01-08",
  },
  {
    _id: "1",
    title: "Blog Post 2",
    slug: "/blog-post-2/",
    lastUpdated: "2021-01-08",
  },
];

// const posts = [...Array(1024)].map((p, index) => {
//   return {
//     _id: index,
//     title: `Blog Post ${index}`,
//     slug: `/blog-post-${index}/`,
//     lastUpdated: "2022-01-01"
//   }
// })

function getPosts() {
  return {
    posts,
  };
}

module.exports = { getPosts };
