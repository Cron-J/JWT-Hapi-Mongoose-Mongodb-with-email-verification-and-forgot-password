Hapi-Mongoose-JWT( Json Web Token) Example with some advance Features
======================================================================

The purpose of this app is to show a new way to work with JWT, Hapi.js, Mongodb, Mongoose with advance features such as verify accound using email and reset password. [Cronj] (http://cronj.com/)

It’s highly recommended to look into [blog post] (http://cronj.com/blog/token-based-auth-system-using-jwt-in-hapi-js/) for better understanding.

If you are new to node.js or hapi.js then please refer [Hapi-Mongoose-Angular-Node.js] (http://cronj.com/blog/hapi-mongoose/) [repo](https://github.com/Cron-J/Hapi-Mongoose-Angular-Node.js)


### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ node install

###### *Install bower components*

client/src/ bower install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after sucessfull run

You can change the settings in server/config/config.js file

Change email id in server/config/config.js which will be used to send account credential when new account is created. 

### *User Story*

	1. Register new user. Registration requires a valid user email address which will be his user name and password.

	2. One email address can be registered only once.

	3. After registration a verification link is send to user email address.

	4. Verify your account by clicking on link send to your email address and on successful verification you will be redirected to login page.

	5. If you are not verified your account after creation, you will not be allowed to land to dashboard after success login.

	6. You can only go to dashboard if your account is verified.

	7. Will have the option to resend the password to registered email address in case you forget.

	8. Will also have the option to resend verification link to registered email address to verify account.


### *API Available*

###### *Create User*

	POST: http://localhost:8000/user

	{
	"userName": "email@domain.com",
	"password": "cronj"
	}

An email is send to email@domain.com to verify account created. Email contains a verification link which on click will verify your account and redirect to login page.

Verification Link will look like http://127.0.0.1:8000/verifyEmail/token, where verifyEmail is the url for login page and token you get is used to verify account. Using token you get you need to hit the below api

###### *Verify User*

	POST: http://localhost:8000/verifyEmail

	Authorization Header: Bearer token

###### *Resend Verification Email*

	POST: http://localhost:8000/resendVerificationEmail

	{
	"userName": "email@domain.com",
	"password": "cronj"
	}

###### *User Login*

	POST: http://localhost:8000/login
      
    {
	"userName": "email@domain.com",
	"password": "cronj"
	}

###### *Forgot Password*

	POST: http://localhost:8000/forgotPassword

    {
	"userName": "email@domain.com"
	}

### Other Usefull Link

[Visit Blog For Explanation] (http://cronj.com/blog/token-based-auth-system-using-jwt-in-hapi-js/)

[Hapi-Mongoose-Angular-Node.js] (http://cronj.com/blog/hapi-mongoose/) [repo](https://github.com/Cron-J/Hapi-Mongoose-Angular-Node.js)

[Can also look into Hapi File Upload And Download for all type] (https://github.com/Cron-J/Hapi-file-upload-download)

[Express-Mongoose-Angular] (https://github.com/Cron-J/Express-file-upload-download)

[Hapi-Mongoose-Angular] (https://github.com/Cron-J/Hapi-Mongoose-Angular-Node.js)





