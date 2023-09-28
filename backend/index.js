const express = require('express');
const app = express();
const appRoute = require("./Routs/router.js")
require('dotenv').config({ path: 'database/dont.env' });
const port = process.env.PORT;
const cookieParser = require("cookie-parser");
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser());
const cors = require('cors');
app.use(cors());

// route
app.use('/api', appRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
