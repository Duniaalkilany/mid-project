const {
  Sequelize,
  DataTypes
} = require('sequelize');

const sequelize = new Sequelize('postgres://localhost:5432/dunia')

const PostSchema = sequelize.define('Post-proj', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.STRING,
    validate: {
      len: [0, 500]
    },
  },
  img: {
    type: DataTypes.STRING,
  },
  likes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
});

module.exports = PostSchema;