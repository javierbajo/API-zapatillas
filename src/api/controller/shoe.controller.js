
const Shoe = require('../models/shoe.model.js')


// Devuelve todas las zapatillas
const getAllShoes = async (req, res) => {
    try{
        const allShoes = await Shoe.find()
        return res.status(200).json(allShoes);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve una zapatilla según su _id
const getShoesId = async (req, res) => {
    try{
        const {id} = req.params; 
        const getShoeId = await Shoe.find({_id: id});
        return res.status(200).json(getShoeId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve el tipo de la zapatilla según su nombre
const getShoesName = async (req, res) => {
    try{
        const {shoeName} = req.params; 
        const getShoeName = await Shoe.find({shoeName: shoeName},{_id:0, type:1});
        return res.status(200).json(getShoeName);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve zapatillas según su tipo
const getShoesType = async (req, res) => {
    try{
        const {type} = req.params; 
        const getShoeType = await Shoe.find({type: type});
        return res.status(200).json(getShoeType);
    }catch(error){
        return res.status(500).json(error);
    }
    
}



// Crea una nueva zapatilla en la DB
const postShoes = async (req, res) => {
    try{
        const newShoe = new Shoe(req.body);

        if(req.file.path){
            newShoe.image = req.file.path;
        }
        const createdShoe = await newShoe.save();
        return res.status(201).json(createdShoe);
    }catch (error) {
        return res.status(500).json(error);
    }
}
// Modifica una zapatilla enviando id por la url y datos nuevos por el body
const putShoes = async (req, res) => {
    console.log(req.body);
    try{
        const {id} = req.params;
        const putShoe = new Shoe(req.body);
        putShoe._id = id;
        if(req.file.path){
            putShoe.image = req.file.path;
        }
        const updatedShoe = await Shoe.findByIdAndUpdate(id, putShoe, {new: true});
        if(!updatedShoe){
            return res.status(404).json({message: "Zapatilla no encontrada"})
        }
        return res.status(200).json(updatedShoe);
    }catch(error){
        return res.status(500).json(error)
    }
}
// Elimina zapatillas de la base de datos mandando su id por la url
const deleteShoes = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedShoe = await Fruit.findByIdAndDelete(id);
        if(!deletedShoe){
            return res.status(404).json({message:"Zapatilla no encontrada"});
        }
        return res.status(200).json(deletedShoe);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

module.exports = {
    getAllShoes,
    getShoesId,
    getShoesName,
    getShoesType,
    // -----------------
    postShoes, 
    putShoes, 
    deleteShoes, 
    };