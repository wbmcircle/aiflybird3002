const dropdown_toggler = document.getElementById('dropdown-toggle');
const dropdown_content = document.getElementById('dropdown-content');
const noti_more = document.getElementById('noti-more');
const more = document.getElementById('more');

dropdown_content.style.display = 'none';
dropdown_toggler.addEventListener('click', dropdown_toggle);
noti_more.addEventListener('click', more_notice);

function dropdown_toggle() {
    if(more.style.display == 'block') {
        more_hide();
    }
    noti_more.classList.replace('d-none', 'd-block');

    if(dropdown_content.style.display == 'none') {
        content_show();
    } else if(dropdown_content.style.display == 'block') {
        content_hide();
    }
}

function more_notice() {
    more_show();
    noti_more.classList.add('d-none');
}

function content_show() {
    dropdown_content.style.display = 'block';
}

function content_hide() {
    dropdown_content.style.display = 'none';
}

function more_show() {
    more.style.display = 'block';
}

function more_hide() {
    more.style.display = 'none';
}

$('#dropdown-content-mobile').css('display', 'none')
$('#more-mobile').css('display', 'none')
$('#dropdown-toggle-mobile').click(function(){
    $('#more-mobile').hide()
    $('#dropdown-content-mobile').toggle()
})
$('#noti-more-mobile').click(function(){
    $('#more-mobile').toggle()
})