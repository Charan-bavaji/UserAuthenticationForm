const express = require('express')
const app = express()
const port = 3001
app.use(express.json());


// app.post('/signup', (req, res) => {
//   const { email, password } = req.body;
//   if (!email && !password) {
//     return res.send("email and password required")
//   }
//   const userExists = USERS.some(obj => obj.hasOwnProperty("email") && obj["email"] === email);
//   if (userExists) {
//     return res.send("User already exist")
//   }
//   USERS.push({ email: email, password: password });
//   return res.send("Created successfully");
// });

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: "Enter email and password" });
  }

  const existingUser = USERS.find(
    (obj) => obj.hasOwnProperty("email") && obj.email === email && obj.password === password
  );

  if (existingUser) {
    return res.status(200).json({ message: "You are logged in" });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});
