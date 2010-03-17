beforeEach(function() {
  $('#jasmine_content').empty();
  spec.clearLiveEventBindings();
  jasmine.Clock.useMock();
});

afterEach(function() {
  spec.clearLiveEventBindings();
  expect(spec.loadFixtureCount).toBeLessThan(2);
  spec.loadFixtureCount = 0;
});

var context = describe;
var spec = {};

spec.clearLiveEventBindings = function() {
  var events = jQuery.data(document, "events");
  for (prop in events) {
    delete events[prop];
  }
};

spec.content = function() {
  return $('#jasmine_content');
};

