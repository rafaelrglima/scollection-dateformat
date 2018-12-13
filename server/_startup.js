Meteor.startup(function () {
	if (SCollection.DateFormat.find({}).count() < 1) {
		SCollection.DateFormat._ensureIndex({ "f": 1});
		var docs = JSON.parse(Assets.getText('private/scollection-dateformat.json'));
		var total = docs.length;
		var count = 0;
		docs.forEach(doc => {
			count = count + 1;
			console.log(`Importing scollection dateformat ${count} of ${total}`)
			SCollection.DateFormat.insert(doc);
		});
	}
});

SCollectionApi = new Restivus({
	apiPath: 'scollection/',
	version: 'dateformat',
	defaultHeaders: {
		'Content-Type': 'application/json'
	},
	useDefaultAuth: false,
	prettyJson: false,
	enableCors: true
});
