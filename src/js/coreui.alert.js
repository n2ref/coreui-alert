
import coreuiAlertUtils    from './coreui.alert.utils';
import coreuiAlertInstance from './coreui.alert.instance';


let coreuiAlert = {

    _instance: null,

    /**
     * @param {string} title
     * @param {string} message
     * @param {object} options
     */
    default: function (title, message, options) {

        options = coreuiAlertUtils.isObject(options) ? options : {};
        options.title   = typeof title === 'string' ? title : null;
        options.message = typeof message === 'string' ? message : null;

        return this.create(options);
    },


    /**
     @param {string} title
     @param {string} message
     @param {object} options
     */
    warning: function (title, message, options) {

        options = coreuiAlertUtils.isObject(options) ? options : {};
        options.type    = 'warning';
        options.title   = typeof title === 'string' ? title : null;
        options.message = typeof message === 'string' ? message : null;

        this.create(options);
    },


    /**
     @param {string} title
     @param {string} message
     @param {object} options
     */
    question: function (title, message, options) {

        options = coreuiAlertUtils.isObject(options) ? options : {};
        options.type    = 'question';
        options.title   = typeof title === 'string' ? title : null;
        options.message = typeof message === 'string' ? message : null;

        this.create(options);
    },


    /**
     @param {string} title
     @param {string} message
     @param {object} options
     */
    info: function (title, message, options) {

        options = coreuiAlertUtils.isObject(options) ? options : {};
        options.type    = 'info';
        options.title   = typeof title === 'string' ? title : null;
        options.message = typeof message === 'string' ? message : null;

        this.create(options);
    },


    /**
     @param {string} title
     @param {string} message
     @param {object} options
     */
    success: function (title, message, options) {

        options = coreuiAlertUtils.isObject(options) ? options : {};
        options.type    = 'success';
        options.title   = typeof title === 'string' ? title : null;
        options.message = typeof message === 'string' ? message : null;

        this.create(options);
    },


    /**
     @param {string} title
     @param {string} message
     @param {object} options
     */
    danger: function (title, message, options) {

        options = coreuiAlertUtils.isObject(options) ? options : {};
        options.type    = 'danger';
        options.title   = typeof title === 'string' ? title : null;
        options.message = typeof message === 'string' ? message : null;

        this.create(options);
    },


    /**
     * @param {object} options
     * @returns {object}
     */
    create: function(options) {

        let alertOptions = $.extend(true, {
            type: 'default',
            title: null,
            message: null,
            html: null,
            showClose: true,
            buttons: []
        }, options);

        alertOptions.type    = typeof options.type === 'string' ? options.type : null;
        alertOptions.title   = typeof options.title === 'string' ? options.title : null;
        alertOptions.message = typeof options.message === 'string' ? options.message : null;
        alertOptions.html    = typeof options.html === 'string' ? options.html : null;


        if (this._instance && $(this._instance._container).is(':visible')) {
            this._instance.hide(true);
        }


        let instance = $.extend(true, {}, coreuiAlertInstance);
        instance._init(alertOptions);

        instance.show();

        this._instance = instance;

        return instance;
    }
}

export default coreuiAlert;