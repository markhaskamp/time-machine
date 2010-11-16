describe("Main_Timer", function() {
        it("initial state is 'dormant'", function() {
                expect(Main_Timer.state).toEqual(Main_Timer.state_dormant);
            });

        it("given dormant, when receiving a tick event, updates #start_time_millis", function() {
                spyOn(Main_Timer_View, 'update_start_time_millis');

                Main_Timer.state = Main_Timer.state_dormant;
                Main_Timer.receive_tick();
                
                expect(Main_Timer_View.update_start_time_millis).toHaveBeenCalled();
            });

        it("given dormant, when receiving a tick event, updates #start_time_display", function() {
                spyOn(Main_Timer_View, 'update_start_time_display');

                Main_Timer.state = Main_Timer.state_dormant;
                Main_Timer.receive_tick();
                
                expect(Main_Timer_View.update_start_time_display).toHaveBeenCalled();
            });
    });
