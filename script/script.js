document.addEventListener('DOMContentLoaded', function() {

    let id_advice = document.getElementById('advice_id');
    let text_advice = document.getElementById('advice_text');
    let icon_dice = document.getElementById('icon_dice');
  
    // Function to get new advice from apiUrl
    function getNewAdvice() {
      let apiUrl = "https://api.adviceslip.com/advice";
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network error');
          } else {
            return response.json();
          }
        })
        .then(data => { // if data returned display id and text 
          id_advice.textContent = `Advice #${data.slip.id}`;
          text_advice.textContent = `"${data.slip.advice}"`;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
    // Add event listener to icon-dice to get new advice
    icon_dice.addEventListener('click', getNewAdvice);
  });