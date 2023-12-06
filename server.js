const express = require("express");
const port = 4000;
const mongoose = require("mongoose")
const app = express();
app.use(express.json())

const userData = new mongoose.Schema({
    name: {
    type: String,
    require: [true, "Name is required, kindly fill your name"]
    },

    userName: {
    type: String,
    unique: [true, "This Username Already Exist"],
    require: [true, "Kindly Enter Username "]
    },

    age: {
    type: Number,
    require: [true, "Enter Your Age"]
    },

    scores: {
    type: Object,
    require: [true, "Fill your scores"] 
    }, 

    ismarried: {
    type: Boolean
    },

    subject: {
    type: Array,
    require: [true, "Kindly fill in your subjects"]
    }
})

const usersModel = mongoose.model("user", userData)

//get home endpoint
app.get("/", async (req, res)=>{
    console.log("My Home Page")
});

// create Users
app.post("/createuser", async (req, res)=> {
    try {

        const newUsers = await usersModel.create(req.body);
        if (!newUsers) {
            res.status(400).json({
                message: `error creating new user`
            })
        }else{
            res.status(201).json({
                message: `user ${newUsers.name}has been created successfully`,
                newUsers,
            })
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
})

// get all users
app.get("/getall", async (req, res)=> {
    try {
        const allUser = await userModel.find().select(["userName", "name", "age"])
        if (allUser.length === 0) {
            res.status(200).json({
                message: `no user created`
            })
        }else{
            res.status(200).json({
                message: `you have ${alluser.length} existing user`
            })
        }
    } catch (error) {
        req.status(400).json(error.message)
    }
});
//get one
app.get("/getone/:id", async (req, res)=> {
    try {
        const oneUser = await usersModel.findById(id).select(["userName", "name", "age"])
        if (!oneUser) {
            res.status(404).json({
                message: `unable to get one user`
            })
        }else{
            res.status(200).json({
                message: `user found`,
                oneser,
            })
        }
    } catch (error) {
        res.status(404).json(`${error.message}`)
    }
});

//get by username
app.get("/getUsername/:username", async (req, res)=> {
    try {
        const getUsername = await usersModel.findOne(userName).select({username})
        if (!getUsername) {
            res.status(404).json({
                message: `username not found`
            })
        }else{
            res.status(200).json({
                message: `user found`,
                getUsername,
            })
        }
    } catch (error) {
        res.status(404).json(`${error.message}`)
        
    }
});

//update user
app.post("/update/:id", async (req, res)=> {
    try {
        const userId = req.params.body
        const updateUser = await usersModel.findByIdAndUpdate(userId, req.body, {mew:true})
        res.status(201).json({
            message: `updated successfully`,
            updateUser,
        })
    } catch (error) {
        res.json(error.message)
    }
});

//delete user
app.delete("/delete/:id", async (req,res)=>{
    try {
        const id = req.params.body
        const deleteUser = await usersModel.findByIdAndDelete(id)
        const allUser = await usersModel.find()
        if (!deleteUser) {
            res.status(404).json({
                message: `user not found`
            })
        }else{
            res.status(200).json({
                message: `${deleteUser.id}has been deleted successfully`,
                deleteUser,
                allUseer,
            })
        }
    } catch (error) {
        res.json(error.message)
    }
})



mongoose.connect("mongodb+srv://viviannzemeke:i10yCgMhrdGkvGAT@cluster0.hreycm6.mongodb.net/").then(()=>{
    console.log(`database is successful`)
}).catch((err)=> {
    console.log(`unable to connect to database ${err}`)
})



app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})