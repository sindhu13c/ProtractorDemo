var data=require(process.cwd()+'/src/utility/MultiformData.json')
var profile=require(process.cwd()+'/src/pages/ProfilePage.js')
describe('Mutliform e2e automation',function(){
	it('e2e flow',function(){
		browser.get(data.url);
		profile.enterId(data.name);
		profile.enterEmail(data.email);
		var interest=profile.clickNext();
		
		interest.selectRadio(1);
		var payment=interest.clickNext();
		payment.clickNext();
		payment.acceptAlert();
		
		browser.sleep(4000);
	});
});