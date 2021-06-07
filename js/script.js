const code_input = document.querySelector('.code_input');
const description_input = document.querySelector('.description_input');
const quantity_input = document.querySelector('.quantity_input');
const unit_price_input = document.querySelector('.unit_price_input');
const amount_input = document.querySelector('.amount_input');
const gross_total = document.querySelector('.gross_total');
const discount_input = document.querySelector('.discount_input');
const after_discount = document.querySelector('.after_discount');
const sales_tax_input = document.querySelector('.sales_tax_input');
const frieght_input = document.querySelector('.frieght_input');
const grand_total = document.querySelector('.grand_total');

const add_more_btn = document.querySelector('.add_more_btn');

add_more_btn.addEventListener('click', () => {
    const quantity = quantity_input.value;
    const unit_price = unit_price_input.value;
    const discount = discount_input.value;
    const sales_tax = sales_tax_input.value;
    const frieght = frieght_input.value;

    const gross_total_value = quantity * unit_price;
    const after_discount_value = gross_total_value - discount;
    const grand_total_value = after_discount_value - sales_tax - frieght;

    gross_total.innerHTML = gross_total_value + ' $';
    after_discount.innerHTML = after_discount_value + ' $';
    grand_total.innerHTML = grand_total_value + ' $';


})




