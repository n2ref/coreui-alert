
import 'ejs/ejs.min';
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

        let alert     = this;
        let container = $(ejs.render(coreuiAlertTpl['container.html'], {
            type: alert._options.type,
            showClose: alert._options.showClose,
            title: alert._options.title,
            message: alert._options.message,
            expandText: alert._options.expandText,
            html: alert._options.html,
            buttons: alert._buttons,
        }));

        let body = $('body');

        body.append(container);
        body.addClass('coreui_alert__show');

        if ($(window).height() < body.height()) {
            body.css('padding-right', coreuiAlertUtils.getScrollbarWidth());
        }


        container.click(function (e) {
            if ($(e.target).hasClass('coreui_alert__container')) {
                alert.hide();
            }
        });
        $('.coreui_alert__close', container).click(function (e) {
            alert.hide();
        });

        $('.coreui_alert__html-expand', container).click(function (e) {
            $('.coreui_alert__html', container).toggle(100);
        });

        if (Array.isArray(alert._buttons) && alert._buttons.length > 0) {
            $.each(alert._buttons, function (key, button) {
                if (typeof button.click === 'function') {
                    $('.btn-' + button.id, container).click(function () {
                        button.click.apply(alert);
                    });
                }
            });
        }

        if (typeof this._options.onShow === 'function') {
            this._options.onShow.apply(this);
        }

        this._container = container;
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