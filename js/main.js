$(document).ready(function() {
    
    
//  изменение положения лейбла для инпутов
    $("body").delegate( "input", "focus blur", function() {
      var elem = $(this);
      setTimeout(function() {
        elem.prev(".form__label").toggleClass("focused active", elem.is(":focus"));
        elem.toggleClass("active", elem.is(":focus"));
      }, 0 );
    });
    
    $("input").keyup(function() {
        if($(this).val() == ""){
            $(this).prev(".form__label").removeClass("up")
        }else{
            $(this).prev(".form__label").addClass("up")        
        }
    });
    
    
// маска для инпута "номер телефона"	
    $("#phone-numb").inputmask("+7 (999)-999-99-99");
    
// маска для инпута "РНМ"	
    $("#rnm").inputmask("9999 9999 9999 9999");
    
// маска для инпута "номер ФН"	
    $("#numb_fn").inputmask("9999 9999 9999 9999");
    
//открытие меню при клике на menu_btn
    $(".menu_btn").on("click", function(){
        $(".bar1, .bar2, .bar3").toggleClass("change")
        $(".header-bottom__nav").toggleClass("opened")
    }); 
    
//открытие админ-пенели при клике на admin_btn
    $(".admin_btn").on("click", function(){
        $(".bar1, .bar2, .bar3").toggleClass("change")
        $(".l-side").toggleClass("show")
    }); 
    
// ввод только цыфр в инпуты
    $('input#fns, input#kpp, input#rnm, input#nfn, input#numb_zn').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar))	return false;	
        });
    });
// клик по tr
    $("tr").on("click", "td", function() {
        if(!$(this).hasClass("table__td_six") && !$(this).parent("tr").hasClass("table__tr_header")){
            window.location = $(this).parent("tr").data("href"); 
        }
    });
     $("tr").on("click", ".table__td_six", function() {
            window.location = $(this).data("href");
    });
// открыть фильтры
    $(".button-filtres").on("click", function(){
       $(".header-top__container_v2").toggleClass("opened") 
    });


































