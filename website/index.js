// Visit Counter
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://uku4cptppsjacfiob2cnu6wlu40yxhqp.lambda-url.eu-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Website views: ${data}`;
}

updateCounter();