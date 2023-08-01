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
                btnAcceptText: "Ok",
                btnAcceptEvent: function () { console.log('Ok') },
                btnRejectText: "Cancel",
                btnRejectEvent: function () { console.log('Cancel') }
            }
        );
    });

    $('#confirm-warning').click(function () {
        CoreUI.alert.warning(
            "Confirm title",
            "Raw denim you probably haven't heard of them jean shorts Austin?",
            {
                btnAcceptText: "Sign",
                btnAcceptColor: "#ff9800",
                btnAcceptEvent: function () { console.log('Sign') },
                btnRejectText: "Cancel",
                btnRejectEvent: function () { console.log('Cancel') }
            }
        );
    });

    $('#confirm-danger').click(function () {
        CoreUI.alert.danger(
            'Confirm title',
            "Raw denim you probably haven't heard of them jean shorts Austin?",
            {
                btnAcceptText: "Delete",
                btnAcceptColor: "#F44336",
                btnAcceptEvent: function () { console.log('Delete') },
                btnRejectText: "Cancel",
                btnRejectEvent: function () { console.log('Cancel') }
            }
        );
    });

    $('#confirm-question').click(function () {
        CoreUI.alert.question(
            "Confirm title",
            "Raw denim you probably haven't heard of them jean shorts Austin?",
            {
                btnAcceptText: "Yes",
                btnAcceptColor: "#6c757d",
                btnAcceptEvent: function () { console.log('Yes') },
                btnRejectText: "No",
                btnRejectEvent: function () { console.log('No') }
            }
        );
    });




    // Html content
    $('#alert-html').click(function () {
        CoreUI.alert.default(
            '<strong>HTML <u>example</u></strong>',
            '<p>You can use <b>bold text</b>, <a href="#">links</a> and other HTML tags</p>' +
            '<table class="table mt-4">' +
                '<tbody>' +
                    '<tr><th>1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr>' +
                    '<tr><th>2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>' +
                '</tbody>' +
            '</table>',
            {
                btnCancelText: 'Ok',
                btnCancelEvent: function () { console.log('Ok') },
            }
        );
    });


    // Custom options
    $('#alert-custom').click(function () {
        CoreUI.alert.create({
            type: 'info',
            title: "Custom alert",
            content: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            btnAcceptText: "Accept",
            btnAcceptColor: "#6c757d",
            btnAcceptEvent: function () { console.log('Accept') },
            btnRejectText: "Reject",
            btnRejectColor: "#6c757d",
            btnRejectEvent: function () { console.log('Reject') },
            btnCancelText: "Cancel",
            btnCancelColor: "#fff",
            btnCancelEvent: function () { console.log('Cancel') }
        });
    });



    // Code highlight
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});