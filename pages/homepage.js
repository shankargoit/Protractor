let homepage=function(){

    let firstNo_input=element(by.model('first'));
    let secondNo_input=element(by.model('second'));
    let gobutton=element(by.id('gobutton'));

    this.getBrowser=function(url){
        browser.get(url);
    };

    this.enterFirstNumber=function(firstno){
        firstNo_input.sendKeys(firstno);
    };

    this.enterSecondNumber=function(secondNo){
        secondNo_input.sendKeys(secondNo);
    };

    this.clickOnGoButton=function(){
        gobutton.click();
    };

    this.verifytheOutput=function(result){
        let output=element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };

};

module.exports = new homepage();