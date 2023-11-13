
// Important: Change cookie security to secure=true after testing

// Error: A cookie associated with a cross-site resource at https://mca-xdomain.s3.us-east-2.amazonaws.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.

var muid;
var mpid;
var mp_first_name;
var mp_last_name;
var mp_email;
var mp_phone;
var mp_region;

function identify(){

    var xd_cookie = xDomainCookie('//mca-xdomain.s3.us-east-2.amazonaws.com', "icc.moncel", true, 15000, false);

	xd_cookie.get('muid',function(cookie_val){

		if(!cookie_val){

            var uuid = UUID.generate();
            muid = uuid.toUpperCase();
            xd_cookie.set( 'muid', muid, 2000 );
            mixpanelIdentify(muid);
            //customerioIdentify(muid);
		}
        else {
            muid = cookie_val;
            mixpanelIdentify(muid);
            //customerioIdentify(muid);
            if(muid) {$('#muid_display').attr('value',muid);}
        }
    });

}

function getMixpanelValues(callback){

    mixpanel.init('e38e1b7cab7c281b994f1d6a3861ef4e', {
    loaded: function() {

        mpid = mixpanel.get_distinct_id();
        mp_first_name = mixpanel.get_property('first_name');
        mp_last_name = mixpanel.get_property('last_name');
        mp_email = mixpanel.get_property('email');
        mp_phone = mixpanel.get_property('phone');
        mp_region = mixpanel.get_property('$region');

        callback();
    }});
};

function printValues(){

    if(muid) {$('#muid_display').attr('value',muid);}
    if(mpid) {$('#mpid_display').attr('value',mpid);}
    if(mp_first_name) {$('#first_name_display').attr('value',mp_first_name);}
    if(mp_last_name) {$('#last_name_display').attr('value',mp_last_name);}
    if(mp_email) {$('#email_display').attr('value',mp_email);}
    if(mp_phone) {$('#phone_display').attr('value',mp_phone);}
    if(mp_region) {$('#region_display').attr('value',mp_region);}

};

function mixpanelIdentify(val) {

    mixpanel.identify(val);
}

function mixpanelRegister(firstName,lastName,email,phone) {

    if(firstName) {
        mixpanel.register({'first_name': firstName});
        console.log("First Name ": firstName);
    }

}

function customerioIdentify(val) {

    _cio.identify({
       // Required attributes
       id: val           // Unique id for the currently signed in user in your application.

       // Strongly recommended attributes
       //email: 'user@domain.com', // Email of the currently signed in user.
       //created_at: 1339438758,   // Timestamp in your system that represents when
                                 // the user first signed up. You'll want to send it
                                 // as seconds since the epoch.

       // Example attributes (you can name attributes what you wish)
       //first_name: 'John',       // Add any attributes you'd like to use in the email subject or body.
       //last_name: 'Smith',       // First name and last name are shown on people pages.
       //plan_name: 'premium'      // To use the example segments, set this to 'free' or 'premium'.
     });

}
