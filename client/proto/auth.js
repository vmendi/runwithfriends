//////////////////////////
//
// Authentication
// See "Logging the user in" on https://developers.facebook.com/mobile
//
//////////////////////////

var GlobalUser = [];
var GlobalFriends = [];

var GlobalOppId = null;
var GlobalOppName = null;

(function() {
  var e = document.createElement('script'); e.async = true;
  e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
  document.getElementById('fb-root').appendChild(e);
}());

window.fbAsyncInit = function() {
  FB.init({ appId: '181101908692533', 
    status: true, 
    cookie: true,
    xfbml: true,
    oauth: true});

  FB.Event.subscribe('auth.authResponseChange', handleReponseChange);
};

function handleReponseChange(response) {
  if (response.authResponse) {
    FB.api('/me', function(response) {
      user = response;

      FB.api('/me/friends&fields=name,picture', function(response) {
        console.log('Got friends: ', response);

        if (!response.error) {
          GlobalFriends = response.data;
          onFacebookInitialized();
        }
      });
    });
  }
}

//See https://developers.facebook.com/docs/reference/javascript/FB.logout/
function logout() {
  FB.logout(function(response) {
    window.location.reload();
  });
}