
import '../../node_modules/ejs/ejs.min';
import coreuiAlertUtils   from './coreui.alert.utils';
import coreuiAlertPrivate from './coreui.alert.private';
import coreuiAlertTpl     from './coreui.alert.templates';

let coreuiAlertInstance = {

    _options: {
        type: null,
        showClose: true,
        title: null,
        message: null,
        html: null,
        onShow: null,
        onHide: null,
        buttons: null,
    },

    _buttons : [],
    _container : null,


    /**
     *
     * @param {object} options
     */
    _init: function (options) {

        this._options = $.extend(true, {}, this._options, options);

        // Инициализация контролов
        if (this._options.hasOwnProperty('buttons') &&
            Array.isArray(this._options.buttons) &&
            this._options.buttons.length > 0
        ) {
            coreuiAlertPrivate.initButtons(this, this._options.buttons);
        }
    },


    /**
     * Открытие
     */
    show: function () {

        let that = this;

        this._container = $(
            ejs.render(coreuiAlertTpl['container.html'], {
                type: that._options.type,
                showClose: that._options.showClose,
                title: that._options.title,
                message: that._options.message,
                html: that._options.html,
                buttons: that._buttons,
            })
        );

        let body = $('body');

        body.append(this._container);
        body.addClass('coreui_alert__show');

        if ($(window).height() < body.height()) {
            body.css('padding-right', coreuiAlertUtils.getScrollbarWidth());
        }


        this._container.click(function (e) {
            if ($(e.target).hasClass('coreui_alert__container')) {
                that.hide();
            }
        });
        $('.coreui_alert__close', this._container).click(function (e) {
            that.hide();
        });

        if (Array.isArray(that._buttons) && that._buttons.length > 0) {
            $.each(that._buttons, function (key, button) {
                if (typeof button.click === 'function') {
                    $('.btn-' + button.id, that._container).click(function () {
                        button.click.apply(that);
                    });
                }
            });
        }

        if (typeof this._options.onShow === 'function') {
            this._options.onShow.apply(this);
        }
    },


    /**
     * Закрытие
     * @param {bool} immediately
     */
    hide: function (immediately) {

        let that = this;

        let elementRemove = function () {
            $(that._container).remove()

            if (typeof that._options.onHide === 'function') {
                that._options.onHide.apply(that);
            }

            let body = $('body')
                .removeClass('coreui_alert__show')
                .css('padding-right', '');

            if (body.attr('style') === '') {
                body.removeAttr('style');
            }
            if (body.attr('class') === '') {
                body.removeAttr('class');
            }
        }

        if (this._container) {
            if (immediately) {
                elementRemove();

            } else {
                $(this._container)
                    .addClass('coreui_alert__animate')
                    .addClass('coreui_alert__animate_fadeOut');

                $(this._container).find('.coreui_alert__modal')
                    .removeClass('coreui_alert__animate_zoomIn')
                    .addClass('coreui_alert__animate_fadeOut');

                setTimeout(function () {
                    elementRemove();
                }, 170);
            }
        }
    }
}

export default coreuiAlertInstance;