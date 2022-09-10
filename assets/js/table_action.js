const table_togglers = document.getElementsByClassName('table-toggle');
const main_rows = document.getElementsByClassName('main-row');

let state = false;

Array.prototype.forEach.call(table_togglers, (toggler, index) => {
    toggler.addEventListener('click', Daction_area);
})

function Daction_area() {
    const current_row = this.parentNode.parentNode;
    const next_row = current_row.nextElementSibling;
    const active_ele = get_active();
    if(active_ele && active_ele != current_row){
        active_ele.nextElementSibling.style.display = 'none';
        active_ele.firstElementChild.firstElementChild.innerText = '+';
        state = false;
    }
    
    if(!state) {
        next_row.style.display = 'table-row';
        this.innerText = '-';
    } else if(state) {
        next_row.style.display = 'none';
        this.innerText = '+';
    }
    state = !state;
}

function get_active() {
    const state = Array.prototype.find.call(main_rows,(items) => {
            let isActive = items.nextElementSibling.style.display == 'table-row'; 
            return isActive
    });  
    return state
}