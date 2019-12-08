import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, UrlSerializer } from "@angular/router";
import { SpotifyService } from "../spotify.service";

@Component({
    selector: "test",
    templateUrl: "./test.component.html"
})

export class TestComponent implements OnInit {
    config: SPTConfiguration
    remote: SPTAppRemote

    constructor(private spotify: SpotifyService) { }

    ngOnInit(): void {
        console.log('this is the test component');
        console.log('typeof SPTConfiguration:', typeof SPTConfiguration);
    }

    onTap() {
        this.spotify.setupPlayer();
    }

    isConnected() {
        this.spotify.isConnected();
    }

    authorize() {
        this.spotify.authorizeRemote();
    }

    nextSong() {
        this.spotify.nextSong();
    }

}
