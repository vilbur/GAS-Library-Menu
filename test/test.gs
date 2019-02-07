/** 
 */


$('.scm-item.goog-menuitem').each(function(){
	$(this).find('div:not(:contains(vilbur\Gas))')
	.css('border','1px solid red')
	.parent()
	.remove();
});