// document.addEventListener('DOMContentLoaded', function() {
//     const currentPage = window.location.pathname.split('/').pop() || 'index.html';
//     const links = document.querySelectorAll('.navigation__link');

//     links.forEach(link => {
//         const href = link.getAttribute('href');
//         if (href === currentPage) {
//             link.classList.add('active');
//         }
//     });
// });

//--- Бургер меню

const toggle = document.getElementById('burger-toggle');
const links = document.querySelectorAll('.navigation__link');

links.forEach(link => {
    link.addEventListener('click', () => {
        toggle.checked = false;
    });
});

//--- Ползунок

const minInput = document.querySelector('.range-slider__input--min');
const maxInput = document.querySelector('.range-slider__input--max');
const fill = document.querySelector('.range-slider__fill');
const minLabel = document.querySelector('.range-slider__value--min');
const maxLabel = document.querySelector('.range-slider__value--max');
const track = document.querySelector('.range-slider__track');

function updateRange() {
    const min = Number(minInput.value);
    const max = Number(maxInput.value);
    const total = Number(maxInput.max);

    // Обновляем зелёную полоску
    const leftPercent = (min / total) * 100;
    const rightPercent = 100 - (max / total) * 100;
    fill.style.left = leftPercent + '%';
    fill.style.right = rightPercent + '%';

    // Обновляем текст
    minLabel.textContent = '$' + Number(min).toLocaleString();
    maxLabel.textContent = '$' + Number(max).toLocaleString();

    // Двигаем значения под бегунками
    const trackWidth = track.offsetWidth;
    const minPos = (min / total) * trackWidth;
    const maxPos = (max / total) * trackWidth;

    // Позиция лейблов (от левого края)
    minLabel.style.left = (min / total) * 100 + '%';
    maxLabel.style.left = (max / total) * 100 + '%';

}

minInput.addEventListener('input', updateRange);
maxInput.addEventListener('input', updateRange);
updateRange();

