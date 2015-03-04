function fileitem( ) {
	this.name = "Name1";
	this.label = "My file Label1";
};

fileitem.prototype = {
	getName : function( ) {	
		return this.name;
	},
	getLabel : function( ) {
		return this.label;
	}
}	
