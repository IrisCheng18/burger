$(document).ready(function () {
    var burgersDevoured = [];

    $(".btnDevoured").on("click", function (event) {
        event.preventDefault();
        
        var updatedBurger = {
            devoured: 1
        };

        var id = $(this).attr("data-id");

        $.ajax({
            url: "/api/burger/" + id,
            method: "PUT",
            data: updatedBurger
        }).then(function (result) {
            // console.log(result);
            var burgerName = $("#burger-name" + id).text();
            burgersDevoured.push(burgerName);
            $("#devoredBurgersList").text("Devoured Burgers");
            // console.log(burgersDevoured);

            $("#burger-list" + id).remove();

            //Reload the page to get the updated list
            location.assign("/");
        });
    });

    $(".btnOrder").on("click", function (event) {
        event.preventDefault();

        console.log("btnOrder clicked");
        var burgerName = $(".new-burger-name").val().trim();

        if (burgerName !== "") {
            var newBurger = {
                burger_name: burgerName,
                devoured: 0
            };

            $.ajax({
                url: "api/burger",
                method: "POST",
                data: newBurger
            }).then(function (result) {
                // console.log(result);

                //Reload the page to get the updated list
                location.assign("/");
            });
        }

    });


});