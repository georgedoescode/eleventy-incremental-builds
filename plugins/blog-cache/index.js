const fs = require("fs");
const fse = require("fs-extra");

module.exports = {
  // Before the build runs,
  // restore a directory we cached in a previous build.
  // Does not do anything if:
  //  - the directory already exists locally
  //  - the directory has never been cached
  async onPreBuild({ utils }) {
    console.log("RUNNING PRE BUILD");

    await utils.cache.restore("./_blog-cache");
  },
  // After the build is done,
  // cache directory for future builds.
  // Does not do anything if:
  //  - the directory does not exist
  async onPostBuild({ utils }) {
    console.log("RUNNING POST BUILD");

    fse.copySync("./_site/blog", "./_blog-cache/posts");

    await utils.cache.save("./_blog-cache");
  },
};
