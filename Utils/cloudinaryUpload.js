
const cloudinary = require('../config/clouldinary');

const imageUplaod = async(fileBuffer)=>{
    return new Promise((resolve , reject)=>{
        const stream = cloudinary.uploader.uplaod_stram({
            folder:`products`
        },(err , result)=>{
            if(result){
                resolve(result);
            }else{
                reject(err);
            }
            
        })
        stream.end(fileBuffer);
    });
}

module.exports = imageUplaod;

