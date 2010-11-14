var a_var;

describe("EventAggregator", function() {
        var ea;

  beforeEach(function() {
          ea = new EventAggregator();
      });

  it("with EventAggregator, can subscribe to an event", function() {
          a_var = 42;
          ea.subscribe("event_key", "function_key", foo);
          ea.publish("event_key");
          expect(a_var).toEqual(43);
      });


});

function foo() {
    a_var++;
}

