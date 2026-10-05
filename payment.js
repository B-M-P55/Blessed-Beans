// Basic interaction (optional validation)

document.querySelectorAll('.btn')[0].addEventListener('click', () => {
  alert('Information saved!');
});

document.querySelectorAll('.btn')[1].addEventListener('click', () => {
  const payment = document.querySelector('input[name="payment"]:checked');

  if (!payment) {
    alert('Please select a payment method!');
    return;
  }

  alert('Order placed successfully!');
});