'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = (sequelize, DataTypes) => {
  const Sequelize=sequelize.Sequelize
  const Model=Sequelize.Model
  class User extends Model{}


  User.init({
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:true
      }
    },
    password:{
      type:DataTypes.STRING,
      validate:{
        len: {
          args: [6],
          msg: 'Password length must be at least 6 characters'
        }
      }
    }
  }, {sequelize});

  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate((instance,options)=>{
    const hash=bcrypt.hashSync(instance.password,saltRounds)
    instance.password=hash
  })

  return User;
};