

// Loads fixure markup into the DOM as a child of the jasmine_content div
spec.loadFixture = function(fixtureName) {
  var $destination = $('#jasmine_content');

  // get the markup, inject it into the dom
  $destination.html(spec.fixtureHtml(fixtureName));

  // keep track of fixture count to fail specs that
  // call loadFixture() more than once
  spec.loadFixtureCount++;
};

// Returns fixture markup as a string. Useful for fixtures that
// represent the response text of ajax requests.
spec.readFixture = function(fixtureName) {
  return spec.fixtureHtml(fixtureName);
};

spec.fixtureHtml = function(fixtureName) {
  if (!spec.cachedFixtures[fixtureName]) {
    spec.cachedFixtures[fixtureName] = spec.retrieveFixture(fixtureName);
  }
  return spec.cachedFixtures[fixtureName];
};

spec.retrieveFixture = function(fixtureName) {

  // construct a path to the fixture, including a cache-busting timestamp
  var path = '/tmp/js_dom_fixtures/' + fixtureName + ".fixture.html.erb?" + new Date().getTime();
  var xhr;

  // retrieve the fixture markup via xhr request to jasmine server
  try {
    xhr = new jasmine.XmlHttpRequest();
    xhr.open("GET", path, false);
    xhr.send(null);
  } catch(e) {
    throw new Error("couldn't fetch " + path + ": " + e);
  }
  var regExp = new RegExp(/Couldn\\\'t load \/fixture/);
  if (regExp.test(xhr.responseText)) {
    throw new Error("Couldn't load fixture with key: '" + fixtureName + "'. No such file: '" + path + "'.");
  }

  return xhr.responseText;
};

spec.loadFixtureCount = 0;
spec.cachedFixtures = {};
