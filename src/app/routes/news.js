const dbconnection = require("../../config/dbConnection")
const dbConnection = require("../../config/dbConnection")

module.exports = app =>{
    const connection = dbconnection();
    
    app.get("/",(req, res)=> {
        connection.query("select * from news", (err, result) =>{
           console.log(result)
            res.render("news/news", {
                news: result
            })     
        })
    })
    app.post("/news", (req, res) => {
        const {title,news} = req.body;
        connection.query("INSERT INTO news SET?", {
            title,
            news
        }, (err, result) => {
            res.redirect("/");
        });
    });
}

