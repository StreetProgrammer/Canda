$(function () {
  $('label[for="InputFieldB"]').text('Choose your ride');
  $('label[for="fitementMake"]').text('Distance');
  $('label[for="InputFieldD"]').text('Province');
  $('#fitementYear').parent('.fitment-drop').hide();
  $('body').on('change', function () {
    $('#fitementYear').val($('#fitementYear option:nth-child(2)').val());
    if ($('#fitementYear').val() > 0) {
      $('#fitmentSearch').length && $('#fitmentSearch').prop('disabled', false);
      $('#customFitmentSearch').length &&
        $('#customFitmentSearch').prop('disabled', false);
    }
  });
});
