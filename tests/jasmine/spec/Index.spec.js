describe("Index", function() {

  it("when page loads, Page_Loader.page_load starts the ticker", function() {
          ea = new EventAggregator();
          var page_loader = new Page_Loader();

          spyOn(page_loader, 'start_ticker');
          page_loader.page_load(ea);

          expect(page_loader.start_ticker).toHaveBeenCalled();
      });

  it("given Page_Loader.page_load, main_timer subscribes to ticker event", function() {
          ea = new EventAggregator();
          var page_loader = new Page_Loader();
          spyOn(page_loader, 'start_ticker');
          spyOn(page_loader, 'subscribe_main_timer_to_ticker_event');
          page_loader.page_load(ea);

          expect(page_loader.subscribe_main_timer_to_ticker_event).toHaveBeenCalled();
      });


});

