import express from 'express'
import {all} from "express/lib/application";

const app = express();
app.use(express.json());

app.get("/goals", (req, res) => {
    try {
        const allGoals = [
            {id: '0', name: 'Спорт'},
            {id: '1', name: 'Навчання'},
            {id: '2', name: "Сім’я"},
            {id: '3', name: 'Відпочинок'},
        ]
        res.send(allGoals)
    } catch (err) {
        console.log('not found')
    }
})

app.listen(5000, () => {
    console.log('app listening http://localhost:5000')
})