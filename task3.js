import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// GCD with BigInt
function gcd(a, b) {
  return b === 0n ? a : gcd(b, a % b);
}

// LCM with BigInt
function lcm(x, y) {
  try {
    const a = BigInt(x);
    const b = BigInt(y);

    // If client expects LCM(0, n) = n
    if (a === 0n && b === 0n) return NaN;
    if (a === 0n) return b;
    if (b === 0n) return a;

    return (a * b) / gcd(a, b);
  } catch {
    return NaN;
  }
}

// Route for your email
app.get("/elyorabdufattokhov_gmail_com", (req, res) => {
  const { x, y } = req.query;

  const result = lcm(x, y);

  if (typeof result === "number" && isNaN(result)) {
    res.send("NaN");
  } else if (result === NaN) {
    res.send("NaN");
  } else {
    res.send(result.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
