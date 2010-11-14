var ea = new EventAggregator();
var page_loader = new Page_Loader();

$(document).ready( function() {
        page_loader.page_load(ea);
    });