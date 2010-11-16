var Main_Timer = {
    state_dormant: 'dormant'
    ,state_running: 'running'
    ,state_stopped: 'stopped'
    ,state: 'dormant'

    ,receive_tick: function() {
        Main_Timer_View.update_start_time();
        
    }



};

var Main_Timer_View = {
    update_start_time: function() {
    }

};
