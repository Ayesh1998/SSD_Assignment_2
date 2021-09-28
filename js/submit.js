$(document).ready(function(){

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const redirect_uri = "http://192.168.64.2.xip.io/DriveSubmIt/modules/submit.html"; // replace with your redirect_uri;

    const client_secret = "HxtwKpr33ktGhuOFpRQUI6G1"; // replace with your client secret
    const scope = "https://www.googleapis.com/auth/drive";
    var access_token= "";
    var client_id = "34840218804-6tu4spu6a7121pk4gbt09tkbb466ecfa.apps.googleusercontent.com";// replace it with your client id;

