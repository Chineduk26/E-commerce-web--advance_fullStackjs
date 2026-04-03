const User =require('../../models/User');
const {DataTypes}=require('sequelize')
const Product=User.define('Product',{
   
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
    desc:{
        type:DataTypes.TEXT,
    },
    stock:{
        type:DataTypes.INTEGER,
        defaultValue:0,
    },
    imageUrl:{
        type:DataTypes.STRING,
    },
    isDeleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    }

})
module.exports=Product;