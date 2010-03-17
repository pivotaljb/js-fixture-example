var userPage = {
  init: function() {
    $('a').live('click', userPage.showDetails);
  },

  showDetails: function(e) {
    e.preventDefault();
    $(this).closest('.user').find('.details').show();
  }
};

