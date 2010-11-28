function Page_Loader() {

    this.page_load = function(ea) {
        this.start_ticker(ea);
        this.subscribe_main_timer_to_ticker_event(ea);

        $('#start_time_millis').hide();
        $('#stop_time_millis').hide();
        $('#start_time_edit_box').css('width', '0px');
        $('#start_time_edit_box').hide();
        
        $('.button').hover( function() { $(this).css({ cursor: 'pointer' }) },
                            function() { $(this).css({ cursor: 'auto' }) });
    };

    this.start_ticker = function(ea) {
        $('.ticker').everyTime(1000, function(i){
                ea.publish("TICK");
            });
    };

    this.subscribe_main_timer_to_ticker_event = function(ea) {
        ea.subscribe("TICK", "subscribe_main_timer_to_ticker_event", function() { Main_Timer.receive_tick() });
    };

}
