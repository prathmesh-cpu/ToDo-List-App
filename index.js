import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let newItems = [];
let newWorkItems = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {
        today: getToday(),
        newItems: newItems
    });
})

app.post("/", (req, res) => {
    let newItem = req.body.newItem;
    if (newItem == "" || newItem == null || newItem == undefined) {

    }
    else {
        newItems.push(newItem);
    }
    res.redirect("/");
})

app.get("/work", (req, res) => {
    res.render("work.ejs", {
        today: getToday(),
        newWorkItems: newWorkItems
    });
})

app.post("/work", (req, res) => {
    let newItem = req.body.newItem;
    if (newItem == "" || newItem == null || newItem == undefined) {

    }
    else {
        newWorkItems.push(newItem);
    }
    res.redirect("/work");
})

app.listen(3000, () => console.log(`Listen server at port: http://localhost:3000.`));

function getToday() {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
    let today = new Date().toLocaleString("en-us", options);
    today = today.split(",");
    today = today[0] + ", " + today[1] + " " + today[2];
    return today
}