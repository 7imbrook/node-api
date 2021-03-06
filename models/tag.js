import sequelize from '../config/sequelize';
import DataTypes from 'sequelize';

export default sequelize.define('tags', {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
}, {
  scopes: {
    name(name) {
      return { where: { name } };
    },
  },
});
