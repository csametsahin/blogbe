// models/User.js
import { Sequelize, Model, DataTypes } from 'sequelize';
import db from '../config/database';


class User extends Model {}
User.init(
  {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING, allowNull: false },
    Surname: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false },
    Password: { type: DataTypes.STRING, allowNull: false },
    CreatedAt: { type: DataTypes.DATE, allowNull: false },
    UpdatedAt: { type: DataTypes.DATE, allowNull: false },
    LastLoginDate: { type: DataTypes.DATE, allowNull: false },
  },
  {
    sequelize: db,
    modelName: 'user',
  }
);

module.exports = User;
