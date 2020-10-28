$(document).on("scroll", function(){
    const windowHeight = $(window).height();
    //Zapisuję w zmienną "scrollValue" informacj o tym, gdzie jest mój scroll - za to odpowiada dunkcja "scrollTop"
    const scrollValue = $(this).scrollTop();


    //PIERWSZA SEKCJA
    const $scrollArt2 = $('.art2');
    //W zmienną "art1FromTop" zapisuję informację, jak daleko znajduje się od początku dokumentu ten element
    const art2FromTop = $scrollArt2.offset().top;
    //W zmienną "art2Height" zapisuję informację o wielkości elementu. Metoda "outerHeight()" wylicza razem z borderem i paddingami
    const art2Height = $scrollArt2.outerHeight();


    const $scrollArt3 = $('.art3');
    const art3FromTop = $scrollArt3.offset().top;
    const art3Height = $scrollArt3.outerHeight();

    const $scrollArt4 = $('.art4');
    const art4FromTop = $scrollArt4.offset().top;
    const art4Height = $scrollArt4.outerHeight();

    if(scrollValue>art2FromTop + art2Height - windowHeight ) {
        $scrollArt2.addClass("active");
    }
    if(scrollValue>art3FromTop + art3Height - windowHeight ) {
        $scrollArt3.addClass("active");
    }
    if(scrollValue>art4FromTop + art4Height - windowHeight ) {
        $scrollArt4.addClass("active");
    }

    //DRUGA SEKCJA
    const $op1 = $('.op1');
    const $op2 = $('.op2');

    const op1FromTop = $op1.offset().top;
    const op2FromTop = $op2.offset().top;

    const op1Height = $op1.height();
    const op2Height = $op2.height();
    

    if(scrollValue > op1FromTop + op1Height - windowHeight - 800){
        $op1.addClass("active");
    }

    if(scrollValue > op2FromTop + op2Height - windowHeight - 900){
        $op2.addClass("active");
    }

     //Czyszczenia
     if(scrollValue < 100){
        $('article').removeClass('active');
    }
    
})