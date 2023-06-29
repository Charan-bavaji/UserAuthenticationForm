const express = require('express')
const app = express()
const port = 3001
app.use(express.json());

const USERS = [{
  email: "obitoUchiha@gamail.com",
  password: "1234"
}
];

app.post('/signup', (req, res) => {

  const { email, password } = req.body;
  // Check if the email or password is missing
  if (!email && !password) {
    return res.send("email and password required")
  }

  // Check if the email is already taken
  // const userExist = USERS.map((obj) => obj.email === email);
  const userExists = USERS.some(obj => obj.hasOwnProperty("email") && obj["email"] === email);
  if (userExists) {
    return res.send("User already exist")
  }
  // Create a new user
  USERS.push({ email: email, password: password });
  return res.send("Created successfully");
  // Return a success response

});

app.post('/post', (req, res) => {
  res.send('POST request to the homepage')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


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
app.get('/signin', (req, res) => {
  res.send('i am login')
})



app.get('/dashboard', (req, res) => {
  res.send('am posting')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})