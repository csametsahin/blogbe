// models/User.js
import { Sequelize, Model, DataTypes } from 'sequelize';
import db from '../config/database';


class User extends Model {}
User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: db,
    modelName: 'user',
  }
);

module.exports = User;
