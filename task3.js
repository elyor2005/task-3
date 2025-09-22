import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Function to calculate LCM
function lcm(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
    return NaN;
  }
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return (x * y) / gcd(x, y);
}

// Route for your email
app.get("/elyorabdufattokhov_gmail_com", (req, res) => {
  const x = parseInt(req.query.x, 10);
  const y = parseInt(req.query.y, 10);

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
