var Main_Timer = {
    state_dormant: 'dormant'
    ,state_running: 'running'
    ,state: 'dormant'

    ,receive_tick: function() {
        var d = new Date();

        if (this.state === this.state_dormant) {
            Main_Timer_View.update_start_time_millis(d.getTime());
            Main_Timer_View.update_start_time_display(format_date_for_display(d));
        }
        else if (this.state === this.state_running) {
            Main_Timer_View.update_stop_time_millis(d.getTime());
            Main_Timer_View.update_stop_time_display(format_date_for_display(d));
        }
    }

    ,start: function() {
        this.state = this.state_running;
        $('#start_button').hide();
        $('#stop_time_display').show();
        Main_Timer_View.show_start_time_edit_button();
    }

    ,stop: function() {
        this.state = this.state_dormant;
        $('#stop_time_display').hide();
        $('#stop_button').hide();

        start = $('#start_time_millis').html();
        stop = $('#stop_time_millis').html();

        start = parseInt((start / 1000) / 60)
        stop = parseInt((stop / 1000) / 60)

        new_location = "/new?start_time=" + start + "&stop_time=" + stop;
        window.location = new_location
    }

};

var Main_Timer_View = {
    update_start_time_millis: function(millis) {
        $('#start_time_millis').html(millis);
    }
    ,update_start_time_display: function(date_string) {
        $('#start_time_display').html(date_string);
    }
    ,update_stop_time_millis: function(millis) {
        $('#stop_time_millis').html(millis);
    }
    ,update_stop_time_display: function(date_string) {
        $('#stop_time_display').html(date_string);
    }
    ,show_start_time_edit_button: function() {
        $('#edit_start_time_button').show();
    }
};

function format_date_for_display(d) {
    var minutes_string = format_minutes_string(d.getMinutes());

    var date_string = ((d.getMonth() + 1)) + '/' +
                      d.getDate() + '/' +
                      d.getFullYear() + ' - ' +
        d.getHours() +
        minutes_string
        + ':' + d.getSeconds()
        ;

    return date_string;
}

function format_minutes_string(total_minutes) {
    var minutes_string = ":";

    if (total_minutes < 10) {
        minutes_string += '0' + total_minutes;
    } else {
        minutes_string += total_minutes; 
    }

    return minutes_string;
}
