// jQuery(document).ready(function() {
//     console.log("jquery");
// })

$(document).ready(function() { // lieto $ zimi vai raksti "jQuery"
    console.log("same jquery");

    $("ol li").text("this is new value");
    $("ol li.other").html("this <strong>is</strong> new other class value");
    $("ol li.text").text("text"); //<strong></strong> lieto ar html
    $("ol li#testFile").text("this text is changed"); 
    $("#testFile").text("this text is changed second time");
    $("#html-output").text($("ol").html());
    // $("ol")
    $("#text-output").text($("ol").text());
    $("ol li:first").text("This is first");
    $("ol li").first().append("!!!");

    var count = 0; 
    $("button").click(function(){
        count++;
        $("#output").append("<p>"+ count + ". new row</p>");
        $("ol").show(5000,"linear",function() {
            $("ol").hide();
        });
    })
})

