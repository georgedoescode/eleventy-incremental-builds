const fs = require("fs");
const fse = require("fs-extra");
const { getPosts } = require("../mock-blog-api");

const CACHE_DIR = "_blog-cache";

function writeToCache(data) {
  const filePath = `${CACHE_DIR}/blog-posts.json`;
  const fileContent = JSON.stringify(data, null, 2);

  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR);
  }

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;

    console.log(`>>> Blog cache saved to ${filePath}`);
  });
}

function readFromCache() {
  const filePath = `${CACHE_DIR}/blog-posts.json`;

  if (fs.existsSync(filePath)) {
    const cacheFile = fs.readFileSync(filePath);

    return JSON.parse(cacheFile);
  }

  return {
    posts: [],
  };
}

module.exports = () => {
  const res = getPosts();
  const blogCache = readFromCache();

  if (blogCache && blogCache.posts.length > 0) {
    console.log(">>> Restoring posts from cache");
    const newData = {
      posts: res.posts,
    };

    writeToCache(newData);

    const postsThatNeedToUpdate = [];

    for (const post of newData.posts) {
      const cachedPost = blogCache.posts.find((p) => (p._id = post._id));

      // If the post is not yet cached, or has been updated more recently than the cached version, render it again
      if (
        !cachedPost ||
        new Date(post.lastUpdated) > new Date(cachedPost.lastUpdated)
      ) {
        postsThatNeedToUpdate.push(post);
      } else {
        console.log("running");
        // This post has not updated, restore it from the Netlify cache
        fse.copySync(
          `${CACHE_DIR}/posts/${post.slug}/`,
          `_site/blog/${post.slug}`
        );
      }
    }

    if (postsThatNeedToUpdate.length > 0) {
      console.log(`>>> Updating posts ${postsThatNeedToUpdate}`);
    } else {
      console.log(`>>> No posts to update!`);
    }

    return postsThatNeedToUpdate;
  }

  writeToCache(res);

  console.log(`>>> Fresh posts! ${res.posts}`);

  return res.posts;
};
