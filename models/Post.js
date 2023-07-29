// models/Post.js
import { Sequelize, Model, DataTypes } from 'sequelize';
import db from '../config/database';
import User from './User'; // User modelini import ediyoruz


class Post extends Model {}
Post.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    userId: { type: DataTypes.INTEGER, references: { model: User, key: 'userId' } }, // User tablosundaki userId'ye referans
  },
  {
    sequelize: db,
    modelName: 'post',
  }
);

module.exports = Post;
