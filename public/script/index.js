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

        $('#edit_start_time_button').click(function(){
                $("#start_time_edit_box").show();
                $("#start_time_edit_box").animate({"width": "100px"}, "slow");
            });


        $('#start_time_edit_box').change(function() {
                if ($('#start_time_edit_box').val()) {
                    var cur_date = new Date();
                    var new_time = $.timePicker('#start_time_edit_box').getTime();
                    new_time.setDate(cur_date.getDate());
                    new_time.setMonth(cur_date.getMonth());
                    new_time.setYear(cur_date.getYear() + 1900);
                    $('#start_time_millis').html(new_time.getTime());

                    $('#start_time_display').html(format_date_for_display(new_time));

                    $('#start_time_edit_box').css('width', '0px');
                    $('#start_time_edit_box').hide();

                }
            });
    });

var Index_View = {
}
