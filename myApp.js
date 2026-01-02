let express = require("express")
let app = express()

console.log("Hello World")

// SERVING STATIC ASSETS ie.FILES/FOLDERS USING THE 
// IN-BUILT MIDDLEWARE FUNCTION ie express.static()
const absolutePath = __dirname + "/public"
app.use("/public", express.static(absolutePath))

// SERVING FILES IN A REQUEST
app.get("/", (req, res) => {
    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})



module.exports = app