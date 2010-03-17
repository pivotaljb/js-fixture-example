jasmine.Matchers.prototype.toBeSameJqueryObjectAs = function(expected) {
  var error_message = null;
  if(!expected || !this.actual || this.actual.length != expected.length) {
    error_message = "Expected to have same number of matching elements";
  } else {
    for(var i = 0; i < expected.length; i++) {
      if (this.actual.get(i) != expected.get(i)) {
        error_message = "Expected the elements to be the same but were not";
        break;
      }
    }
  }
  return this.report(error_message == null, error_message);
};

jasmine.Matchers.prototype.toNotBeSameJqueryObjectAs = function(expected) {
  var error_message = null;
  if(!expected || !this.actual || this.actual.length != expected.length) {
    error_message = "Expected to have same number of matching elements";
  } else {
    for(var i = 0; i < expected.length; i++) {
      if (this.actual.get(i) == expected.get(i)) {
        error_message = "Expected the elements to not be the same but they were";
        break;
      }
    }
  }
  return this.report(error_message == null, error_message);
};

jasmine.Matchers.prototype.toBeCleared = function() {
  var $form = this.actual;
  expect($form).toBeSingleton();
  var $textfields = $form.find('input[type=text]');
  $textfields.each(function() {
    expect($(this).val()).toEqual('');
  });
  var $textareas = $form.find('textarea');
  $textareas.each(function() {
    expect($(this).val()).toEqual('');
  });
};

jasmine.Matchers.prototype.toBeSingleton = function() {
  var $element = this.actual;
  expect($element.length).toEqual(1);
};

jasmine.Matchers.prototype.toContainText = function(expected) {
  var actual = $(this.actual);
  return this.report(
    actual.text().indexOf(expected) != -1,
    "Expected $('" + actual.selector + "') to contain text " + expected
  );
};

jasmine.Matchers.prototype.toNotBeChecked = function() {
  var actual = $(this.actual);
  return this.report(
    !actual.is(':checked'),
    "Expected $('" + actual.selector + "') to not be checked"
  );
};

jasmine.Matchers.prototype.toExist = function() {
  var actual = $(this.actual);
  return this.report(
    actual.length > 0,
    "Expected $('" + actual.selector + "') to exist but didn't"
  );
};

jasmine.Matchers.prototype.toNotExist = function() {
  var actual = $(this.actual);
  return this.report(
    actual.length == 0,
    "Expected $('" + actual.selector + "') to not exist but it did"
  );
};

jasmine.Matchers.prototype.toContainSelector = function(expected) {
  var actual = $(this.actual);
  var children = actual.find(expected);
  return this.report(
    children.length > 0,
    "Expected [" + jasmine.util.htmlEscape(actual.html()) + "] to contain selector [" + $(expected).selector + "] but didn't"
  );
};

jasmine.Matchers.prototype.toNotContainSelector = function(expected) {
  var actual = $(this.actual);
  var children = actual.find(expected);
  return this.report(
    children.length == 0,
    "Expected [" + jasmine.util.htmlEscape(actual.html()) + "] to not contain selector [" + $(expected).selector + "] but it did"
  );
};

jasmine.Matchers.prototype.toBeVisible = function() {
  var actual = $(this.actual);
  var basicMessage = "be visible";
  return this.reportWithNonExistant(
    actual.is(':visible'),
    basicMessage,
    "Expected '" + actual.selector + "' to " + basicMessage + " but was not"
  );
};

jasmine.Matchers.prototype.toNotBeVisible = function() {
  var actual = $(this.actual);
  var basicMessage = "be hidden";
  return this.reportWithNonExistant(
    !actual.is(':visible'),
    basicMessage,
    "Expected '" + actual.selector + "' to " + basicMessage + " but was not"
  );
};

jasmine.Matchers.prototype.toBeEmpty= function() {
  var actual = $(this.actual);
  var basicMessage = "be empty";
  return this.reportWithNonExistant(
    actual.html() == "",
    basicMessage,
    "Expected '" + actual.selector + "' to " + basicMessage + " but was not"
  );
};

jasmine.Matchers.prototype.toNotBeEmpty= function() {
  var actual = $(this.actual);
  var basicMessage = "not be empty";
  return this.reportWithNonExistant(
    actual.html() != "",
    basicMessage,
    "Expected '" + actual.selector + "' to " + basicMessage + " but it was"
  );
};

jasmine.Matchers.prototype.toHaveClass= function(expected) {
  var actual = $(this.actual);
  var basicMessage = "have class " + expected;
  return this.reportWithNonExistant(
    actual.hasClass(expected),
    basicMessage,
    "Expected '" + actual.selector + "' to " + basicMessage + " but does not"
  );
};

jasmine.Matchers.prototype.toNotHaveClass= function(expected) {
  var actual = $(this.actual);
  var basicMessage = "not have class " + expected;
  return this.reportWithNonExistant(
    !actual.hasClass(expected),
    basicMessage,
    "Expected '" + actual.selector + "' to " + basicMessage + " but it does"
  );
};

jasmine.Matchers.prototype.toBeDisabled= function() {
  var actual = $(this.actual);
  var basicMessage = "be disabled";
  return this.reportWithNonExistant(
    actual.is(":disabled"),
    basicMessage,
    "Expected '" + actual.selector + "' to " + basicMessage + " but was not"
  );
};

jasmine.Matchers.prototype.toBeEnabled= function() {
  var actual = $(this.actual);
  var basicMessage = "be enabled";
  return this.reportWithNonExistant(
    actual.is(":enabled"),
    basicMessage,
    "Expected '" + actual.selector + "' to " + basicMessage + " but was not"
  );
};

jasmine.Matchers.prototype.toBeTag= function(tagName) {
  var actual = $(this.actual);
  var basicMessage = "be a tag of type '" + tagName + "'";
  var actualTagName = "your element";
  if(actual.length > 0) {
    actualTagName = actual.get(0).tagName.toLowerCase();
  }
  return this.reportWithNonExistant(
    actual.is(tagName),
    basicMessage,
    "Expected '" + actualTagName + "' to " + basicMessage + " but was not"
  );
};

jasmine.Matchers.prototype.toHaveAttribute= function(attr, value) {
  var actual = $(this.actual);
  var basicMessage = "have attribute '" + attr + "' with value '" + value + "'";
  var actualValue = actual.attr(attr);
  return this.reportWithNonExistant(
    actualValue == value,
    basicMessage,
    "Expected '" + actual.selector + "' to " + basicMessage + " but instead had '" + actualValue + "'"
  );
};

jasmine.Matchers.prototype.reportWithNonExistant = function(test, basicMesage, fullMessage) {
  var actual = $(this.actual);
  if(actual.length > 0) {
    return this.report(
      test,
      fullMessage
    );
  } else {
    return this.report(
      false,
      "Expected '" + actual.selector + "' to "+ basicMesage +" but the element didn't exist."
    );
  }
};
