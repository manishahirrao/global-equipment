/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://globalequipments.net",
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: "./out",
};
