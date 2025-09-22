import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Function to calculate LCM with BigInt
function lcm(x, y) {
  try {
    const a = BigInt(x);
    const b = BigInt(y);

    if (a === 0n && b === 0n) return 0n;

    const gcd = (m, n) => (n === 0n ? m : gcd(n, m % n));
    return (a * b) / gcd(a, b);
  } catch (err) {
    return NaN;
  }
}

// Route for your email
app.get("/elyorabdufattokhov_gmail_com", (req, res) => {
  const x = req.query.x;
  const y = req.query.y;

  const result = lcm(x, y);

  if (isNaN(result)) {
    res.send("NaN");
  } else {
    res.send(result.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on https://task-3-app.onrender.com:${port}`);
});
