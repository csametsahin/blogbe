// models/User.js
import { Sequelize, Model, DataTypes } from 'sequelize';
import  db from '../config/database.js'; 


class User extends Model {}
User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: true },
    surname: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: true },
    role : { type: DataTypes.STRING, allowNull: true },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true },
    lastLoginDate: { type: DataTypes.DATE, allowNull: true },
  },
  {
    sequelize: db,
    modelName: 'Users',
  }
);

export default User
