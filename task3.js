import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// GCD with BigInt
function gcd(a, b) {
  return b === 0n ? a : gcd(b, a % b);
}

// LCM with BigInt
function lcm(x, y) {
  // Validate that x and y are strings of digits only (natural numbers)
  if (!/^[0-9]+$/.test(x) || !/^[0-9]+$/.test(y)) {
    return NaN;
  }

  const a = BigInt(x);
  const b = BigInt(y);

  if (a === 0n || b === 0n) {
    return NaN; // 0 is not natural
  }

  return (a * b) / gcd(a, b);
}

// Route for your email
app.get("/elyorabdufattokhov_gmail_com", (req, res) => {
  const { x, y } = req.query;

  const result = lcm(x, y);

  if (typeof result === "number" && isNaN(result)) {
    res.send("NaN");
  } else {
    res.send(result.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
