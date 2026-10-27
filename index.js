import express from "express"

const app = express()

app.set("view engine", "ejs")

app.get("/products", (req, res) => {
    res.render("products/index.ejs")
})

app.listen(9090,()=>console.log("Server started"))