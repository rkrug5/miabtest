module.exports = function (sequelize, DataTypes) {
	var SeenMessage = sequelize.define("Seen", {});
	SeenMessage.associate = function (models) {
		// Associating Author with Posts
		// When an Author is deleted, also delete any associated Posts
		SeenMessage.belongsTo(models.User, { as: 'Viewer' });
		SeenMessage.belongsTo(models.Message, { as: 'Message' });

	};

	return SeenMessage;
};