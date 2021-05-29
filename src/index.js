let express = require("express");
let app = express();
let router = require('./router/userRouter');
let cors = require('cors');
let port = process.env.PORT || 8010;


global.__root = __dirname + "/";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', router);
app.listen(port, () => console.log("App listening at %s", port));
console.log("Server is listening");
