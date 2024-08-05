chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const url = 'https://g.co/kgs/N5LD8FH';
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const exchangeRatesElement = document.getElementById('exchange-rates');
        exchangeRatesElement.innerHTML = data; 
      })
      .catch(error => {
        console.error('Error converting exchange rates:', error);
      });
  });