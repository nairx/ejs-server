import express from "express"
import expressLayouts from "express-ejs-layouts";

const app = express()
app.use(expressLayouts)
app.set("layout","layout")
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")

const products = [
    { id: 1, name: "Product 1", price: 100, desc: "This is the description", imgUrl: "https://imgsite-lac.vercel.app/1.PNG" },
    { id: 2, name: "Product 2", price: 120, desc: "This is the description", imgUrl: "https://imgsite-lac.vercel.app/2.PNG" },
    { id: 3, name: "Product 3", price: 120, desc: "This is the description", imgUrl: "https://imgsite-lac.vercel.app/3.PNG" },
]

app.get("/products/add-form", (req, res) => {
    res.render("products/add")
})

app.post("/products/submit", (req, res) => {
    products.push(req.body)
    res.redirect("products/")
})

app.get("/products", (req, res) => {
    res.render("products/", { products })
})

app.get("/", (req, res) => {
    res.render("home",{name:"John",age:21})
})

app.listen(9090, () => console.log("Server started"))
