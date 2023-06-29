import { query } from "../../lib/db";

export default async function handler(req, res) {
  const sku = req.body.sku;
  try {
    const querySql = "SELECT title, sku, url, detail, images, price FROM end_products WHERE sku = ?";
    const valueParams = [sku];
    const data = await query({ query: querySql, values: valueParams });
    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}