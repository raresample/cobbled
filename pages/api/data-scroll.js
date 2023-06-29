import { query } from "../../lib/db";

export default async function handler(req, res) {
  const compareDate = req.body.compareDate;
  try {
    const querySql = "SELECT * FROM end_products WHERE scrapedate < ? ORDER BY scrapedate DESC LIMIT 10";
    const valueParams = [compareDate];
    const data = await query({ query: querySql, values: valueParams });
    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}