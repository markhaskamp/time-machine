var ea;
var page_loader;

$(document).ready( function() {
        ea = new EventAggregator();
        var page_loader = new Page_Loader();
        page_loader.page_load(ea);
    });

var Index_View = {
    ndx: 0

    , foo: function() {
        this.ndx++;
        $('#start_time_display').html(this.ndx);
    }

}
