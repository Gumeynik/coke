const form = document.querySelector('#form');
const input = document.querySelector('#input');
const result = document.querySelector('#result');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    calculation();
});

function calculation() {
    if (input.value <= 0 || isNaN(input.value)) {
        console.log(123);
        return;
    }
    result.innerHTML = `${input.value * 100} грамм сахара.`;
    input.value='';
}