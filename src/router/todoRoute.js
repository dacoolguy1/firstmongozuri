const router = require('express').Router();

const controller = require('../controller/todocontroller');

router.get("/", controller.getAllTasks);

//router.get('/:id', controller.getSingleUsers);

router.post("/", controller.createTask);

router.put('/:id', controller.updateTask);

router.delete('/:id', controller.deleteTask);



module.exports = router