document.querySelectorAll('.product-form').forEach(form => {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let quantity = form.querySelector('.quantity').value;
    let product = form.querySelector('.product-name').value;

    let data = {
      product: product,
      quantity: quantity
    };

    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
});