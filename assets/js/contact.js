let intViewportWidth = window.innerWidth;
const body = document.body;
const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('menu-toggle');
const menu_items = document.getElementsByClassName('menu-item');
const sub_menu = document.getElementsByClassName('sub-menu');
const logo = document.getElementById('logo');
const full_logo = document.getElementById('full_logo');
let isPC = intViewportWidth > 1000;

if (!isPC) {
    sidebar.classList.replace('menu-md', 'menu-sm');
    Array.prototype.forEach.call(menu_items, (items,) => {
        items.firstElementChild.classList.add('sm-item');
    })
    full_logo.style.display = 'none';
    logo.style.display = 'block';
}

let submenu_heights = [];
Array.prototype.forEach.call(menu_items, (item, index) => {
    const sub_menu = has_child(item, 'UL');
    if (sub_menu) {
        submenu_heights[index] = sub_menu.clientHeight;
        sub_menu.style.height = '0px';
        // sub_menu.style.display = 'none';
    } else {
        submenu_heights[index] = null;
    }
})



toggle.addEventListener('click', sidebar_toggle);
Array.prototype.forEach.call(menu_items, (items) => {
    // items.firstChild.addEventListener('click', show_submenu);
    items.firstElementChild.addEventListener('click', show_submenu);
})


// responsive-side-menu
window.addEventListener('resize', function (){
    if(get_active()) {
        active_hide();
    }
    intViewportWidth = this.window.innerWidth;
    isPC = intViewportWidth > 1000;
    if (!isPC) {
        sidebar.classList.remove('menu-md');
        sidebar.classList.remove('menu-none');
        sidebar.classList.add('menu-sm');
        Array.prototype.forEach.call(menu_items, (items) => {
            items.firstElementChild.classList.add('sm-item');
        });
    } else if(isPC){
        sidebar.classList.remove('menu-sm');
        sidebar.classList.remove('menu-none');
        sidebar.classList.add('menu-md');
        Array.prototype.forEach.call(menu_items, (items) => {
            items.firstElementChild.classList.remove('sm-item');
        });
    }
});

function sidebar_toggle() {
    if (get_active()) {
        active_hide();
    }
    isPC = intViewportWidth > 1000;
    if (isPC) {
        if (sidebar.classList.contains('menu-md')) {
            sidebar.classList.replace('menu-md', 'menu-sm');
            Array.prototype.forEach.call(menu_items, (item) => {
                item.firstElementChild.classList.add('sm-item');
                
            })
            logo.style.display = 'block';
            full_logo.style.display = 'none';
        } else {
            sidebar.classList.replace('menu-sm', 'menu-md');
            Array.prototype.forEach.call(menu_items, (item) => {
                item.firstElementChild.classList.remove('sm-item');

            })
            logo.style.display = 'none';
            full_logo.style.display = 'block';
        }
    } else if(!isPC){
        logo.style.display = 'block';
        full_logo.style.display = 'none';
        if (sidebar.classList.contains('menu-sm') || sidebar.classList.contains('menu-md')) {
            sidebar.classList.remove('menu-md');
            sidebar.classList.remove('menu-sm');
            sidebar.classList.add('menu-none');
            // Array.prototype.forEach.call(menu_items, (items) => {
            //     // items.firstChild.addEventListener('click', show_submenu);
            //     items.style.position = 'static';
            // })
            sidebar.style.overflow = 'hidden';
        } else if(sidebar.classList.contains('menu-none')) {
            sidebar.classList.replace('menu-none', 'menu-sm');
            sidebar.style.overflow = 'auto';
            
        }
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
    relative();
    if (isActive) {
        if (has_sub) {
            sub_hide(has_sub);
        }
        selected_menu.classList.remove('active');
    } else {
        if(get_active()) {
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

function get_active() {
    return Array.prototype.find.call(menu_items,(items) => {
                let state = has_classname(items, 'active');
                return state
            })
}

function active_hide() {
    const active_ele = get_active();
    
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