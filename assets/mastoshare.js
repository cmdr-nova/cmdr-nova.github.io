function shareOnMastodon() {
    var whereIsThis = window.location;
    var postContents = "Check+out+this+post+" + whereIsThis;
    var instanceUrlField = document.getElementById('instance');
    var instanceUrl = instanceUrlField.value;
    if (instanceUrl == "") {
        instanceUrl = "mastodon.social";
    };
    var url = "https://" + instanceUrl + "/share?text=" + postContents;
    window.location = url;
    return false;
}