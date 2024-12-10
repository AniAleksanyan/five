import express from 'express';

const app = express();

app.set("views", "pages");
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home", {
        name: "Edgar",
        people: [
            "Tiko",
            "Ashxen",
            "Ashot",
            "Nare",
        ]
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});