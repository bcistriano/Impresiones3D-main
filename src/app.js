const createError = require('http-errors');
const express = require("express");
const app = express();
const path = require("path");

//Requerir archivos de ruteo
let indexRoutes = require("./routes/index.routes");
let usersRoutes = require("./routes/users.routes");
let productsRoutes = require("./routes/products.routes");

//Ruteo
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/", indexRoutes);

//Setting EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.listen(3001, () => console.log("Servidor corriendo"));


//Para poder usar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Ruta de archivos estáticos
app.use(express.static(path.resolve(__dirname, "../public")));

//app.get ('/404', (req,res) => {res.send('Error página no encontrada'); });

//Register
app.get("/register", (req, res) => res.render("register"));

//Login
app.get("/login", (req, res) => res.render("login"));

//Listado de productos
//app.get("/", (req, res) => res.render("/productsCreate"));

app.post("/", (req, res) => res.sendFile(path.resolve(__dirname, "../src/views/index.html"))); 



