import express from "express"
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

app.get("/", (req, res)=>{
    res.sendFile(path.join(distPath, 'index.html'));
})

app.post("/", (req, res)=>{
    const {name, email, password} = req.body
    console.log(name, email, password);
    res.json({
        message: "User Created"
    })
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})