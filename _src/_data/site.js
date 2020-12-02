// Dynamic data for use in templates
// available as {{ site.* }}
//
// - buildTime: exports the build date
// - generator: gets the current 11ty version for meta name="generator" tag

const eleventyPackage = require("@11ty/eleventy/package.json");

module.exports = {
  buildTime: new Date(),
  generator: `${eleventyPackage.name} v${eleventyPackage.version}`,
};
