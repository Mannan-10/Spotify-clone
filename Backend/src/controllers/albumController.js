import {v2 as cloudinary} from "cloudinary";
import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {

    try{
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});

        const album = new albumModel({
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
        });
        await album.save();

        res.json({success: true, message:"Album saved successfully"});
    }catch(err){
        res.json({success: false,});
    }

}

const listAlbums = async (req, res) => {

    try{
        const allAlbums = await albumModel.find({});
        res.json({success: true, albums: allAlbums});
    }
    catch(err){
        res.json({success: false,});
    }
}

export {addAlbum, listAlbums}