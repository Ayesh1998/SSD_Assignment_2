$(document).ready(function(){

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const redirect_uri = "http://192.168.64.2.xip.io/DriveSubmIt/modules/submit.html"; // replace with your redirect_uri;

