export default function auth(req, res, next) {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === process.env.API_KEY) return next();
  return res.status(401).json({ error: "Unauthorized: Invalid API key" });
}
