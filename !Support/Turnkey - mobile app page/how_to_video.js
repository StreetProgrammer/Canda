$(function () {
  var video = $('#_how_to_video_modal #_how_to_video');
  var v = {
    'Edit Ad': 'HOW_TO_EDIT_AN_AD-revised',
    'Create Ad': 'HOW_TO_CREATE_AD',
    'Add Part Listing': 'HOW_TO_ADD_PART_LISTING',
    'Edit Part Listing': 'HOW_TO_EDIT_A_PARTS_LISTING',
  };
  $('.section_8 ul li').on('click', function () {
    var ttl = $(this).find('h5').text();
    const videoSrc = '/site-uploads/1001315/videos/' + v[ttl] + '.mp4';
    console.log({ ttl });
    $('#_how_to_video_modal').modal();
    $('#_how_to_video_modal .modal-header h4').text(ttl);

    video.find('source').attr('src', videoSrc);
    video.attr('src', videoSrc);
    video.trigger('play');
  });

  $('#_how_to_video_modal').on('hidden.bs.modal', function () {
    video.trigger('pause');
  });
});
