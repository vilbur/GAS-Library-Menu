

/** 
 */
var Menu = (function()
{
	/** 
	*/
	function Menu()
	{
		var self	= this;
		var menu;	
		var title;
		var items;
		
		/** Create
		 *
		 */
		this.create = function(title)
		{
			 //SpreadsheetApp.getUi().alert('message');
			var ui = SpreadsheetApp.getUi();
			// Or DocumentApp or FormApp.
			ui.createMenu('Custom Menu')
				.addItem('First item', 'menuItem1')
				.addSeparator()
				.addSubMenu(ui.createMenu('Sub-menu')
					.addItem('Second item', 'menuItem2'))
				.addToUi();

        };
      
      
		
	}
	
	
	return Menu;
})();


function onOpen() 
{
  
  var _Menu = new Menu();
  
  _Menu.create();
  

}

function menuItem1() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the first menu item!');
}

function menuItem2() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the second menu item!');
}