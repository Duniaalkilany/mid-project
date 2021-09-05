const {
  Sequelize,
  DataTypes
} = require('sequelize');

const sequelize = new Sequelize('postgres://localhost:5432/dunia')

const MessageSchema = sequelize.define('Message', {
  conversationId: {
    type: DataTypes.STRING,
  },
  sender: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.STRING,
  },
})

module.exports = MessageSchema