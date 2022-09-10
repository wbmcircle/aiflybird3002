$(document).ready(function () {

    $('#config-text').keyup(function () {
        eval($(this).val());
    });

    $('.configurator input, .configurator select').change(function () {
        updateConfig();
    });

    $('.demo i').click(function () {
        $(this).parent().find('input').click();
    });

    $('#startDate').daterangepicker({
        singleDatePicker: true,
        startDate: moment().subtract(6, 'days')
    });

    $('#endDate').daterangepicker({
        singleDatePicker: true,
        startDate: moment()
    });

    

    updateConfig();

    function updateConfig() {
        var options = {};

        if ($('#singleDatePicker').is(':checked'))
            options.singleDatePicker = true;

        if ($('#showDropdowns').is(':checked'))
            options.showDropdowns = true;

        if ($('#showWeekNumbers').is(':checked'))
            options.showWeekNumbers = true;

        if ($('#showISOWeekNumbers').is(':checked'))
            options.showISOWeekNumbers = true;

        if ($('#timePicker').is(':checked'))
            options.timePicker = true;

        if ($('#timePicker24Hour').is(':checked'))
            options.timePicker24Hour = true;


        if ($('#timePickerSeconds').is(':checked'))
            options.timePickerSeconds = true;

        if ($('#autoApply').is(':checked'))
            options.autoApply = true;

        if ($('#dateLimit').is(':checked'))
            options.dateLimit = {
                days: 7
            };

        if ($('#ranges').is(':checked')) {
            options.ranges = {
                'All': [moment().subtract(1, 'year').startOf('year'), moment()],
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                'This Year': [moment().subtract(0, 'year').startOf('year'), moment().subtract(0, 'year').endOf('year')],
            };
        }

        if ($('#locale').is(':checked')) {
            $('#rtl-wrap').show();
            options.locale = {
                direction: $('#rtl').is(':checked') ? 'rtl' : 'ltr',
                format: 'MM/DD/YYYY HH:mm',
                separator: ' - ',
                applyLabel: 'Apply',
                cancelLabel: 'Cancel',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            };
        } else {
            $('#rtl-wrap').hide();
        }

        if (!$('#linkedCalendars').is(':checked'))
            options.linkedCalendars = false;

        if (!$('#autoUpdateInput').is(':checked'))
            options.autoUpdateInput = false;

        if (!$('#showCustomRangeLabel').is(':checked'))
            options.showCustomRangeLabel = false;

        if ($('#alwaysShowCalendars').is(':checked'))
            options.alwaysShowCalendars = true;

        

        
        $('#config-text').val("$('#demo').daterangepicker(" + JSON.stringify(options, null, '    ') + ", function(start, end, label) {\n  console.log(\"New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')\");\n});");

        $('#config-demo').daterangepicker(options, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });

        $('#config-demo-another').daterangepicker(options, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });

        $('#config-demo-mobile').daterangepicker(options, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });
        $('#todo-one-day').daterangepicker(options, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });
        $('#todo-important').daterangepicker(options, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });
        $('#todo-calendar').daterangepicker(options, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });
        $('#todo-imcomplete').daterangepicker(options, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });
        $('#todo-complete').daterangepicker(options, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });
    }

});