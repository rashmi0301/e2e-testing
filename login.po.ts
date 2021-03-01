import { browser, by, element } from "protractor";
import { protractor } from "protractor/built/ptor";




export class LoginPage {
   
   navigateToHomePage(){
      return browser.get('/');
   } 


//2. get page title -- It should be Login
getheadingLogin(){
  return element(by.id('loginText')).getText();
} 

//3. Fill the credentials 
Login (username, password){
   const userNameElement = element(by.name ('username'));
   const passwordElement = element(by.name ('pwd'));
   userNameElement.sendKeys('e2etestcarrier');
   passwordElement.sendKeys('FleetHawks@2502');


   // Find button 
   const submnitElememt = element(by.class ('btn btn-primary btn-lg mt-2'));
   submnitElememt.click();

}

}