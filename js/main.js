
// Highlight current nav item
var hasCurrent = false;
$('#main-nav > li').each(function () {
	var url = window.location.href;
	//console.log($(this).data("desc"));
	//console.log($(this).text().trim().toUpperCase());
	/**
	 * if(url.toUpperCase().indexOf($(this).text().trim().toUpperCase()) != -1){
	 * 此处根据菜单内容判断,在进行语言切换后会导致菜单的激活标示无效,配合 header-post.ejs 处理
	 */
	if( $(this).data("desc") == "/" ){
		
	}else{
		if(url.toUpperCase().indexOf($(this).data("desc").toUpperCase()) != -1){
			$(this).addClass('current-menu-item current_page_item');
			hasCurrent = true;
		} else {
			$(this).removeClass('current-menu-item current_page_item');
		}
	}
});

if (!hasCurrent) {
	$('#main-nav > li:first').addClass('current-menu-item current_page_item');
}



// article toc
var toc = document.getElementById('toc')

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = 194+25;

	function scrollcatelogHandler(e) {
		 var event = e || window.event,
		     target = event.target || event.srcElement;
		 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		 if (scrollTop > tocPosition) {
		     toc.classList.add("toc-fixed");
		 } else {
		     toc.classList.remove("toc-fixed");
		 }
	}
}


$('#main-navigation').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    } else {
      $('#main-navigation').addClass('main-navigation-open');
    }
  });

$('#content').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    }
  });