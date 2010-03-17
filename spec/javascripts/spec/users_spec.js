describe('clicking on a username', function() {
  it('expands the user details', function() {
    spec.loadFixture('users-index');
    var $link = $('a:first');
    expect($link).toExist();
    var $details = $link.closest('.user').find('.details');

    expect($details).toNotBeVisible();
    $link.click();
    expect($details).toBeVisible();
  });
});