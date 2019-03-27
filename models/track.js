const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('track', {
	id:{
		field: 'TrackId',
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		field: 'Name',
		type: Sequelize.STRING,
		validate: {
			notEmpty: {
				args: true,
				msg: 'Name field is required.'
			}
		}
	},
	milliseconds: {
		field: 'Milliseconds',
		type: Sequelize.NUMBER,
		validate: {
			isNumeric: {
				args: true,
				msg: 'Milliseconds must be number.'
			}
		}
	},
	unitPrice: {
		field: 'UnitPrice',
		type: Sequelize.NUMBER,
		validate: {
			isNumeric: {
				args: true,
				msg: 'UnitPrice must be number.'
			}
		}
	}
}, {
	timestamps: false
});