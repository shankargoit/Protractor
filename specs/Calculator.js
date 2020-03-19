let homepage=require('../pages/homepage');

describe('this is suite for cal',function(){

it('this is addition of calc',function(){

    homepage.getBrowser('https://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber('5');
    homepage.enterSecondNumber('5');
    homepage.clickOnGoButton();
    homepage.verifytheOutput('10');

});


it('this is addition2 of calc',function(){

    homepage.getBrowser('https://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber('5');
    homepage.enterSecondNumber('5');
    homepage.clickOnGoButton();
    homepage.verifytheOutput('10');

});



it('this is addition3 of calc',function(){

    homepage.getBrowser('https://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber('5');
    homepage.enterSecondNumber('5');
    homepage.clickOnGoButton1();
    homepage.verifytheOutput('10');

});

it('this is addition4 of calc',function(){

    homepage.getBrowser('https://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber('5');
    homepage.enterSecondNumber('5');
    homepage.clickOnGoButton1();
    homepage.verifytheOutput('10');

});

it('this is addition5 of calc',function(){

    homepage.getBrowser('https://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber('5');
    homepage.enterSecondNumber('5');
    homepage.clickOnGoButton1();
    homepage.verifytheOutput('10');

});

it('this is addition6 of calc',function(){

    homepage.getBrowser('https://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber('5');
    homepage.enterSecondNumber('5');
    homepage.clickOnGoButton();
    homepage.verifytheOutput('10');

});


});