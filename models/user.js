'use strict';
const {
  Model
} = require('sequelize');
const encrypt = require('../helpers/encryptAndDecrypt').encrypt
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid Email Format'
        },
        notEmpty:{
          msg: 'Email field is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        len: {
          args: [8],
          msg: 'Password must be at least 8 characters'
        },
        notEmpty: {
          msg: 'Password field is required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user, options) {
        user.password = encrypt(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};