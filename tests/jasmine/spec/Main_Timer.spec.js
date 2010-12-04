describe("Main_Timer", function() {
  describe("state is dormant", function() {
    it("initial state is 'dormant'", function() {
      expect(Main_Timer.state).toEqual(Main_Timer.state_dormant);
        });

    it("when receiving a tick event, updates #start_time_millis", function() {
      spyOn(Main_Timer_View, 'update_start_time_millis');
                        
      Main_Timer.state = Main_Timer.state_dormant;
      Main_Timer.receive_tick();
                
      expect(Main_Timer_View.update_start_time_millis).toHaveBeenCalled();
        });

    it("when receiving a tick event, updates #start_time_display", function() {
      spyOn(Main_Timer_View, 'update_start_time_display');

      Main_Timer.state = Main_Timer.state_dormant;
      Main_Timer.receive_tick();
                
      expect(Main_Timer_View.update_start_time_display).toHaveBeenCalled();
        });

    it("click start sets state = 'running'", function() {
      Main_Timer.start();
      expect(Main_Timer.state).toEqual(Main_Timer.state_running);
    });

    // "when state != 'dormant', click start does nothing"
    xit("given state = running, when receiving a tick event, update #stop_time_millies", function() {
      expect(false).toEqual(true);
    });

    xit("given state = running, when receiving a tick event, update #stop_time_display", function() {
      expect(false).toEqual(true);
    });
  });

  describe("state is running", function() {
    it("when start is 'clicked', show start-time-edit-button", function() {
            spyOn(Main_Timer_View, 'show_start_time_edit_button');
            Main_Timer.start();

            expect(Main_Timer_View.show_start_time_edit_button).toHaveBeenCalled();
    });
  });
});
