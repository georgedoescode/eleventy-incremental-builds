<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Blog Post</title>
    </head>
    <body>
      <main>
        <h1>{{ post.title }}</h1>
      </main>
    </body>
  </html>
</template>

<script>
export default {
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
</script>
