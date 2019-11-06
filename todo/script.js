$(document).ready(function () {
    // console.log($("#input-div"));
    $("#sortable").sortable({
        stop: function (event, ui) {
            saveList();
        }
    });

    $("button").click(function () {
        $("ol").append("<li>" + $("#input-task").val() + "<button class='remove'>delete</button></li>")

        saveList();
    })
    // $("li").click(function(){
    //     console.log("works");
    // })


    $("ol").on("click", 'li', function (e) {
        // $(this).hide();
        console.log(e.target);
        if(e.target.className === "remove" && e.target.tagName === "BUTTON") {
            console.log("works");
            $(this).remove();
        }
        // if ($(this)[0].style.textDecoration === "line-through") {
        //     $(this).css("text-decoration", "none");

        // }
        // else $(this).css("text-decoration", "line-through");
        saveList();

    })
    $("ol").html(localStorage.getItem("tasks"));


    function saveList() {
        localStorage.setItem('tasks', $("ol").html());
        console.log("alert");
    }

})