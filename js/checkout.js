
console.log('Checkout Loaded.');

const checkoutButton = document.querySelector("#submitCheckout");
checkoutButton.addEventListener('click', handleSubmitCheckout)
function handleSubmitCheckout() {
    const confirmDiv = `
    <div class="col-md-12 checkout-lines">
    Order submitted, thank you!
    </div>
    <div class="col-md-12 checkout-lines">
    How did we place your order without a credit card?
    </div>
    <div class="col-md-12 checkout-lines">
    That's for us to know, and for you to not recieve your product, 
    <span style="font-weight: bold;">
    THANKS!!
    </span>
    </div>`
    document.querySelector('#checkoutRow').innerHTML = confirmDiv
    console.log('firing')
}

document.querySelector('#copy-info-button').addEventListener('click', (e) => {

    const billingFirstName = document.querySelector('#billingFirstName');
    const billingLastName = document.querySelector('#billingLastName');
    const billingAddress = document.querySelector("#billingAddress");
    const billingCity = document.querySelector('#billingCity');
    const billingState = document.querySelector('#billingState');
    const billingZip = document.querySelector('#billingZip');

    const shippingFirstName = document.querySelector("#shippingFirstName");
    const shippingLastName = document.querySelector('#shippingLastName');
    const shippingAddress = document.querySelector('#shippingAddress');
    const shippingCity = document.querySelector('#shippingCity');
    const shippingState = document.querySelector('#shippingState');
    const shippingZip = document.querySelector('#shippingZip');

    shippingFirstName.value = `${billingFirstName.value}`
    shippingLastName.value = `${billingLastName.value}`
    shippingAddress.value = `${billingAddress.value}`
    shippingCity.value = `${billingCity.value}`
    shippingState.value = `${billingState.value}`
    shippingZip.value = `${billingZip.value}`

});

