var last_id;
var nav = $(".nav");
    
var navHeight = nav.outerHeight();
var navItems  = nav.find("a");

var scrollItems = navItems.map(function() {
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});

navItems.click(function(e) {
  var href = $(this).attr("href");
  var offsetTop = $(href).offset().top - navHeight + 1;
  
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 320);
  e.preventDefault();
});

$(window).scroll(function(){
   var fromTop = $(this).scrollTop() + navHeight;
   
   var cur = scrollItems.map(function() {
     if ($(this).offset().top < fromTop)
       return this;
   });
   
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (last_id !== id) {
       last_id = id;
       navItems.parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});