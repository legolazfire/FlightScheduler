/**
 * Main jsapi client entry point application
 */
requirejs.config({
	baseUrl: 'js',
	paths: {
		'package': '../package',
		'fileitem': 'fileitem'
	}
,
	shim: {
		'package': {
			exports: 'opentext.common.web.Package',
			init: function( ) {
				return opentext.common.web.Package;
			}
		}
,
		'fileitem' : {
			exports: 'fileitem',
			init: function( ) {
				return fileitem;
			}	
		}
	}

});
require(['package', 'fileitem'], function(packageUtil, fileItem) {
	var test = new fileItem();
	alert( "fileitem: " + test.getName() );
});
