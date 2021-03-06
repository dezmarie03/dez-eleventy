const { DateTime } = require("luxon");
const eleventyNavigation = require("@11ty/eleventy-navigation");
const eleventySass = require("eleventy-plugin-sass");
const eleventyInclusiveLang = require("@11ty/eleventy-plugin-inclusive-language");
const eleventyMarkdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Enable deep merge for eleventyComputed
  eleventyConfig.setDataDeepMerge(true);

  // Initialize Eleventy navigation plugin
  eleventyConfig.addPlugin(eleventyNavigation);

  // Initialize Eleventy inclusive language plugin
  eleventyConfig.addPlugin(eleventyInclusiveLang);

  // Initialize Sass plugin
  eleventyConfig.addPlugin(eleventySass, {
    watch: ['_src/scss/**/*.scss'],
  });

  let markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary("md", eleventyMarkdownIt(markdownItOptions));

  // Filter for readable post date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromISO(dateObj, { zone: "utc" }).toFormat(
      "LLLL dd, yyyy"
    );
  });

  // Filter for current year (data from site.js)
  eleventyConfig.addFilter("year", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy");
  });

  // Copy _src/img folder to _site/img
  eleventyConfig.addPassthroughCopy("_src/img");

  return {
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "_src",
    },
  };
};
