// please add your migration files in this directory.
'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
		// add your table tables that you want to drop or recreate
		await queryInterface.dropTable('SequelizeMeta');
		return true;
	},
	async down(queryInterface, Sequelize) {},
};
