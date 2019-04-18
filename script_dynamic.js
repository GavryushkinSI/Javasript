$(document).ready(function(){
//	var basic=$('img').attr('src');
//	var styles = $('img').map(function() {
//   return $(this).attr('src');
//}).get();
	
//СЛАЙДШОУ	
	
	(function(){item=$(this).closest(".list_img_item")
	//console.log(styles[1]);
	$('.list_img_item').on('click',function(e){
		$('.image').fadeOut('slow',function(){
			var y=e.target.getAttribute('src');
		    console.log(y);
			$('.image').attr('src',y).fadeIn();
		});
		});
		}());	
});

	
//АККОРДЕОН		
	(function(){
		
		$(this).on('click',function(e){
		e.preventDefault();
		console.log($('.task_3_list_item_1').hasClass('.act'));
		var x=e.target.innerHTML;
		
			if(x==="Пункт 1"){
	if($('.task_3_list_item_1').hasClass('.act')===false){
		$('.task_3_list_item_1').css('display','block').addClass('.act')}
				else{
$('.task_3_list_item_1').css('display','none').removeClass('.act')
				}
			}
			else if(x==="Пункт 2"){
				if($('.task_3_list_item_2').hasClass('.act')===false){
		$('.task_3_list_item_2').css('display','block').addClass('.act')}
				else{
$('.task_3_list_item_2').css('display','none').removeClass('.act')
			}
			}
			else if(x==="Пункт 3"){
				if($('.task_3_list_item_3').hasClass('.act')===false){
		$('.task_3_list_item_3').css('display','block').addClass('.act')}
				else{
$('.task_3_list_item_3').css('display','none').removeClass('.act')
			}
			}
			
	else{
	if($('.task_3_list_item_4').hasClass('.act')===false){
$('.task_3_list_item_4').css('display','block').addClass('.act')}
				else{
$('.task_3_list_item_4').css('display','none').removeClass('.act')
			}
	}
			});
		
		
	}());

//ТАБЫ
	(function(){$('.list_item').on('click',function(e){
		var
		$this=$(this),
		item=$this.closest(".list_item"),	
		container_1=$('.list_2_item').closest(".content"),
		container_2=$this.closest(".header"),	
		content=container_1.find(".list_2_item"),
		ndx=item.index();	
		active_item=content.filter(".active_2"),
	    reqitem=content.eq(ndx),
		console.log(active_item);
		console.log(container_2);
		item.addClass("active")
		.siblings()
		.removeClass("active");
		
		content.eq(ndx)
		.addClass("active_2")
		.siblings()
		.removeClass("active_2");	
	});
		}());	