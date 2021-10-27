const { DateTime } = require("luxon");
const eleventyNavigation = require("@11ty/eleventy-navigation");
const eleventySass = require("eleventy-plugin-sass");
const eleventyCleanCSS = require("clean-css");
const eleventyInclusiveLang = require("@11ty/eleventy-plugin-inclusive-language");
const eleventyMarkdownIt = require("markdown-it");
const eleventyMarkdownItFigures = require("markdown-it-implicit-figures");

module.exports = function (eleventyConfig) {
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

  let markdownLib = eleventyMarkdownIt(markdownItOptions)
    .use(eleventyMarkdownItFigures);

  eleventyConfig.setLibrary("md", markdownLib);

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

  // Filter to limit items in a collection loop
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });

  // Filter to minimize CSS for inlining
  eleventyConfig.addFilter("cssmin", function (code) {
    return new eleventyCleanCSS({}).minify(code).styles;
  });

  // Shortcode to render Markdown in Nunjucks
  eleventyConfig.addNunjucksShortcode("markdown", function (content) {
    return `${markdownLib.render(content)}`;
  });

  // Copy _src/img folder to _site/img
  eleventyConfig.addPassthroughCopy("_src/img");

  // Copy _src/js folder to _site/js
  eleventyConfig.addPassthroughCopy("_src/js");

  return {
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "_src",
    },
  };
};
