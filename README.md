# nativescript-spotify-appremote-sample
Sample test app just to demonstrate connecting to new Spotify iOS SDK via Nativescript

For a quick setup:

1) In App_Resources/iOS/Info.plist add your app bundle and url information so spotify will know how to redirect back to your app after authentication.

2) In src/app/spotify.service file add your spotify ClientID (found in your app in spotify developer portal) and your redirect app url.

3) Add your app bundle ID to the package.json file.


To Run Test:

1) From the first screen that is loaded (the test component), click "Inital load of AppRemote" to create an instance of the spotify sdk remote.

2) you can then click "is it connected?", and it should be false.

3) Click "Authorize", which should then open spotify, ask for your permission to connect, then redirect back to the nativescript app.

4) The "Next Song" link shold then skip to the next song if app is still connected.
