const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: false}))

app.use('/add-product', (req, res, next) => {
    res.send(
       `<form action="/product" method="POST">
        <input type="text" name="title" placeholder="Product Title"><br>
        <input type="text" name="category" placeholder="Product Category"><br>
        <button type="submit">Add Product</button>
        </form>`
    )
});

app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
});

app.use('/', (req, res, next) => {
    res.send('<h1>main page</h1>')
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})