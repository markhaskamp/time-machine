
describe("Index", function() {
        var ea;

  beforeEach(function() {
          ea = new EventAggregator();
      });

  it("when page loads, page_timer publishes a 'click' event every second", function() {
          var page_loader = new Page_Loader();

          spyOn(page_loader, 'foo');
          page_loader.page_load();

          expect(page_loader.foo).toHaveBeenCalled();
      });


});

