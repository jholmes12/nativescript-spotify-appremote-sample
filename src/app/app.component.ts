import { Component, OnInit } from "@angular/core";
import { handleOpenURL, AppURL } from 'nativescript-urlhandler';
import { RouterExtensions } from "nativescript-angular/router";
import { SpotifyService } from "./spotify.service"

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})

export class AppComponent implements OnInit {
    config: SPTConfiguration
    remote: SPTAppRemote

    constructor(
        private routerExtensions: RouterExtensions,
        private spotify: SpotifyService
        ) {
    }

    ngOnInit(){
        handleOpenURL((appURL: AppURL) => {
            console.log('Got the following appURL', appURL);
            console.log(appURL.path);
            if (appURL.path.includes('spotify-redirect')) {
                console.log('parsing for the access token');
                var split1 = appURL.path.split('#')[1];
                var split2 = split1.split('&')[0];
                var token = split2.split('=')[1];
                console.log(`access token is: ${token}`);
                this.spotify.connectRemote(token);
            }
            // this.routerExtensions.navigateByUrl('/spotify-redirect')
        });
     }
}
