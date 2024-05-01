document.addEventListener('DOMContentLoaded', function () {

    // Alert
    $('#alert-default').click(function () {
        CoreUI.alert.default("Alert title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });

    $('#alert-warning').click(function () {
        CoreUI.alert.warning("Alert title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });

    $('#alert-danger').click(function () {
        CoreUI.alert.danger('Alert title', "Raw denim you probably haven't heard of them jean shorts Austin?");
    });

    $('#alert-success').click(function () {
        CoreUI.alert.success('Alert title', "Raw denim you probably haven't heard of them jean shorts Austin?");
    });

    $('#alert-info').click(function () {
        CoreUI.alert.info("Alert title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });


    // Confirm
    $('#confirm-default').click(function () {
        CoreUI.alert.default(
            "Confirm title",
            "Raw denim you probably haven't heard of them jean shorts Austin?",
            {
                buttons: [
                    { text: "Cancel", click: function () { console.log('Cancel') }, },
                    { text: "Ok",     click: function () { console.log('Ok')     }, }
                ]
            }
        );
    });

    $('#confirm-warning').click(function () {
        CoreUI.alert.warning(
            "Confirm title",
            "Raw denim you probably haven't heard of them jean shorts Austin?",
            {
                buttons: [
                    { text: "Cancel",                  click: function () { console.log('Cancel') }, },
                    { text: "Sign",   type: 'warning', click: function () { console.log('Sign')     }, }
                ]
            }
        );
    });

    $('#confirm-danger').click(function () {
        CoreUI.alert.danger(
            'Confirm title',
            "Raw denim you probably haven't heard of them jean shorts Austin?",
            {
                buttons: [
                    { text: "Cancel",                 click: function () { console.log('Cancel') }, },
                    { text: "Delete", type: 'danger', click: function () { console.log('Delete')     }, }
                ]
            }
        );
    });




    // Html content
    $('#alert-html').click(function () {
        CoreUI.alert.create({
            html: '<strong>HTML <u>example</u></strong>' +
                   '<p>You can use <b>bold text</b>, <a href="#">links</a> and other HTML tags</p>' +
                   '<table class="table mt-4">' +
                       '<tbody>' +
                           '<tr><th>1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr>' +
                           '<tr><th>2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>' +
                       '</tbody>' +
                   '</table>',
            buttons: [
                { text: 'Ok', click: function () { console.log('Ok') }, }
            ]
        });
    });


    // Custom options
    $('#alert-custom').click(function () {
        CoreUI.alert.create({
            type: 'info',
            title: "Custom alert",
            message: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            buttons: [
                { text: "Cancel", type: 'secondary', click: function () { console.log('Cancel') }, },
                { text: "Reject", type: 'warning',   click: function () { console.log('Reject') }, },
                { text: "Accept", type: 'success',   click: function () { console.log('Accept') }, },
            ]
        });
    });



    // Code highlight
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});