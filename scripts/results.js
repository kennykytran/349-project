
window.addEventListener('load', function (event) {
    var elementForm = document.querySelector('form');
    elementForm.addEventListener('submit', function (event) {
      var scores = {};
      var elementFeedbacks = elementForm.querySelectorAll('[data-result]');
      for (var i = 0; i < elementFeedbacks.length; i++) {
        var elementFeedback = elementFeedbacks[i];
        var feedbackResult = elementFeedback.getAttribute('data-result');
        scores[feedbackResult] = 0;
      }
  
      var elementAnswers = elementForm.querySelectorAll('input[type="radio"]');
      for (var i = 0; i < elementAnswers.length; i++) {
        // Skip unchecked options
        var elementAnswer = elementAnswers[i];
        if (!elementAnswer.checked) {
          continue;
        }
  
        //Check for invalid values
        var value = elementAnswer.value;
        if (typeof scores[value] === 'undefined') {
          console.error('Skipped, invalid value:', value);
          continue;
        }
  
        //Add to score
        scores[value]++;
      }
  
      // Find the maximum score
      var highest = 0;
      var result = '';
      for (var answer in scores) { //looks through all scores
        var score = scores[answer];
        if (score > highest) {
          highest = score;
          result = answer;
        }
      }
  
      // Show the feedback & hide submit button
      var resultChange = elementForm.querySelector('[data-result="' + result + '"]');
      resultChange.classList.remove('gone');
      var feedbackChange = elementForm.querySelector('.feedback');
      feedbackChange.classList.remove('gone');
      var submitChange = elementForm.querySelector('.done');
      submitChange.classList.add('gone');
  
      event.preventDefault();
      event.stopPropagation();
    });
  });