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
        <p>{{ bigNumber.ms }}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit amet
          quam enim non laudantium ducimus, aspernatur sunt, qui deleniti eos
          hic nam nemo ipsum cupiditate voluptate repudiandae beatae reiciendis
          earum?
        </p>
      </main>
    </body>
  </html>
</template>

<script>
import fibonacci from "fibonacci";

export default {
  data() {
    return {
      pagination: {
        size: 1,
        data: "blog-posts",
        alias: "post",
      },
      permalink: (data) => `blog/${data.post.slug}/index.html`,
      bigNumber: fibonacci.iterate(3000),
    };
  },
};
</script>
