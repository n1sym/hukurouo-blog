import express from "express";
import { $content } from '@nuxt/content'
const app = express();

module.exports = app.get("/contents", async (_req, res) => {
  const query = await $content('articles' || 'index').only(['title', 'path']).sortBy('date', 'desc')
  const articles = await query.fetch()
  res.json(articles)
});
