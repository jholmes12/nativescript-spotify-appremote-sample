declare var SPTAppRemotePlayerStateDelegate, SPTAppRemoteDelegate;

export class SpotifyPlayer extends NSObject {
    public static ObjCProtocols = [SPTAppRemoteDelegate, SPTAppRemotePlayerStateDelegate];

    public appRemoteDidEstablishConnection(appRemote) {
        console.log('app is now connected.');
        // var remote = appRemote;
        // remote.playerAPI.delegate = this;
        // remote.playerAPI.subscribeToPlayerState(function(player, error) {
        //     if(error) {
        //         console.log(error);
        //     }
        // })
    }

    public appRemoteDidDisconnectWithError(appRemote, error) {
        console.log('disconnected');
    }

    public appRemoteDidFailConnectionAttemptWithError(appRemote, error) {
        console.log('app connection failed.');
    }

    public playerStateDidChange(playerState) {
        console.log("player state changed");
    }

}
