jQuery().ready(function () {
    /* Custom select design */
    jQuery('.drop-down-mobile').append('<div class="button"></div>');
    jQuery('.drop-down-mobile').append('<ul class="select-list"></ul>');
    jQuery('.drop-down-mobile select option').each(function () {
        var bg = jQuery(this).css('background-image');
        var data_img = jQuery(this).attr('data-image');
        jQuery('.drop-down-mobile .select-list').append('<li class="clsAnchor" data-image="' + data_img + '"><span value="' + jQuery(this)
        .val() + '" class="' + jQuery(this).attr('class') + '" style=background-image:' +
            bg + '>' + jQuery(this).text() + '</span></li>');
    });
    jQuery('.drop-down-mobile .button').html('<img src=" ' + jQuery('.drop-down-mobile select').find(':selected').attr('data-image') + '" >' + '<span>' + jQuery('.drop-down-mobile select').find(
            ':selected').text() + '</span>');
    jQuery('.drop-down-mobile ul li').each(function () {
        if (jQuery(this).find('span').text() == jQuery('.drop-down-mobile select').find(':selected')
            .text()) {
            jQuery(this).addClass('active');
        }
    });

    
    jQuery('.drop-down-mobile .select-list span').on('click', function () {
        var dd_text = jQuery(this).text();
        var dd_img = jQuery(this).parent().attr('data-image');
        var dd_val = jQuery(this).attr('value');
        console.log(dd_img);
        jQuery('.drop-down-mobile .button').html('<img src="' + dd_img + ' ">' + '<span>' + dd_text + '</span>');
        jQuery('.drop-down-mobile .select-list span').parent().removeClass('active');
        jQuery(this).parent().addClass('active');
        $('.drop-down-mobile select[name=options]').val(dd_val);
        $('.drop-down-mobile .select-list li').hide();
    });
    jQuery('.drop-down-mobile .button').on('click',  function () {
        jQuery('.drop-down-mobile ul li').toggle();
    });
    /* End */
});
jQuery().ready(function () {
    /* Custom select design */
    jQuery('.drop-down').append('<div class="button"></div>');
    jQuery('.drop-down').append('<ul class="select-list"></ul>');
    jQuery('.drop-down select option').each(function () {
        var bg = jQuery(this).css('background-image');
        var data_img = jQuery(this).attr('data-image');
        jQuery('.drop-down .select-list').append('<li class="clsAnchor" data-image="' + data_img + '"><span value="' + jQuery(this)
        .val() + '" class="' + jQuery(this).attr('class') + '" style=background-image:' +
            bg + '>' + jQuery(this).text() + '</span></li>');
    });
    jQuery('.drop-down .button').html('<img src=" ' + jQuery('.drop-down select').find(':selected').attr('data-image') + '" >' + '<span>' + jQuery('.drop-down select').find(
            ':selected').text() + '</span>');
    jQuery('.drop-down ul li').each(function () {
        if (jQuery(this).find('span').text() == jQuery('.drop-down select').find(':selected')
            .text()) {
            jQuery(this).addClass('active');
        }
    });

    
    jQuery('.drop-down .select-list span').on('click', function () {
        var dd_text = jQuery(this).text();
        var dd_img = jQuery(this).parent().attr('data-image');
        var dd_val = jQuery(this).attr('value');
        console.log(dd_img);
        jQuery('.drop-down .button').html('<img src="' + dd_img + ' ">' + '<span>' + dd_text + '</span>');
        jQuery('.drop-down .select-list span').parent().removeClass('active');
        jQuery(this).parent().addClass('active');
        $('.drop-down select[name=options]').val(dd_val);
        $('.drop-down .select-list li').hide();
    });
    jQuery('.drop-down .button').on('click',  function () {
        jQuery('.drop-down ul li').toggle();
    });
    /* End */
});