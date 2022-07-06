const posts = [...Array(1024)].map((p, index) => {
  return {
    _id: index,
    title: `Blog Post ${index}`,
    slug: `/blog-post-${index}/`,
    lastUpdated: "2022-01-01",
  };
});

function getPosts() {
  return {
    posts,
  };
}

module.exports = { getPosts };
