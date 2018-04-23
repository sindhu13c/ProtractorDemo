var Interest=function() {
	var radioOptions=element.all(by.model('formData.type'));
	var next=element(by.partialLinkText('Next'));
	
	this.selectRadio=function(index){
		radioOptions.get(index).click();
		return this;
	}
	
	this.clickNext=function()
	{
		next.click();
		return require('./PaymentPage.js');
	}
}
module.exports=new Interest();