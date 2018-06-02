import "babel-core/register";
import "babel-polyfill";

// const parsePost = require('./parsePost');
import parsePost from "./parsePost";
// const sites = require("./sites")
import sites from './sites';

parsePost(
  "https://chernovik.net/content/sport/udalenie-anzhi-s-polya",
  sites.chernovik
)