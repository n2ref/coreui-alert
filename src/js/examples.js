document.addEventListener('DOMContentLoaded', function () {

    // Simple alert
    $('#alert-info').click(function () {
        CoreUI.alert.info("Alert title", "Raw denim you probably haven't heard of them jean shorts Austin");
    });

    $('#alert-warning').click(function () {
        CoreUI.alert.warning("Warning title", "Raw denim you probably haven't heard of them jean shorts Austin");
    });

    $('#alert-danger').click(function () {
        CoreUI.alert.danger("Oops...", "Something went wrong!");
    });

    $('#alert-success').click(function () {
        CoreUI.alert.success("Success work", "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");
    });



    $('#alert-custom').click(function () {
        CoreUI.alert.info("Alert title", "Raw denim you probably haven't heard of them jean shorts Austin", {
            titleColor: '#e91e63',
            messageColor: '#9c27b0',
            textButton: 'Ok',
            onClose: function () {
                console.log('close')
            },
            onClosed: function () {
                console.log('closed')
            }
        });
    });



    // Code highlight
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});