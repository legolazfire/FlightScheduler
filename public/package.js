/******************************************************************************
 *	Copyright (c) 2015 OpenText Corporation and others.
 *	Contributors:
 *		OpenText Corporation - Initial implementation.
 *****************************************************************************/

/**
 * create initial namespace
 */
if ( !self["opentext"]  )
{
	opentext = {};
}

if ( opentext.common == undefined )
{
	opentext.common = {};
}

if ( opentext.common.web == undefined )
{
	opentext.common.web = {};
}

/**
 * @class class to manage namespace packages.
 * @static
 */
opentext.common.web.Package =
{
	PACKAGE_SEPARATOR : ".",
	_evalPackageSupported : null,
	
	initialize : function( )
	{
		try
		{
			if ( eval("opentext.common.web") == opentext.common.web )
			{
				this._evalPackageSupported = true;
			}
		}
		catch (e)
		{
			// not supported
			this._evalPackageSupported = false;
		}
	},
	
	/**
	 * Defines a package or object by generating its namespace,
	 * if it doesn't exist yet.
	 * @param packageName Java-style package name (actuate.util.xxx)
	 * @param object optional object to be stored in the last attribute
	 * defined (in actuate.umc.util.xxx it would be xxx)
	 * @return reference to the latest package
	 */
	define : function( packageName, object )
	{
		var parts = packageName.split(this.PACKAGE_SEPARATOR);
		var pk = window;
		var lastPackage = null;
		for ( var i = 0; i < parts.length; i++ )
		{
			lastPackage = pk;
			if ( !pk[parts[i]] )
			{
				pk = pk[parts[i]] = {};
			}
			else
			{
				pk = pk[parts[i]];
			}
		}

		if ( object )
		{
			lastPackage[parts[parts.length - 1]] = object;
		}

		return pk;
	}
};
opentext.common.web.Package.initialize( );
