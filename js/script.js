$(document).ready(function () {

    //Data Table
    $('#example1, #example, #example2, #example3').DataTable();

    //Active Tab Icon color
    $(".chkbox").click(function () {
        $(".chkbox").removeClass("chckbox-active");
        $(this).addClass("chckbox-active");
    })

    // $(".nav-link").click(function () {
    //     console.log($(this).find(".chkbox"))
    //     $(this).find(".chkbox").removeClass("chckbox-active")
    //     $(this).find(".chkbox").addClass("chckbox-active")
    // })
});