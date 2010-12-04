describe("Index", function() {

  it("when page loads, Page_Loader.page_load starts the ticker", function() {
          ea = new EventAggregator();
          var page_loader = new Page_Loader();

          spyOn(page_loader, 'start_ticker');
          page_loader.page_load(ea);

          expect(page_loader.start_ticker).toHaveBeenCalled();
      });

  it("when page loads, main_timer subscribes to ticker event", function() {
          ea = new EventAggregator();
          var page_loader = new Page_Loader();
          spyOn(page_loader, 'start_ticker');
          spyOn(page_loader, 'subscribe_main_timer_to_ticker_event');
          page_loader.page_load(ea);

          expect(page_loader.subscribe_main_timer_to_ticker_event).toHaveBeenCalled();
      });

  it("when page loads, start-time_edit-button is hidden", function() {
          ea = new EventAggregator();
          var page_loader = new Page_Loader();
          spyOn(page_loader, 'start_ticker');
          spyOn(page_loader, 'hide_start_time_edit_button');
          page_loader.page_load(ea);

          expect(page_loader.hide_start_time_edit_button).toHaveBeenCalled();
  });

});

