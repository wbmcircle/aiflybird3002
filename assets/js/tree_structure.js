$(function () {
    $('.tree li').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    
    $('.tree .superior-dept-item ul li').hide('fast');
    $('#dept-form').css('display', 'none');
    $('#sub-dept-form').css('display', 'none');


    $('.tree .arrow').on('click', function(e) {
        var menu = $(this).next();
        var hidden = menu.hasClass('d-none');

        $('.tree .arrow').next().removeClass('d-flex').addClass('d-none');

        if(hidden) {
            menu.addClass('d-flex').removeClass('d-none');
        } else {
            menu.removeClass('d-flex').addClass('d-none');
        }
    });

    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        var data_form = $(this).attr('data-id');


        $('#superior-dept-form').addClass('d-none').removeClass('d-flex')
        $('#dept-form').addClass('d-none').removeClass('d-flex')
        $('#sub-dept-form').addClass('d-none').removeClass('d-flex')
        $('' + data_form).addClass('d-flex').removeClass('d-none');
        $('span').css('font-weight', 'normal');
        $(this).css('font-weight', 'bold');


        if (children.is(":visible")) {
            children.hide('fast');
        } else {
            children.show('fast');
        }
        e.stopPropagation();
    });
});