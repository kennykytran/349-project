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

(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    // var SERVER_URL = 'http://co.audstanley.com/coffeeorders';
    // var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var FIREBASE_SERVER_URL = 'http://coffeerun-56c9b.firebaseapp.com';

    var App = window.App;
    var Truck = App.Truck;
    // var DataStore = App.DataStore;
    // var RemoteDataStore = App.RemoteDataStore;
    // var FirebaseConfig = App.FirebaseConfig;
    var FirebaseDataStore = App.FirebaseDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;

    // var datastore = new DataStore();
    // var datastore = new RemoteDataStore(SERVER_URL);
    var datastore = new FirebaseDataStore(FIREBASE_SERVER_URL);
    var truck = new Truck('ncc-1705', datastore);
    window.truck = truck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        return truck.createOrder.call(truck, data)
            .then(function() {
                checkList.addRow.call(checkList, data);
            },
            function() { 
                alert('Server unreachable. Try again later.');
            });
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);

    truck.printOrders(checkList.addRow.bind(checkList));

    console.log(formHandler);
})(window);