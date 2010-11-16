describe("Main_Timer", function() {
        it("initial state is 'dormant'", function() {
                expect(Main_Timer.state).toEqual(Main_Timer.state_dormant);
            });

        it("given state = dormant, when receiving a tick event, updates #start_time_millis", function() {
                spyOn(Main_Timer_View, 'update_start_time_millis');

                Main_Timer.state = Main_Timer.state_dormant;
                Main_Timer.receive_tick();
                
                expect(Main_Timer_View.update_start_time_millis).toHaveBeenCalled();
            });

        it("given state = dormant, when receiving a tick event, updates #start_time_display", function() {
                spyOn(Main_Timer_View, 'update_start_time_display');

                Main_Timer.state = Main_Timer.state_dormant;
                Main_Timer.receive_tick();
                
                expect(Main_Timer_View.update_start_time_display).toHaveBeenCalled();
            });

        // when dormant, stop button is not displayed
        // on start click, call hide_start_button

        it("given state = running, when receiving a tick event, update #stop_time_millies", function() {
                expect(false).toEqual(true);
            });

        it("given state = running, when receiving a tick event, update #stop_time_display", function() {
                expect(false).toEqual(true);
            });
    });
