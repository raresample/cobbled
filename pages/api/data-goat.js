import { query } from "../../lib/db-goat";

export default async function handler(req, res) {
  const sku = req.body.sku;
  try {
    const querySql = "SELECT * FROM goat2 ORDER BY released DESC LIMIT 100";
    const valueParams = [];
    const data = await query({ query: querySql, values: valueParams });
    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}