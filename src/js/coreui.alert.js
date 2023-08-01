
import Swal       from '../../node_modules/sweetalert2/src/sweetalert2';
import alertUtils from './coreui.alert.utils';


let alert = {

    /**
     * @param title
     * @param message
     * @param options
     */
    default: function (title, message, options) {

        options = alertUtils.isObject(options) ? options : {};
        options.title   = title;
        options.content = message;

        this.create(options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    warning: function (title, message, options) {

        options = alertUtils.isObject(options) ? options : {};
        options.title   = title;
        options.content = message;
        options.type    = 'warning';

        this.create(options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    question: function (title, message, options) {

        options = alertUtils.isObject(options) ? options : {};
        options.title   = title;
        options.content = message;
        options.type    = 'question';

        this.create(options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    info: function (title, message, options) {

        options = alertUtils.isObject(options) ? options : {};
        options.title   = title;
        options.content = message;
        options.type    = 'info';

        this.create(options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    success: function (title, message, options) {

        options = alertUtils.isObject(options) ? options : {};
        options.title   = title;
        options.content = message;
        options.type    = 'success';

        this.create(options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    danger: function (title, message, options) {

        options = alertUtils.isObject(options) ? options : {};
        options.title   = title;
        options.content = message;
        options.type    = 'danger';

        this.create(options);
    },


    /**
     * @param options
     * @returns {MDCDialog}
     */
    create: function(options) {

        options = alertUtils.isObject(options) ? options : {};

        let swalOptions = {
            html: '',
            reverseButtons: true,
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
                popup: 'coreui_animate_animated coreui_animate_fadeIn coreui_animate_zoomIn'
            },
            hideClass: {
                popup: 'coreui_animate_animated coreui_animate_fadeOut'
            }
        };

        let onAccept = null;
        let onReject = null;
        let onCancel = null;


        if (typeof options.type === 'string') {
            if (options.type === 'danger') {
                options.type = 'error';
            }

            swalOptions.icon = options.type
        }

        if (options.title) {
            let titleStyles = [];

            if (options.hasOwnProperty('titleColor') && typeof options.titleColor === 'string') {
                titleStyles.push(`color:${options.titleColor}`)
            }

            titleStyles = titleStyles.length > 0 ? 'style="' + titleStyles.join('') + '"' : '';

            swalOptions.html += `<h3${titleStyles}>${options.title}</h3>`;
        }

        if (options.content) {
            swalOptions.html += options.content;
        }

        if (options.hasOwnProperty('btnAcceptText') && typeof options.btnAcceptText === 'string') {
            swalOptions.showConfirmButton = true;
            swalOptions.confirmButtonText = options.btnAcceptText;
        }

        if (options.hasOwnProperty('btnAcceptColor') && typeof options.btnAcceptColor === 'string') {
            swalOptions.confirmButtonColor = options.btnAcceptColor;
        }

        if (options.hasOwnProperty('btnAcceptEvent')) {
            if (typeof options.btnAcceptEvent === 'function') {
                onAccept = options.btnAcceptEvent;

            } else if (typeof options.btnAcceptEvent === 'string') {
                let func = alertUtils.getFunctionByName(options.btnAcceptEvent);

                if (typeof func === 'function') {
                    onAccept = func;
                }
            }
        }


        if (options.hasOwnProperty('btnRejectText') && typeof options.btnRejectText === 'string') {
            swalOptions.showDenyButton = true;
            swalOptions.denyButtonText = options.btnRejectText;
        }

        if (options.hasOwnProperty('btnRejectColor') && typeof options.btnRejectColor === 'string') {
            swalOptions.denyButtonColor = options.btnRejectColor;
        }

        if (options.hasOwnProperty('btnRejectEvent')) {
            if (typeof options.btnRejectEvent === 'function') {
                onReject = options.btnRejectEvent;

            } else if (typeof options.btnRejectEvent === 'string') {
                let func = alertUtils.getFunctionByName(options.btnRejectEvent);

                if (typeof func === 'function') {
                    onReject = func;
                }
            }
        }


        if (options.hasOwnProperty('btnCancelText') && typeof options.btnCancelText === 'string') {
            swalOptions.showCancelButton = true;
            swalOptions.cancelButtonText = options.btnCancelText;
        }

        if (options.hasOwnProperty('btnCancelColor') && typeof options.btnCancelColor === 'string') {
            swalOptions.cancelButtonColor = options.btnCancelColor;
        }

        if (options.hasOwnProperty('btnCancelEvent')) {
            if (typeof options.btnCancelEvent === 'function') {
                onCancel = options.btnCancelEvent;

            } else if (typeof options.btnCancelEvent === 'string') {
                let func = alertUtils.getFunctionByName(options.btnCancelEvent);

                if (typeof func === 'function') {
                    onCancel = func;
                }
            }
        }


        Swal.fire(swalOptions)
            .then(function (result) {
                if (result.isConfirmed) {
                    if (typeof onAccept === "function") {
                        onAccept();
                    }

                } else if (result.isDenied) {
                    if (typeof onReject === "function") {
                        onReject();
                    }

                } else {
                    if (typeof onCancel === "function") {
                        onCancel();
                    }
                }
            });
    },
}

export default alert;