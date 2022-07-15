module.exports = function (sequelize, DataTypes) {
    let alias = "Product";
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
      description: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(8,2)
      },
      category: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      
      }
    
    let config = {
      tableName: "products",
      timestamps: false,
    };
  
    const Product = sequelize.define(alias, cols, config);
    return Product;
  }