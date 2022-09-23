// your models are in separate files in this directory!
'use strict';
const Op = require('sequelize').Op;

module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			username: {
				type: DataTypes.STRING,
				nullable: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			createdAt: {
				allowNull: false,
				type: 'DATETIME',
			},
			updatedAt: {
				allowNull: false,
				type: 'DATETIME',
			},
		},
		{
			tableName: 'users',
			scopes: {},
			getterMethods: {
				//TODO check date for profile
				dob: function () {
					return dateFormatUK(this.getDataValue('dob'));
				},
			},
		}
	);
	user.associate = function (models) {

	}

	return user;
};
