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
        // your 'app-name/redirect-link' goes below for the auth redirect
        var url = NSURL.URLWithString('anthmtest2://spotify-redirect')

        // spotify client ID goes below
        var spotifyClientId = 'dc716a7c84404d6c89c9f6e3547ce90a'

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
