

// SCRIPT LOAD ORDER
//
// Scripts must be loaded in the correct order:
// 1. Load muid.js to get the MUID from the cookie
// 2. If there is no MUID then create one
// 3. Set MUID as the Unique Identifier for other services
//     - Mixpanel
//     - Fullstory
//     - Intercom
//     - Customer.io
// 4. Add MUID to the order when customer is registered

// /var muid;
//
// document.addEventListener("DOMContentLoaded", function(){

    //var load_xdomain = "//mca-xdomain.s3.us-east-2.amazonaws.com/xdomain_cookie.min.js";
    //var load_uuid = "/assets/js/uuid.js";
    //var load_muid = "/assets/js/muid.js";

    // var load_mixpanel = "/assets/js/mixpanel.js";
    // var load_intercom = "/assets/js/intercom.js";
    // var load_fullstory = "/assets/js/fullstory.js";
    // var load_customerio = "/assets/js/customerio.js";

    //$.getScript(load_xdomain).done(function(){
    //$.getScript(load_uuid).done(function(){
    //$.getScript(load_muid).done(function(){

    // $.getScript(load_mixpanel).done(function(){
    // $.getScript(load_intercom).done(function(){
    // $.getScript(load_fullstory).done(function(){
    // $.getScript(load_customerio).done(function(){

    // }); }); }); }); }); }); });

// });
