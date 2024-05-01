
import coreuiAlertUtils from './coreui.alert.utils';

let coreuiAlertPrivate = {

    /**
     * Инициализация кнопок
     * @param {Object} alert
     * @param {Array}  buttons
     * @private
     */
    initButtons: function (alert, buttons) {

        $.each(buttons, function (key, button) {

            if (coreuiAlertUtils.isObject(button) && typeof button.text === 'string') {
                let id = button.hasOwnProperty('id') && typeof button.id === 'string' && button.id
                    ? button.id
                    : coreuiAlertUtils.hashCode();

                let type = typeof button.type === 'string'
                    ? button.type
                    : 'secondary';

                let event = null;

                if (typeof button.click === 'function') {
                    event = function () {
                        button.click()
                        this.hide();
                    }

                } else if (typeof button.click === 'string') {
                    event = function () {
                        (new Function(button.click))()
                        this.hide();
                    }
                }

                alert._buttons.push({
                    id: id,
                    text: button.text,
                    type: type,
                    click: event
                });
            }
        });
    }
}


export default coreuiAlertPrivate;