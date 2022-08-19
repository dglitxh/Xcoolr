const expApp = require("./index")
const PORT: number = 4000

expApp.listen(PORT, () => {
    console.log(` Server listening on port ${PORT}...`)
})