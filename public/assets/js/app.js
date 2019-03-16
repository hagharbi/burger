var app = {
    devourBurger: function (id) {
        $.ajax({
            url: `/api/burger/${id}`,
            type: "PUT",
            success: function () {
                window.location.reload();
            }
        })
    },

    bindUIActions: function () {
        $(".devour-btn").on("click", function () {
            var id = $(this).attr("data-burger");
            app.devourBurger(id);
        });

        $("#addBurger").on("click", function (e) {
            e.preventDefault();
            var data = {
                name: $("#burgerName").val()
            };
            $.ajax({
                type: "POST",
                url: "api/burger",
                data: data,
                success: function (result) {
                    console.log(result);
                    window.location.reload();
                }
            });
        });
    },

    init: function () {
        this.bindUIActions();
    }
};

$(document).ready(function () {
    app.init();
});