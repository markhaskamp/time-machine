var ea;
var page_loader;

$(document).ready( function() {
        ea = new EventAggregator();
        var page_loader = new Page_Loader();
        page_loader.page_load(ea);

        $('#start_button').click(
                                 function() {
                                     Main_Timer.start();
                                 });
    });

var Index_View = {
}
