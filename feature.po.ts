import { browser , by , element } from "protractor";
import { protractor } from "protractor/built/ptor";




//export classSignUp(){
    //1. We have to fill the credentials of add account
    describe ('Signup test',function(){

        it('Add account details', function(){

        browser.get('http://cloudapp.fleethawks.com/#/onboard');

let heading = element(by.class('text-dark font-weight-bold'));

let name = element(by.name('firstName')).sendkeys('rashi');
let bname = element(by.name('carrierBusinessName')).sendKeys('mahajan');
let lname = element(by.class('lasttName')).sendKeys('sethi');
let email = element(by.class('email')).sendKeys('mahajanrashmi526@gmail.com');
let phone = element(by.class('phone')).sendKeys('7674563456')

// 2. when test is pass

expect(heading).toEqual ('text-dark font-weight-bold');
expect(name).toEqual ('rashi');
expect(bname).toEqual ('mahajan');
expect(lname).toEqual ('sethi');
expect(email).toEqual('mahajanrashmi526@gmail.com');
expect(phone).toEqual('7674563456');

//3. when test case is fail 
expect(heading).toEqual ('text- light font-weight-bold');
expect(name).toEqual ('abc');
expect(bname).toEqual ('rashi');
expect(lname).toEqual ('cde');
expect(email).toEqual('mahajanrashmi526gmail.com');
expect(phone).toEqual('763456');

// 4. username fields

let Username = element(by.name('username')).sendkeys('rashi');
let password = element(by.name('password')).sendkeys('989');
let Cpassword = element(by.name('password')).sendkeys('989');

//5. when cases are pass
expect(Username).toEqual ('rashi');
expect(password).toEqual ('989');
expect(Cpassword).toEqual ('989');

//6. When cases are fail 
expect(Username).toEqual ('avc');
expect(password).toEqual ('9989');
expect(Cpassword).toEqual ('9989');

//7. buttons 
it ('check buttons', function(){
element(by.class('btn btn-default mr-1')).click();
element(by.class('btn btn-success')).click();


        });





    });
   



});




