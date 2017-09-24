$("#add-btn").on("click", function () {
    // Create an object for the user's data
    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
    }

    // AJAX post the data to the friends API. 
    $.post("/api/friends", userData, function (data) {
        $("#matchName").text(data.name);
        $('#matchImg').attr("src", data.photo);
        $("#resultsModal").modal('toggle');
    });
});