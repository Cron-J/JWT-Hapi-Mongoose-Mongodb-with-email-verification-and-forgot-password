Hapi-Mongoose-JWT( Json Web Token) Example with some advance Features
======================================================================

The purpose of this app is to show a new way to work with JWT, Hapi.js, Mongodb, Mongoose with advance features such as verify accound using email and reset password.


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

[Visit Blog For Explanation] (http://cronj.com/blog/hapi-mongoose/)

[Can also look into Hapi File Upload And Download for all type] (https://github.com/Cron-J/Hapi-file-upload-download)

[Express-Mongoose-Angular] (https://github.com/Cron-J/Express-file-upload-download)

[Hapi-Mongoose-Angular] (https://github.com/Cron-J/Hapi-Mongoose-Angular-Node.js)



