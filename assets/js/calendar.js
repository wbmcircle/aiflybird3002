let date = new Date();
const modes = ['month', 'week', 'day']
let current_mode = 0
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

function rendarCalendar() {
    let viewYear = date.getFullYear();
    let viewMonth = date.getMonth();
    let viewDate = date.getDate()
    let viewDay = date.getDay()
    $('.year-month').text(`${viewYear} ${months[viewMonth]}`);
    // $('.calendar').html('')
    
    // $('.calendar').append(hours_box)
    // fill days elements
    let day_items = []
    for(let [i, label] of days.entries()){
        day_items[i] =  `<div class="day">${label}</div>`
    }
    $('.calendar .days').html(day_items.join(''))

    // fill date element according on mode
    if(current_mode === 0) {
        const prevLast = new Date(viewYear, viewMonth, 0);
        const thisLast = new Date(viewYear, viewMonth + 1, 0);
        const PLDate = prevLast.getDate();
        const PLDay = prevLast.getDay();
        
        const TLDate = thisLast.getDate();
        const TLDay = thisLast.getDay();
        
        const prevDates = [];
        const thisDates = [...Array(TLDate + 1).keys()].slice(1);
        const nextDates = [];
        
        if (PLDay !== 6) {
            for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
            }
        }
        
        for (let i = 1; i < 7 - TLDay; i++) {
            nextDates.push(i);
        }
        
        prevDates.forEach((date, i) => {
            prevDates[i] = `<div class="date not-current-month"><span class="date-num">${date}</span></div>`;
        })
        thisDates.forEach((date, i) => {
            thisDates[i] = `<div class="date"><span class="date-num">${date}</span></div>`;
            if(viewYear === new Date().getFullYear() && viewMonth === new Date().getMonth() && new Date().getDate() === date) {
                thisDates[i] = `<div class="date "><span class="date-num current">${date}</span></div>`
            }
            if(i==1 || i==8 || i==17 || i==25){
                thisDates[i] = `<div class="date"><span class="date-num">${date}</span><div class="has-event"><span class="d-none d-md-inline">3 more</span></div></div>`
            } 
        })
        nextDates.forEach((date, i) => {
            nextDates[i] = `<div class="date not-current-month"><span class="date-num">${date}</span></div>`;
        })
        
        const dates = prevDates.concat(thisDates, nextDates);
        
        $('.calendar .dates').html(dates.join(''));
    }
    else if(current_mode===1) {
        const thisLast = new Date(viewYear, viewMonth + 1, 0);
        let dates = []
        let nextDates = []
        let end_at = viewDate + (7 - viewDay)
        if(end_at > thisLast.getDate()){
            for(let i=0; i<end_at-thisLast.getDate()-1; i++){
                nextDates.push(i + 1)
            }
            for(let i=0; i < (thisLast.getDate() - viewDate +1);i++){
                dates.push(viewDate + i)
            }
        } else {
            for(let i=0; i<7; i++){
                dates.push(viewDate - viewDay + i)
            }
        }
        let thisDates = [...dates, ...nextDates]
        let firstIndex = thisDates.indexOf(dates[0])
        let lastIndex = thisDates.indexOf(dates[dates.length-1])
        let items = []
        for(let [i, date] of thisDates.entries()){
            let condition = ''
            let event = ''
            if(viewYear === new Date().getFullYear() && viewMonth === new Date().getMonth() && new Date().getDate() === date) {
                condition = 'current'
            }
            if(i < firstIndex || i>lastIndex) {
                condition = 'not-current-month'
            }
            items[i] = `<div class="date ${condition}">${date}</div>`;
        }
        $('.calendar .dates').html(items.join(''));

        // hour label
        let label_items = []
        let hour_items = []
        let wrap_items = []
        for(let i=0; i<24; i++){
            let label = i<10?`0${i}`:i;
            label_items[i] = `<div class="label">${label}:00</div>`
            // hour_items[i] = `<div class="hour"></div>`
        }
        // for(let i=0; i<7; i++){
        //     wrap_items[i] = `<div class="hours"></div>`
        // }
        $('.calendar .hour-label').html(label_items.join(''));
        // $('.calendar .hour-wrap').html(wrap_items.join(''));
        // $('.calendar .hour-wrap .hours').html(hour_items.join(''));
    }
}
function toPrev(){
    switch(current_mode){
        case 0:
            date.setMonth(date.getMonth() - 1)
            break;
        case 1:
            date.setDate(date.getDate() - 7)
            break;
        case 2:
            date.setDate(date.getDate() - 1)
            break;
        default:
            break
    }
    rendarCalendar() 
}
function toNext(){
    switch(current_mode) {
        case 0:
            date.setMonth(date.getMonth() + 1);
            break;
        case 1:
            date.setDate(date.getDate() + 7)
            break;
        case 2:
            date.setDate(date.getDate() + 1)
            break;
        default:
            break
    }
    rendarCalendar() 
}
function toToday(){
    date = new Date()
    rendarCalendar()
}

// touch 
var ts;
$('.calendar').bind('touchstart', function (e){
   ts = e.originalEvent.touches[0].clientX;
});

$('.calendar').bind('touchend', function (e){
   var te = e.originalEvent.changedTouches[0].clientX;
   if(ts > te+25){
      toNext();
   }else if(ts < te-25){
      toPrev();
   }
});

// today
$('.today').click(() => toToday())


rendarCalendar()
// $('.previous').click(() => toPrev())
// $('.next').click(() => toNext())
$('.calendar .dates .date').bind('click', function(){
    $('#none-item').addClass('d-none')
    $('#event-board').removeClass('d-none')
})
$('.calendar-action .prev').click(() => toPrev())
$('.calendar-action .next').click(() => toNext())