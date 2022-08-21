const express = require('express')
const router = express.Router()


//to get all employees
router.get('/', (req, res) => {
    res.send("get request for all employee")
})


//to get one employee
router.get('/:id', (req, res) => {
    res.send(`get request for one empolyee with id :${req.params.id}`)
})

//post request to add new employee
router.post('/',(req,res)=>{
    const employee={
            name: req.body.name,
            email: req.body.email,
            phone:req.body.phone,
            address:req.body.address
        }

        res.status(201).json(employee)
    
})

//patch request to update employee

router.patch('/:id',(req,res)=>{
    res.status(200).send(`patch request for one empolyee with id :${req.params.id}`)

})

//delete request for one employee
router.delete('/:id',(req,res)=>{
    res.send(`delete request for one empolyee with id :${req.params.id}`)
})


module.exports = router