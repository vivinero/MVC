const userModel = require("../model/userModel")

exports.home = async (req, res)=>{
    console.log("My Home Page")
}

exports.createuser = async (req, res)=> {
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
}


exports.getall = async (req, res)=> {
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
}

exports.getone = async (req, res)=> {
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
}


exports.getusername = async (req, res)=> {
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
}


exports.updateuser = async (req, res)=> {
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
}


exports.deleteuser = async (req,res)=>{
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
}

