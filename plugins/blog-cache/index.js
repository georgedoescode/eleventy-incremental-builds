const fs = require("fs");
const fse = require("fs-extra");

module.exports = {
  async onPreBuild({ utils, git }) {
    console.log(git);
    await utils.cache.restore("./_blog-cache");
  },

  async onPostBuild({ utils }) {
    fse.copySync("./_site/blog", "./_blog-cache/posts");

    await utils.cache.save("./_blog-cache");
  },
};
