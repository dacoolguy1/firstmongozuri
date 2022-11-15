// recall that controller haldes incoming requests

const Task = require("..//model/todo");
//const {v4: uuid} = require("uuid");


//  Add a Todo task to a Todo collection
exports.createTask = async (req, res) => {
    try {
        let task = await req.body;
        //let created = await User.create(user);
        const {title, description} = await req.body;
        const newTask = {
            title,
            description,
            time: new Date().toLocaleTimeString(),
            date : new Date().toLocaleDateString(),
        }
        let created = await Task.create(newTask);

         if(!created) {
             return res.status(400).json({
                 success: false,
                 message: "The task creation failed",
             });
           

         }
             
        //User.push(newUser);
        return res.status(201).json({
            success: true,
            message: "The task has been created",
            newTask,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Internal server error",
            error: error.message,
        });
    }
};


// retreive all todo tasks
exports.getAllTasks = async (req, res) =>{
    try {
        let tasks = await Task.find();
        if(tasks.length === 0 ){
            return res.status(404).json({
                messsage: "No task was found",
                success: false
            })
        }
        res.status(200).json({
            success: true,
            message: "Task found",
            tasks,
            count: tasks.length

        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })
         
    }
}

// get single users 
exports.getSingleTasks = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let task = await Task.findOne(id); // we find the user based on the id

        if (!user) 
            return res.status(404).json({
                success: false,
                message: "Your Task has not been found"
        });
        res.status(200).json({
            success:true,
            message: "Your task has been found",
            task
        });

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Intenal Server Error",
            error: error.message
        });
        
    }
};

// update Delete Todo task
exports.updateTask = async (req, res) => {

    try {
        let id = req.params.id;
        let task = await req.body;
        let update = await Task.findOneAndUpdate(id, task, {new: true} );
        if (!update) {
            return res.status(400).json({
                sucess: false,
                message: "Task not updated",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Task updated",
            task: update,
    });
    } catch (error) {
        res.status(500).json({
            suecces: false,
            message : "Internal server error",
            error: error.message
        })
        
    }
};

// delete users

exports.deleteTask = async (req, res) => {
    try {
        let id = req.params.id;
        let deleted = await Task.findOneAndDelete(id);
        if (!deleted)
            return res.status(400).json({
                success: false,
                message: "Task not deleted"
            });
        return res.status(200).json({success: true, messsage: "Task delted successfully"});

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}


