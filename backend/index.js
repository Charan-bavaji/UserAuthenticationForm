const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const User = [{
    email: "charan@gmail.com",
    username: "obito",
    password: "123"
}];

app.post('/signup', (req, res) => {
    const { email, password, username } = req.body;
    if (User.find((x) => x.email === email)) {
        return res.status(401).json({ message: "user already exist" });
    }
    User.push(
        {
            email,
            username,
            password
        }
    );
    return res.json({ message: "Succfully signed" }).status(201);
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ message: "enter email or password" }).status(401);
    }
    User.find((x) => {
        if (x.email === email && x.password === password) {
            return res.json({ message: "loginned" }).status((201));
        } else {
            return res.json({ message: "email or password invalied" }).status(401);
        }
    });
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})