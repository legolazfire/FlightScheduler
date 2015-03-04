testnest = function( ) {
	this.name = "Name1";
	this.label = "My file Label1";
};

testnest.prototype.getName = function( ) {
	return this.name;
}

testnest.prototype.getLabel = function( ) {
	return this.label;
}
