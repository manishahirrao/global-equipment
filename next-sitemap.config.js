/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://jayengineering.in",
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: "./out",
};
