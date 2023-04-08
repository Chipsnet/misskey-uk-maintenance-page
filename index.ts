import express from "express"
import path from "path"

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("Start on port 3000.")
})

app.use("/assets", express.static("assets"))

app.get('*', (req: express.Request, res: express.Response) => {
    res.status(503).sendFile(path.join(__dirname, "html", "index.html"))
})