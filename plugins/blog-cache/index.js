const fs = require("fs");
const fse = require("fs-extra");
const { getPosts } = require("../../mock-blog-api");

module.exports = {
  async onPreBuild({ utils, git }) {
    // TODO - can we use modifiedFiles here to determine wether we should do a full rebuild?
    console.log(utils.git.modifiedFiles);

    if (!utils.git.modifiedFiles.includes("blog-post.vue")) {
      await utils.cache.restore("./_blog-cache");
    }
  },

  async onPostBuild({ utils }) {
    //

    if (fs.existsSync("./_site/blog")) {
      fse.copySync("./_site/blog", "./_blog-cache/posts");

      await utils.cache.save("./_blog-cache");

      // Ensure all the posts exist, otherwise fail the build
      const allSiteSlugs = fs.readdirSync("./_site/blog").map((s) => `/${s}/`);
      const allSlugs = getPosts().posts.map((post) => post.slug);

      const allPostsWritten = allSlugs.every((s) => allSiteSlugs.includes(s));

      if (!allPostsWritten) {
        utils.build.failBuild(
          "BUIlD FAILURE - SOME BLOG POSTS FAILED TO BUILD"
        );
      }
    }
  },
};
