const express = require('express');
const { findMaxId } = require('./utils/utils');

const app = express()
app.use(express.json());

const employees = [
    {
        id: "1",
        name: "muhamed",
        surname: "sivic"
    },
    {
        id: "2",
        name: "ahmed",
        surname: "krdzalic"
    }
]

app.get('/employees', (req, res) => {
    res.json(employees)
  })

app.get('/employees/:id', (req, res) => {
    let id = req.params.id
    let employee = employees.find((emp)=>emp.id === id)
    res.json(employee)
})

app.post('/employees', (req, res) => {
    let employee = req.body

    employee.id = (findMaxId(employees)+1).toString()

    employees.push(employee)

    res.json(employees)
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})