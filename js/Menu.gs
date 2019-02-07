/** 
 */
var Menu = (function()
{
	/** 
	*/
	function Menu()
	{
		
		/** Create
		 * @param	string	title	Title of menu
		 * @param	object	items	Items for menu
		 */
		this.create = function(title, items)
		{
			menu = createMenu(title);

			menuAddItems(menu, items).addToUi();
        };

		/**
		 *	@param	menu	object menu obejct https://developers.google.com/apps-script/guides/menus
		 *	@param	items	object	of menu objects
		 *	@return object menu
		 */
		var menuAddItems = function(menu, items)
		{
			var items_keys = Object.keys(items);
			for (var i = 0; i < items_keys.length; i++)
			{
				var key	= items_keys[i];
				var item	= items[key];
				var type	= getItemType(key, item);
			
				if (type !== 'object')
					menu = menuAddItem(menu, type, key, item);
				else
					menu = menuAddItems(menu, item);
			}
			return menu;
		};
		
		/** Add item to object
		 *	@param	menu	object menu
		 *	@param	type	string type of menu item @ref getItemType()
		 *	@param	key	int|string	object key from item array
		 *	@param	item	mixin	menu object
		 *	@return object menu
		 */
		var menuAddItem = function(menu, type, key, item)
		{
			switch (type) {
				case 'array-fn':
					menu.addItem(item[0], item[1]);			
					break;
				case 'submenu':
					menu.addSubMenu(menuCreatesubmenu(key, item));
					break;
				case 'separator':
					menu.addSeparator();
					break;
			}
			return menu;
		
		};
		
		/** Create submenu item
		 *  @param	string	label	of submenu
		 *  @param	items	object	of menu objects
		 *  @return object menu
		 */
		var menuCreatesubmenu = function(label, items) {
			return menuAddItems(SpreadsheetApp.getUi().createMenu(label), items);
		};
		/** get type of given object
		 *	@param	key	int|string	object key from items array
		 *	@param	item	mixin	item object
		 *	@return string type of item object: 'array-fn|object|submenu|separator'
		 */
		var getItemType = function(key, item)
		{
			var typeof_item = typeof item;
		
			if(Array.isArray(item) && item.length == 2 && typeof item[0]== 'string' )
				return 'array-fn';
			else if (typeof_item === 'object') {
	
				if (!key.match(/^\d+$/gi))
					return 'submenu';
				else
					return 'object';
		
			} else if (item === '-')
				return 'separator';
		};
		
		/** Create menu
		 * @return	Menu	
		 */
		var createMenu = function(title)
		{
			return SpreadsheetApp.getUi().createMenu(title);	
		};
	}
	
	return Menu;
})();


function onOpen() 
{
  //var _Menu = new Menu();
  //_Menu.create();
  
	MenuCreateTest();
}

function menuItem1() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the first menu item!');
}

function menuItem2() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the second menu item!');
}