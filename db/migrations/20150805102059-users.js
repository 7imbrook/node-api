export function up(queryInterface, Sequelize) {
  queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    dce: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
}

export function down(queryInterface, Sequelize) {
  queryInterface.dropTable('users');
}
