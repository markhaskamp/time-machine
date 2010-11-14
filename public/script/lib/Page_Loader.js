function Page_Loader() {

    this.page_load = function(ea) {
        this.start_ticker(ea);
        this.subscribe_main_timer_to_ticker_event(ea);
    };

    this.start_ticker = function(ea) {
        $('.ticker').everyTime(1000, function(i){
                ea.publish("TICK");
            }, 5);
    };

    this.subscribe_main_timer_to_ticker_event = function(ea) {
        ea.subscribe("TICK", "subscribe_main_timer_to_ticker_event", function() { Index_View.foo() });
    };

}
