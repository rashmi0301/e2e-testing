import { protractor } from "protractor/built/ptor"

import {browser, by , element} from "protractor"


     let feature =  function () {

        let name = element(by.name('firstName'));
        let bname = element(by.name('carrierBusinessName'));
        let lname = element(by.class('lasttName'));
        let email = element(by.class('email'));
        let phone = element(by.class('phone'));

        // 2. when test is pass

        expect(name).toEqual ('rashi');
        expect(bname).toEqual ('mahajan');
        expect(lname).toEqual ('sethi');
        expect(email).toEqual('mahajanrashmi526@gmail.com');
        expect(phone).toEqual('7674563456');

//3. when test case is fail 

expect(name).toEqual ('abc');
expect(bname).toEqual ('rashi');
expect(lname).toEqual ('cde');
expect(email).toEqual('mahajanrashmi526gmail.com');
expect(phone).toEqual('763456');

// 4. username fields 

let Username = element(by.name('username'));
let password = element(by.name('password'));
let Cpassword = element(by.name('password'));


//5. when cases are pass
expect(Username).toEqual ('rashi');
expect(password).toEqual ('989');
expect(Cpassword).toEqual ('989');

//6. When cases are fail 

expect(Username).toEqual ('avc');
expect(password).toEqual ('9989');
expect(Cpassword).toEqual ('9989');

}