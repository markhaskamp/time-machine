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
        $('#stop_button').click(
                                   function() {
                                       Main_Timer.stop();
                                   });

        $('#start_time_edit_box').timePicker(
                                             {step: 15,
                                              startTime: "06:00",
                                              endTime: "22:00"});
    });

var Index_View = {
}
