var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('webdriver.io page', function() {
  it('should have the right title - the fancy generator way', function () {
    browser.url('http://webdriver.io');
    var title = browser.getTitle();
    assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
  });
});

describe('hello page', function() {
  it('should say hello', function () {
    browser.url('http://localhost:8080/hello');
    assert(browser.isVisible('.hello h1'));
    console.log('**********',browser.element('.hello h1').getText());
    console.log('**********',browser.getText('.hello h1'));
    assert.equal(browser.getText('.hello h1'),'hello');
    assert.equal(browser.element('.hello h1').getText(),'hello');
    expect($('.hello h1').getText()).to.equal('hello')

  });
});
