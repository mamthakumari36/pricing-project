const button = document.querySelector('.toggle-btn')
const div = button.querySelector('div')

const annual = document.querySelector('.card-layout.annually')
const monthly = document.querySelector('.card-layout.monthly')

function toggle() {
    div.classList.toggle('left')
    div.classList.toggle('right')

    const isMonthly = div.classList.contains('right')

    annual.classList.toggle('hidden', isMonthly)
    monthly.classList.toggle('hidden', !isMonthly)
}