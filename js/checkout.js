// $(function () {
// this waits for jquery and html to load.
// before, running all the code.
// until react all code livs in this.
console.log('Checkout Loaded.');


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
// })
