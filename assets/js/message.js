const close_btns = document.getElementsByClassName('attach-close');

Array.prototype.forEach.call(close_btns, (btn) =>  {
    btn.addEventListener('click', parent_hide);
})

function parent_hide() {
    const parent = this.parentNode;
    parent.classList.replace('d-flex', 'd-none');

}