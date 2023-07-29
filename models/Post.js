// models/Post.js
import { Sequelize, Model, DataTypes } from 'sequelize';
import db from '../config/database';
import User from './User'; // User modelini import ediyoruz


class Post extends Model {}
Post.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Title: { type: DataTypes.STRING, allowNull: false },
    Content: { type: DataTypes.TEXT, allowNull: false },
    UserId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } }, // User tablosundaki userId'ye referans
    CreatedAt: { type: DataTypes.DATE, allowNull: false },
    UpdatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    sequelize: db,
    modelName: 'post',
  }
);

module.exports = Post;
