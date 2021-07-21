// experience animation
$(window).on("scroll", () => {

    // if($(window).scrollTop() + $(window).height() > $('.experience__content-1').offset().top)
    //     $('.experience__content-1').addClass('moveInLeft-active');
    // else
    //     $('.experience__content-1').removeClass('moveInLeft-active');

    // if($(window).scrollTop() + $(window).height() > $('.experience__content-2').offset().top)
    //     $('.experience__content-2').addClass('moveInRight-active');
    // else
    //     $('.experience__content-2').removeClass('moveInRight-active');

    // if($(window).scrollTop() + $(window).height() > $('.experience__content-3').offset().top)
    //     $('.experience__content-3').addClass('moveInRight-active');
    // else
    //     $('.experience__content-3').removeClass('moveInRight-active');

});

var gotoExperiecne = (e) => {
    // e.preventDefault();
    $('.content').removeClass('fadeIn-active');
    $('.content').addClass('fadeOut-active');

    setTimeout(() => {
        $('.content').empty();
        $('.content').removeClass('fadeOut-active');
        $('.content').addClass('fadeIn-active');
        $('.content').load('experience.html .experience');
    }, 500);

};

var gotoEducation = (e) => {
    // e.preventDefault();
    $('.content').removeClass('fadeIn-active');
    $('.content').addClass('fadeOut-active');

    setTimeout(() => {
        $('.content').empty();
        $('.content').removeClass('fadeOut-active');
        $('.content').addClass('fadeIn-active');
        $('.content').load('education.html .education');
    }, 500);

};

var gotoProject = (e) => {
    // e.preventDefault();
    $('.content').removeClass('fadeIn-active');
    $('.content').addClass('fadeOut-active');

    setTimeout(() => {
        $('.content').empty();
        $('.content').removeClass('fadeOut-active');
        $('.content').addClass('fadeIn-active');
        $('.content').load('project.html .project');
    }, 500);

};

var gotoHome = ((e) => {

    $('.content').removeClass('fadeIn-active');
    $('.content').addClass('fadeOut-active');

    setTimeout(() => {
        $('.content').empty();
        $('.content').removeClass('fadeOut-active');
        $('.content').addClass('fadeIn-active');
        $('.content').load('introduction.html .header');
    }, 500);
});

$(document).ready(() => {
    $('.content').addClass('fadeIn-active');
    $('.content').load('introduction.html .header');
    
});