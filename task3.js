import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Helper: calculate gcd
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Helper: calculate lcm
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

// Route with email-friendly URL
app.get("/md_smith2_mail_srv_com", (req, res) => {
  let { x, y } = req.query;

  // Convert to numbers
  x = Number(x);
  y = Number(y);

  // Check if valid natural numbers
  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
    res.send("NaN");
    return;
  }

  // Return LCM as plain string
  res.send(String(lcm(x, y)));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
