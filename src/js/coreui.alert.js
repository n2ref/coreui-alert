
var CoreUI = typeof CoreUI !== 'undefined' ? CoreUI : {};

CoreUI.alert = {

    _dialog: null,
    _dialogMdc: null,


    /**
     * @param title
     * @param message
     * @param options
     */
    info: function (title, message, options) {
        this._create(title, message, options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    warning: function (title, message, options) {

        options = typeof options === 'object' ? options : {};
        options.titleColor = "#ff9800";

        this._create(title, message, options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    danger: function (title, message, options) {

        options = typeof options === 'object' ? options : {};
        options.titleColor = "#f44336";

        this._create(title, message, options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    success: function (title, message, options) {

        options = typeof options === 'object' ? options : {};
        options.titleColor = "#4caf50";

        this._create(title, message, options);
    },


    /**
     * @param title
     * @param message
     * @param options
     * @private
     */
    _create: function (title, message, options) {

        if (CoreUI.alert._dialog) {
            CoreUI.alert._dialog.close();
        }

        options = options || {};

        let titleColor = typeof options['titleColor'] === 'string'
            ? 'style="color: ' + options['titleColor'] + '"'
            : '';

        let messageColor = typeof options['messageColor'] === 'string'
            ? 'style="color: ' + options['messageColor'] + '"'
            : '';

        let textButton = typeof options['textButton'] === 'string'
            ? options['textButton']
            : 'Закрыть';

        let tplTitle = title
            ? '<h2 class="mdc-dialog__title" ' + titleColor + '>' + title + '</h2>'
            : '';

        let tplMessage = message
            ? '<div class="mdc-dialog__content" ' + messageColor + '>' + message + '</div>'
            : '';

        $('body').append(
            '<div class="mdc-dialog" id="dialog-alert">' +
                '<div class="mdc-dialog__container">' +
                    '<div class="mdc-dialog__surface" role="alertdialog" aria-modal="true" ' +
                         'aria-labelledby="my-dialog-title" aria-describedby="my-dialog-content">' +
                        tplTitle +
                        tplMessage +
                        '<div class="mdc-dialog__actions">' +
                            '<button type="button" class="btn btn-sm btn-light" data-mdc-dialog-action="cancel">' +
                                textButton +
                            '</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="mdc-dialog__scrim"></div>' +
            '</div>'
        );

        let dialogElement = $('#dialog-alert:not(.mdc-dialog--closing)');
        let dialog        = new CoreUI.alert.mdcDialog.MDCDialog(dialogElement[0]);


        if (typeof options['onClose'] === 'function') {
            dialog.listen('MDCDialog:closing', function(data) {
                options['onClose']();
            });
        }

        dialog.listen('MDCDialog:closed', function(data) {
            dialogElement.remove();

            if (typeof options['onClosed'] === 'function') {
                options['onClosed']();
            }
        });

        dialog.open();

        CoreUI.alert._dialog = dialog;
    },
}