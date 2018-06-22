module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define("User", {
		// Giving the Author model a name of type STRING
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		language: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		bottlesLeft: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 5
		},
		bottlesAvailable: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1
		}


	});
	User.associate = function (models) {
		// Associating Author with Posts
		// When an Author is deleted, also delete any associated Posts
		User.hasMany(models.Message, { as: 'Sender' });
		User.hasMany(models.Message, { as: "Keeper" });
		User.hasMany(models.SeenMessage, { as: "Viewer" });
	};

	return User;
};