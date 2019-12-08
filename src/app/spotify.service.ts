import { Injectable } from "@angular/core";
import { SpotifyPlayer } from "./spotifyPlayer";

@Injectable({
    providedIn: "root"
})
export class SpotifyService {

    config: SPTConfiguration
    remote: SPTAppRemote
    playerDelegate: SpotifyPlayer



    setupPlayer() {
        // add your app name below for the spotify auth redirect
        var url = NSURL.URLWithString('your-app-name-here://spotify-redirect')

        // your spotify client ID goes below
        var spotifyClientId = 'your-spotify-client-id-goes-here'

        this.config = SPTConfiguration.configurationWithClientIDRedirectURL(spotifyClientId, url)
        console.log(this.config);
        this.remote = SPTAppRemote.alloc();
        this.remote.initWithConfigurationLogLevel(this.config, 3);
        this.playerDelegate = new SpotifyPlayer;
        this.remote.delegate = this.playerDelegate;
        console.log(this.remote);
        console.log(this.playerDelegate);
    }

    isConnected() {
        console.log(this.remote.connected);
    }

    authorizeRemote() {
        var installed = this.remote.authorizeAndPlayURI('spotify:track:69bp2EbF7Q2rqc5N3ylezZ')
        if (!installed) {
            console.log('you have not installed spotify.');
        }
    }

    connectRemote(token: string) {
        console.log('attempting to connect...');
        this.remote.connectionParameters.accessToken = token;
        this.remote.connect();
    }

    nextSong() {
        console.log('skipping to the next song');
        this.remote.playerAPI.skipToNext(function(player, error) {
            if (error) {
                console.log(error);
            }
        });
    }
}
