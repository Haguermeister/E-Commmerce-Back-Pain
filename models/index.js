const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

//relationships
Category.hasMany(Product, {
    foreignKey: 'category_id'
});
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});
Product.belongsToMany(Tag, { through: ProductTag });
Tag.belongsToMany(Product, { through: ProductTag });

module.exports = { Category, Product, ProductTag, Tag };
