# CoreUI Alert

**[DEMO](https://shabuninil.github.io/coreui-alert)**

## Install with npm
`$ npm install coreui-alert`

## Example

```html
<button id="alert-default" class="btn btn-secondary">Default</button>
<button id="confirm-default" class="btn btn-secondary">Default</button>

<script>
    $('#alert-default').click(function () {
        CoreUI.alert.default("Alert title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });

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
</script>
```

Result

![Alert](https://raw.githubusercontent.com/shabuninil/coreui-alert/main/preview.png)
