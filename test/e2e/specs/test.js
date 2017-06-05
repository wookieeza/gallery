var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('hello page', function() {
  it('should say we\'ve gpt this', function () {
    browser.url('http://localhost:8080/#/hello');
    browser.waitForVisible('.hello h1');
    assert(browser.isVisible('.hello h1'));
    console.log('**********',browser.element('.hello h1').getText());
    console.log('**********',browser.getText('.hello h1'));
    assert.equal(browser.getText('.hello h1'),'We\'ve got this!');
    assert.equal(browser.element('.hello h1').getText(),'We\'ve got this!');
    expect($('.hello h1').getText()).to.equal('We\'ve got this!')
  });
});
