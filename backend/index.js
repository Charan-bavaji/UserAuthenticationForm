const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const User = [{
    email: "charan@gmail.com",
    username:"obito",
    password: "123"
}];

app.post('/signup', (req, res) => {
    const { email, password,username } = req.body;
    if(User.find((x)=>x.email === email)){
        return res.status(401).json({message:"user already exist"});
    }
    User.push(
        {email,
        username,
        password}
    );
    return res.json({message:"Succfully signed"}).status(201);
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})