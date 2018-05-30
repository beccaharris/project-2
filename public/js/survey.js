$(document).ready(function() {
  // jQuery references to survey elements //
  var surveyName      = $('#survey-name'),
      surveyActivity  = $('#survey-activity'),
      surveyBarking   = $('#survey-barking'),
      surveyKids      = $('#survey-kids'),
      surveyDogs      = $('#survey-dogs'),
      surveyTraining  = $('#survey-training'),
      surveyShedding  = $('#survey-shedding'),
      surveySize      = $('#survey-size'),
      surveyAllergies = $('#survey-allergies');
  
  $('#survey-submit').on('click', function(event) {
    event.preventDefault

      // == Form validation == //
      function validate() {
        var isValid = true;
        $(".form-control").each(function () {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".chosen-select").each(function () {
          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }
      if (validate()) {
        var newSurvey = {
          name           : surveyName.val().trim(),
          activity_level : surveyActivity.val(),
          barking_level  : surveyBarking.val(),
          good_with_kids : surveyKids.val(),
          good_with_dogs : surveyDogs.val(),
          trainability   : surveyTraining.val(),
          shedding       : surveyShedding.val(),
          size           : surveySize.val(),
          hypoallergenic : surveyAllergies.val(),
        }
        submitSurvey(newSurvey)
      }
  })

  function submitSurvey(survey) {
    $.post('/api/survey/', survey, function() {
      window.location.href = '/result'
    })
  }

})