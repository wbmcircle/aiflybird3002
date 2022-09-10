let intViewportWidth = window.innerWidth;
const body = document.body;
const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('menu-toggle');
const menu_items = document.getElementsByClassName('menu-item');
const sub_menu = document.getElementsByClassName('sub-menu');
const logo = document.getElementById('logo');
const full_logo = document.getElementById('full_logo');
const mobile_toggler = document.getElementById('mobile-close');
let isPC = intViewportWidth > 800;

if (!isPC) {
    sidebar.classList.replace('menu-md', 'menu-none');
    body.classList.add('relative');
    sidebar.classList.add('mobile-sidebar');
}



toggle.addEventListener('click', sidebar_toggle);
mobile_toggler.addEventListener('click', mobile_close);
Array.prototype.forEach.call(menu_items, (items) => {
    items.firstElementChild.addEventListener('click', show_submenu);
})


// responsive-side-menu
window.addEventListener('resize', function (){
    let state = get_screenState();

    if(state) {
        body.classList.remove('relative');
        sidebar.classList.remove('mobile-sidebar');
    } else if(!state) {
        body.classList.add('relative');
        sidebar.classList.add('mobile-sidebar');
        sidebar.classList.replace('menu-md', 'menu-none');
    }



    // if (state) {
    //     if(sidebar.classList.contains('menu-none')) {
    //         sidebar.classList.replace('menu-none', 'menu-md');
    //     }
    // } else if(!state){
    //     if(sidebar.classList.contains('menu-md')) {
    //         sidebar.classList.replace('menu-md', 'menu-none');
    //     }
    // }
});

function sidebar_toggle() {

    if (sidebar.classList.contains('menu-md')) {
        sidebar.classList.replace('menu-md', 'menu-none');
    } else if(sidebar.classList.contains('menu-none')) {
        sidebar.classList.replace('menu-none', 'menu-md');
    }
}

function show_submenu(e) {
    const selected_menu = this.parentNode;
    let isActive = has_classname(selected_menu, 'active');
    let has_sub = has_child(selected_menu, 'UL');
    sidebar.style.overflow = 'auto';
    if(has_sub) {
        e.preventDefault();
    }

    if (isActive) {
        if (has_sub) {
            sub_hide(has_sub);
        }
        selected_menu.classList.remove('active');
    } else {
        if(get_subactive()) {
            active_hide()
        }

        selected_menu.classList.add('active');
        const selected_index = Array.prototype.findIndex.call(menu_items, (item) => {
            let state = has_classname(item, 'active');
            return state
        })

        if (has_sub) {
            sub_show(has_sub, selected_index);
        }
    }
}


function has_child(element, child) {
    let nodeName = Array.prototype.find.call(element.children, (node) => {
        return node.tagName == child;
    })
    return nodeName
}

function has_classname (element, className) {
    let hasClass = Array.prototype.find.call(element.classList, (list) => {
        return list == className
    })
    return hasClass
}

function get_subHeight(index) {
    return submenu_heights[index];
}

function sub_show(element, index) {
    // element.style.display = 'block';
    if(has_classname(sidebar, 'menu-sm')) {
        element.classList.add('beside-show');
    }
    let height = get_subHeight(index) + 'px';
    element.style.transition = "all .5s";
    element.style.height = height;
}

function sub_hide(element) {
    element.style.transition = "all .5s";
    element.style.height = '0px';
    // element.style.display = 'none';
}

function get_subactive() {
    let status =  Array.prototype.find.call(menu_items,(items) => {
                let state = items.classList.contains('active');
                return state
            })
    return status
}

function active_hide() {
    const active_ele = get_subactive();
    
    if(active_ele) {
        const active_sub = has_child(active_ele, "UL");
        active_ele.classList.remove('active');
        if(active_sub) {
            sub_hide(active_sub);
        }
    }
}

function relative() {
    if (sidebar.classList.contains('menu-md')) {
        Array.prototype.forEach.call(sub_menu, (item) => {
            item.classList.remove('beside-show');
        })
    } else if(sidebar.classList.contains('menu-sm')) {
        Array.prototype.forEach.call(sub_menu, (item) => {
            item.classList.add('beside-show');
        })
    }
}

function get_screenState() {
    isPC = window.innerWidth > 800;
    return isPC
}

function mobile_close() {
    sidebar.classList.replace('menu-md', 'menu-none');
}