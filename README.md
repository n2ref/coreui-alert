# CoreUI Alert

**[DEMO](https://shabuninil.github.io/coreui-alert)**

## Install with npm
`$ npm install coreui-alert`

## Example

```html
<button class="btn btn-sm btn-secondary" id="alert-info">Info</button>
<button class="btn btn-sm btn-warning" id="alert-warning">Warning</button>
<button class="btn btn-sm btn-danger" id="alert-danger">Danger</button>
<button class="btn btn-sm btn-success" id="alert-success">Success</button>

<script>
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
</script>
```

Result

![Alert](https://raw.githubusercontent.com/shabuninil/coreui-alert/main/preview.png)
