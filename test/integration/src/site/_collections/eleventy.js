const path = require('path');
const {
  postsWithLighthouse,
} = require(`../../../../../src/site/_collections/posts-with-lighthouse`);
const recentBlogPosts = require(`../../../../../src/site/_collections/recent-blog-posts`);

module.exports = function (config) {
  // Order is important, as it uses the same collections object under the hood.
  // Keep the same order of calls as in /eleventy.js.
  config.addCollection('postsWithLighthouse', postsWithLighthouse);
  config.addCollection('recentBlogPosts', recentBlogPosts);

  return {
    dir: {
      output: path.join(__dirname, '.tmp'),
    },
  };
};
