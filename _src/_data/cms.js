// Connect to DatoCMS to fetch posts

// Dependencies
require("dotenv").config();
const { promisify } = require("util");
const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");

// Create, read, and write a cache file to store posts
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

// Dato CMS token from .env
const token = process.env.DATOCMS_TOKEN;

// Fetches data as JSON from DatoCMS
async function fetchData(token) {
  const query = await readFile(path.join(__dirname, "cms-query.graphql"));

  let url = "https://graphql.datocms.com/";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: query.toString(),
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Aborting: DatoCMS request failed with " + response.status);
    }
  });

  if (response.errors) {
    throw new Error("Aborting: DatoCMS errors.");
  } else {
    return response.data;
  }
}

// Check for cache file
async function getCache(cachePath) {
  try {
    const cache = await readFile(cachePath);
    return JSON.parse(cache);
  } catch (error) {
    // returns undefined; cache does not exist
  }
}

// Export data to 11ty
async function Cms() {
  const cachePath = path.join(__dirname, "cms.11tydata.json");
  const cache = await getCache(cachePath);

  if (cache) {
    console.log(">> Using cached data.");
    return cache;
  } else {
    console.log(">> Fetching latest data from DatoCMS.");
    const data = await fetchData(token);
    await writeFile(cachePath, JSON.stringify(data, null, 2));
    return data;
  }
}

module.exports = Cms();
