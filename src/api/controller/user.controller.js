
const User = require('../models/user.model.js')


// Devuelve todos los usuarios
const getAllUsers = async (req, res) => {
    try{
        const allUsers = await User.find().populate({
            path: "shoes", select:"shoeName"
        }); // .find({_id: id}) es lo mismo que .findById(id);
        return res.status(200).json(allUsers);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve un usuario según su _id
const getUsersId = async (req, res) => {
    try{
        const {id} = req.params; 
        const getUserId = await User.findById(id).populate({
            path: "shoes", select:"shoeName"
        }); // .find({_id: id}) es lo mismo que .findById(id)
        return res.status(200).json(getUserId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve el nombre del usuario al mandar su email por la URL
const getUsersName = async (req, res) => {
    try{
        const {email} = req.params; 
        const getUserName = await User.find({email: email},{_id:0, userName:1});
        return res.status(200).json(getUserName);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Crea un nuevo usuario en la DB
const postUsers = async (req, res) => {
    try{
        const newUser = new User(req.body);
        const createdUser = await newUser.save();
        return res.status(201).json(createdUser);
    }catch (error) {
        return res.status(500).json(error);
    }
}
// Modifica un usuario enviando id por la url y datos nuevos por el body
const putUsers = async (req, res) => {
    try{
        const {id} = req.params;
        const putUser = new User(req.body);
        putUser._id = id;
        const updatedUser = await User.findByIdAndUpdate(id, putUser, {new: true});
        if(!updatedUser){
            return res.status(404).json({message: "Usuario no encontrado"})
        }
        return res.status(200).json(updatedUser);
    }catch(error){
        return res.status(500).json(error)
    }
}
// Elimina usuarios de la base de datos mandando su id por la url
const deleteUsers = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({message:"Usuario no encontrado"});
        }
        return res.status(200).json(deletedUser);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Añade una zapatilla al array zapatillas[] del usuario ENVIANDO iduser y idzapatilla mediante query:
// EJEMPLO http://localhost:3001/users/addshoe?iduser=64578d77ee6fbcb3490197ad&idfruit=645786bc311c9738c6ebeb54
const getAddShoeToUser = async (req, res) => {
    try{
        const {iduser, idshoe} = req.query;
       /* const pivoteUser = await User.findById(iduser);
        pivoteUser.shoes.push(idfruit);
        const updatedUser = await User.findByIdAndUpdate(iduser, pivoteUser, {new: true});*/
        
        const updatedUser = await User.findOneAndUpdate(
            {_id: iduser},
            {$push:{shoes: idshoe}}, 
            {new:true}
            );
        return res.status(200).json(updatedUser);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

module.exports = {
    getAllUsers,
    getUsersId,
    getUsersName,
    // -----------------
    postUsers, 
    putUsers, 
    deleteUsers, 
    // -----------------
    getAddShoeToUser
    };