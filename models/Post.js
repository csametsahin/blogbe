// models/Post.js
import { Sequelize, Model, DataTypes } from 'sequelize';
import db from '../config/database.js';
import User from './User.js'; // User modelini import ediyoruz


class Post extends Model {}
Post.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: true },
    content: { type: DataTypes.TEXT, allowNull: true },
    userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } }, // User tablosundaki userId'ye referans
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    sequelize: db,
    modelName: 'Posts',
  }
);

export default Post;
