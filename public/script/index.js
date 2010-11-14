var ea = new EventAggregator();
var page_loader = new Page_Loader();

$(document).ready( function() {
        page_loader.page_load(ea);
    });

var Index_View = {
    ndx: 0

    , foo: function() {
        this.ndx++;
        $('.main_timer').html(this.ndx);
    }

}