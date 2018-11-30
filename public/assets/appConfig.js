var serviceBaseUrl = window.location.origin;
// Set it to your Twilio Runtime domain:
// serviceBaseUrl = "https://somedomain.twil.io";

// set your account sid here
var accountSid = "ACd9cd910494b0f6bcdbbbef747f80ca9f";


var appConfig = {
  // Uncomment the following lines to enable automatic log in
 
  serviceBaseUrl: serviceBaseUrl  + "/",
  sso: {
  accountSid: accountSid
  }
}
