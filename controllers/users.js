const { User } = require("../models");

const createUser = async (req, res) => {
    console.log("creating user data");
    
    const user = req.body;

    try{
        await User.create({
            firstName: user.firstName,
            lastName: user.lastName,
            age : user.age
        });
        res.send(`User with name ${user.firstName} added to database`);      
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Error creating user");
    }
};
  

const getUsers = async (req, res) => {

    try{
        User.findAll()
            .then((users) => {
                res.send(users);
            })
    }
    catch (err)
    {
        console.error(err);
        res.status(500).send("Error fetching data");
    }
}


const getUser = async (req, res) => {
    const {id} = req.params;

    // const selectedUser = users.find((user) => user.id = id);

    try{
        await User.findAll({where : {id:id}})
            .then((users) => {
                res.send(users);
            })
    }
    catch (err)
    {
        console.error(err);
        res.status(500).send("Error fetching data");
    }

};

const deleteUser = async (req, res) => { 
    // users = users.filter((user) => user.id !== req.params.id);
    // res.send(`user with id ${req.params.id} has been deleted`);
    const {id} = req.params;
    
    await User.destroy({where : {id:id}});
    
    res.send(`user with id ${req.params.id} has been deleted`);
};

const updateUser = async (req,res) => {
    // const user = users.find((user) => user.id === req.params.id);
    const {id} = req.params;
    
    const selectedUser = await User.findOne({where : {id:id}})

    !isNullOrEmpty(req.body.firstName) && (selectedUser.firstName = req.body.firstName);
    !isNullOrEmpty(req.body.age) && (selectedUser.age = req.body.age);
    !isNullOrEmpty(req.body.lastName) && (selectedUser.lastName = req.body.lastName);

    await selectedUser.save();

    res.json({ 
        message: "User updated",
        status: 200,
        data: selectedUser 
    });
    // console.log()
};


const isNullOrEmpty = (value) => {
    return value === null || value === undefined || value === "";
};


module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
};
