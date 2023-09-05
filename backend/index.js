const express = require('express');
const app = express();
const appRoute = require ("./Routs/router.js")
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // or app.use(express.json()) for line 4, 5 and 6
app.use(bodyParser.json());

// route
app.use('/api',appRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
