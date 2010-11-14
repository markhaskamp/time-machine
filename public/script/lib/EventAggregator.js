
function EventAggregator() {
    // aggregator is hash
    // k/v = 'eventID/[{'fn_id': function_id, 'fn': function}, ...]
    this.aggregator = {};

    this.subscribe = function(evt, fn_id, fn) {
        // console.log('subscribe.enter.');
        if (this.aggregator[evt] == undefined) {
            this.aggregator[evt] = [];
        }
        this.aggregator[evt].push({'fn_id': fn_id, 'fn': fn });
    };

    this.publish = function() {
        eventID = arguments[0];
        argArray = [];
        for (i=1; i<arguments.length; i++) {
            argArray.push(arguments[i]);
        }
        // console.log('publish.enter.');
        jQuery.each(this.aggregator[eventID], function() {
                this.fn(argArray);
            });
    }

    this.unsubscribe = function(eventID, functionID) {
        var ndxToRemove = -1;
        $.each(this.aggregator[eventID], function(i, val) {
                if (this.fn_id == functionID) {
                    ndxToRemove = i;
                }
            });

        var N = this.aggregator[eventID].length;

        if (ndxToRemove == 0) {
            this.aggregator[eventID].shift();
        }
        else if (ndxToRemove == N) {
            this.aggregator[eventID].pop();
        }
        else if (ndxToRemove != -1) {
            preArray = this.aggregator[eventID].slice(0, ndxToRemove);
            postArray = this.aggregator[eventID].slice(ndxToRemove+1, this.aggregator[eventID].length);
            this.aggregator[eventID] = concat(preArray, postArray);
        }
    }
}
