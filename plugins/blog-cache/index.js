const fs = require("fs");
const fse = require("fs-extra");

module.exports = {
  async onPreBuild({ utils, git }) {
    // TODO - can we use modifiedFiles here to determine wether we should do a full rebuild?
    console.log(utils.git.modifiedFiles);

    if (!utils.git.modifiedFiles.contains("blog-post.vue")) {
      await utils.cache.restore("./_blog-cache");
    }
  },

  async onPostBuild({ utils }) {
    fse.copySync("./_site/blog", "./_blog-cache/posts");

    await utils.cache.save("./_blog-cache");
  },
};
