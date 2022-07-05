'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  data() {
    return {
      pagination: {
        size: 1,
        data: "blog-posts",
        alias: "post",
      },
      permalink: (data) => `blog/${data.post.slug}/index.html`,
    };
  },
};

module.exports = script;
