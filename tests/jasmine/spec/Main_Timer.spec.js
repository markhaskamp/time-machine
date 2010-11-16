describe("Main_Timer", function() {
        it("initial state is 'dormant'", function() {
                expect(Main_Timer.state).toEqual(Main_Timer.state_dormant);
            });

        it("given dormant, when receiving a tick event, updates the start_time", function() {
                spyOn(Main_Timer_View, 'update_start_time');

                Main_Timer.state = Main_Timer.state_dormant;
                Main_Timer.receive_tick();
                
                expect(Main_Timer_View.update_start_time).toHaveBeenCalled();
            });

    });
