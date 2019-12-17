/** 
 */
function MenuCreateTest( )
{
	var _Menu = new Menu();

	var items = [
		['Item 1', 'menuTestFunction'],
		'-',
		['Item 2', 'menuTestFunction'],
		{
			'Sub Menu':
			[
				['Sub item 2', 'menuTestFunction'],
				{'Nested Sub Menu':
					[
						['Nested sub item 2', 'menuTestFunction']
					]
				}
			]
		},
	];

	_Menu.create('MenuCreateTest', items);
}

/** 
 */
function menuTestFunction( )
{
	SpreadsheetApp.getUi().alert('menuTestFunction()');
}