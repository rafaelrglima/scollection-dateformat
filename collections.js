SCollection.DateFormat = new Mongo.Collection('scollection_dateformat');
SCollection.DateFormat.allow({
	insert: function(userId, user, fields, modifier) {
		// TODO: security
		return true;
	},
	update: function(userId, user, fields, modifier) {
		// TODO: security
		return true;
	},
	remove: function(userId, user, fields, modifier) {
		// TODO: security
		return true;
	},
});
