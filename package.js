Package.describe({
    name: 'rafaelrglima:scollection-dateformat',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'This package contains Date Formats to use on projects.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/rafaelrglima/scollection-dateformat',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.4.3');
    api.use('ecmascript');
    api.mainModule('_main.js', ['client', 'server']);
    api.addFiles([
        'collections.js',
        'server/_startup.js',
        'server/api.js'
    ], 'server');
    api.addFiles([
        'collections.js',
        'client/client.js'
    ], 'client');
    api.addFiles('private/scollection-dateformat.json', 'server', {isAsset:true})
    api.use(['tracker', 'mongo', 'session', 'http', "nimble:restivus@0.8.12"]);
    api.export('SCollection', ['client', 'server']);
});
