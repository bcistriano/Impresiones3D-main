module.exports = function (sequelize, DataTypes) {
    let alias = "User";
    let cols = {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      localidad: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      
      }
    
    let config = {
      tableName: "user",
      timestamps: false,
    };
  
    const User = sequelize.define(alias, cols, config);
    return User;
  }