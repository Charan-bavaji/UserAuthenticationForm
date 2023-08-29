
const User = [{
    email: "charan@gmail.com",
    username: "obito",
    password: "1234"
}];
const home = (req, res) => {
    res.status(201).json({ msg: "successfull" });
}
const bill = (req, res) => {
    res.status(201).json({ msg: "Billlss" });
}
const signup = (req, res) => {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
        return res.json({ mes: "enter a value" }).status(401);
    } else if (User.find((x) => x.email === email)) {
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
}

const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json({ msg: "enter values" }).status(401);
    } else {
        User.find((user) => {
            if (user.email === email && user.password === password) {
                res.json({ msg: "loginned...!" }).status(201);
            } else {
                res.json({ msg: "Invalied email or password" }).status(401);
            }
        })
    }
}

module.exports = {
    home,
    signup,
    login,
    bill,
}
