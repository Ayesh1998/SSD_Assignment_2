$(document).ready(function(){

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const redirect_uri = "http://192.168.64.2.xip.io/DriveSubmIt/modules/submit.html"; // replace with your redirect_uri;

    const client_secret = "HxtwKpr33ktGhuOFpRQUI6G1"; // replace with your client secret
    const scope = "https://www.googleapis.com/auth/drive";
    var access_token= "";
    var client_id = "34840218804-6tu4spu6a7121pk4gbt09tkbb466ecfa.apps.googleusercontent.com";// replace it with your client id;


    $.ajax({
        type: 'POST',
        url: "https://www.googleapis.com/oauth2/v4/token",
        data: {code:code
            ,redirect_uri:redirect_uri,
            client_secret:client_secret,
            client_id:client_id,
            scope:scope,
            grant_type:"authorization_code"},
        dataType: "json",
        success: function(resultData) {


            localStorage.setItem("accessToken",resultData.access_token);
            localStorage.setItem("refreshToken",resultData.refreshToken);
            localStorage.setItem("expires_in",resultData.expires_in);
            // window.history.pushState({}, document.title, "/DriveSubmIt/modules/" + "submit.html");

            window.history.pushState({}, document.title, "" + "submit.html");


        }
    });
