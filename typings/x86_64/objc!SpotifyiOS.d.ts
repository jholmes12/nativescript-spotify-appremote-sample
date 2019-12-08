
declare class SPTAppRemote extends NSObject {

	static alloc(): SPTAppRemote; // inherited from NSObject

	static appRemoteVersion(): string;

	static checkIfSpotifyAppIsActive(completion: (p1: boolean) => void): void;

	static new(): SPTAppRemote; // inherited from NSObject

	static spotifyItunesItemIdentifier(): number;

	readonly connected: boolean;

	readonly connectionParameters: SPTAppRemoteConnectionParams;

	readonly contentAPI: SPTAppRemoteContentAPI;

	delegate: SPTAppRemoteDelegate;

	readonly imageAPI: SPTAppRemoteImageAPI;

	readonly playerAPI: SPTAppRemotePlayerAPI;

	readonly userAPI: SPTAppRemoteUserAPI;

	constructor(o: { configuration: SPTConfiguration; connectionParameters: SPTAppRemoteConnectionParams; logLevel: SPTAppRemoteLogLevel; });

	constructor(o: { configuration: SPTConfiguration; logLevel: SPTAppRemoteLogLevel; });

	authorizationParametersFromURL(url: NSURL): NSDictionary<string, string>;

	authorizeAndPlayURI(URI: string): boolean;

	authorizeAndPlayURIAsRadio(playURI: string, asRadio: boolean): boolean;

	connect(): void;

	disconnect(): void;

	initWithConfigurationConnectionParametersLogLevel(configuration: SPTConfiguration, connectionParameters: SPTAppRemoteConnectionParams, logLevel: SPTAppRemoteLogLevel): this;

	initWithConfigurationLogLevel(configuration: SPTConfiguration, logLevel: SPTAppRemoteLogLevel): this;
}

declare var SPTAppRemoteAccessTokenKey: string;

interface SPTAppRemoteAlbum extends NSObjectProtocol {

	URI: string;

	name: string;
}
declare var SPTAppRemoteAlbum: {

	prototype: SPTAppRemoteAlbum;
};

interface SPTAppRemoteArtist extends NSObjectProtocol {

	URI: string;

	name: string;
}
declare var SPTAppRemoteArtist: {

	prototype: SPTAppRemoteArtist;
};

declare class SPTAppRemoteConnectionParams extends NSObject {

	static alloc(): SPTAppRemoteConnectionParams; // inherited from NSObject

	static new(): SPTAppRemoteConnectionParams; // inherited from NSObject

	accessToken: string;

	readonly authenticationMethods: NSArray<any>;

	readonly defaultImageSize: CGSize;

	readonly imageFormat: SPTAppRemoteConnectionParamsImageFormat;

	readonly protocolVersion: number;

	readonly roles: NSDictionary<any, any>;

	constructor(o: { accessToken: string; defaultImageSize: CGSize; imageFormat: SPTAppRemoteConnectionParamsImageFormat; });

	initWithAccessTokenDefaultImageSizeImageFormat(accessToken: string, defaultImageSize: CGSize, imageFormat: SPTAppRemoteConnectionParamsImageFormat): this;
}

declare const enum SPTAppRemoteConnectionParamsImageFormat {

	Any = 0,

	JPEG = 1,

	PNG = 2
}

interface SPTAppRemoteContentAPI extends NSObjectProtocol {

	fetchChildrenOfContentItemCallback(contentItem: SPTAppRemoteContentItem, callback: (p1: any, p2: NSError) => void): void;

	fetchContentItemForURICallback(URI: string, callback: (p1: any, p2: NSError) => void): void;

	fetchRecommendedContentItemsForTypeFlattenContainersCallback(contentType: string, flattenContainers: boolean, callback: (p1: any, p2: NSError) => void): void;

	fetchRootContentItemsForTypeCallback(contentType: string, callback: (p1: any, p2: NSError) => void): void;
}
declare var SPTAppRemoteContentAPI: {

	prototype: SPTAppRemoteContentAPI;
};

interface SPTAppRemoteContentItem extends NSObjectProtocol, SPTAppRemoteImageRepresentable {

	URI: string;

	availableOffline: boolean;

	children: NSArray<SPTAppRemoteContentItem>;

	container: boolean;

	identifier: string;

	playable: boolean;

	subtitle: string;

	title: string;
}
declare var SPTAppRemoteContentItem: {

	prototype: SPTAppRemoteContentItem;
};

declare var SPTAppRemoteContentTypeDefault: string;

declare var SPTAppRemoteContentTypeFitness: string;

declare var SPTAppRemoteContentTypeNavigation: string;

interface SPTAppRemoteCrossfadeState extends NSObjectProtocol {

	duration: number;

	enabled: boolean;
}
declare var SPTAppRemoteCrossfadeState: {

	prototype: SPTAppRemoteCrossfadeState;
};

interface SPTAppRemoteDelegate extends NSObjectProtocol {

	appRemoteDidDisconnectWithError(appRemote: SPTAppRemote, error: NSError): void;

	appRemoteDidEstablishConnection(appRemote: SPTAppRemote): void;

	appRemoteDidFailConnectionAttemptWithError(appRemote: SPTAppRemote, error: NSError): void;
}
declare var SPTAppRemoteDelegate: {

	prototype: SPTAppRemoteDelegate;
};

declare const enum SPTAppRemoteErrorCode {

	UnknownError = -1,

	BackgroundWakeupFailedError = -1000,

	ConnectionAttemptFailedError = -1001,

	ConnectionTerminatedError = -1002,

	InvalidArgumentsError = -2000,

	RequestFailedError = -2001
}

declare var SPTAppRemoteErrorDescriptionKey: string;

declare var SPTAppRemoteErrorDomain: string;

interface SPTAppRemoteImageAPI extends NSObjectProtocol {

	fetchImageForItemWithSizeCallback(imageRepresentable: SPTAppRemoteImageRepresentable, imageSize: CGSize, callback: (p1: any, p2: NSError) => void): void;
}
declare var SPTAppRemoteImageAPI: {

	prototype: SPTAppRemoteImageAPI;
};

interface SPTAppRemoteImageRepresentable extends NSObjectProtocol {

	imageIdentifier: string;
}
declare var SPTAppRemoteImageRepresentable: {

	prototype: SPTAppRemoteImageRepresentable;
};

interface SPTAppRemoteLibraryState extends NSObjectProtocol {

	canAdd: boolean;

	isAdded: boolean;

	uri: string;
}
declare var SPTAppRemoteLibraryState: {

	prototype: SPTAppRemoteLibraryState;
};

declare const enum SPTAppRemoteLogLevel {

	None = 0,

	Debug = 1,

	Info = 2,

	Error = 3
}

interface SPTAppRemotePlaybackOptions extends NSObjectProtocol {

	isShuffling: boolean;

	repeatMode: SPTAppRemotePlaybackOptionsRepeatMode;
}
declare var SPTAppRemotePlaybackOptions: {

	prototype: SPTAppRemotePlaybackOptions;
};

declare const enum SPTAppRemotePlaybackOptionsRepeatMode {

	Off = 0,

	Track = 1,

	Context = 2
}

interface SPTAppRemotePlaybackRestrictions extends NSObjectProtocol {

	canRepeatContext: boolean;

	canRepeatTrack: boolean;

	canSeek: boolean;

	canSkipNext: boolean;

	canSkipPrevious: boolean;

	canToggleShuffle: boolean;
}
declare var SPTAppRemotePlaybackRestrictions: {

	prototype: SPTAppRemotePlaybackRestrictions;
};

interface SPTAppRemotePlayerAPI extends NSObjectProtocol {

	delegate: SPTAppRemotePlayerStateDelegate;

	enqueueTrackUriCallback(trackUri: string, callback: (p1: any, p2: NSError) => void): void;

	getAvailablePodcastPlaybackSpeeds(callback: (p1: any, p2: NSError) => void): void;

	getCrossfadeState(callback: (p1: any, p2: NSError) => void): void;

	getCurrentPodcastPlaybackSpeed(callback: (p1: any, p2: NSError) => void): void;

	getPlayerState(callback: (p1: any, p2: NSError) => void): void;

	pause(callback: (p1: any, p2: NSError) => void): void;

	playAsRadioCallback(trackUri: string, asRadio: boolean, callback: (p1: any, p2: NSError) => void): void;

	playCallback(entityIdentifier: string, callback: (p1: any, p2: NSError) => void): void;

	playItemCallback(contentItem: SPTAppRemoteContentItem, callback: (p1: any, p2: NSError) => void): void;

	playItemSkipToTrackIndexCallback(contentItem: SPTAppRemoteContentItem, index: number, callback: (p1: any, p2: NSError) => void): void;

	resume(callback: (p1: any, p2: NSError) => void): void;

	seekBackward15Seconds(callback: (p1: any, p2: NSError) => void): void;

	seekForward15Seconds(callback: (p1: any, p2: NSError) => void): void;

	seekToPositionCallback(position: number, callback: (p1: any, p2: NSError) => void): void;

	setPodcastPlaybackSpeedCallback(speed: SPTAppRemotePodcastPlaybackSpeed, callback: (p1: any, p2: NSError) => void): void;

	setRepeatModeCallback(repeatMode: SPTAppRemotePlaybackOptionsRepeatMode, callback: (p1: any, p2: NSError) => void): void;

	setShuffleCallback(shuffle: boolean, callback: (p1: any, p2: NSError) => void): void;

	skipToNext(callback: (p1: any, p2: NSError) => void): void;

	skipToPrevious(callback: (p1: any, p2: NSError) => void): void;

	subscribeToPlayerState(callback: (p1: any, p2: NSError) => void): void;

	unsubscribeToPlayerState(callback: (p1: any, p2: NSError) => void): void;
}
declare var SPTAppRemotePlayerAPI: {

	prototype: SPTAppRemotePlayerAPI;
};

interface SPTAppRemotePlayerState extends NSObjectProtocol {

	contextTitle: string;

	contextURI: NSURL;

	paused: boolean;

	playbackOptions: SPTAppRemotePlaybackOptions;

	playbackPosition: number;

	playbackRestrictions: SPTAppRemotePlaybackRestrictions;

	playbackSpeed: number;

	track: SPTAppRemoteTrack;
}
declare var SPTAppRemotePlayerState: {

	prototype: SPTAppRemotePlayerState;
};

interface SPTAppRemotePlayerStateDelegate extends NSObjectProtocol {

	playerStateDidChange(playerState: SPTAppRemotePlayerState): void;
}
declare var SPTAppRemotePlayerStateDelegate: {

	prototype: SPTAppRemotePlayerStateDelegate;
};

interface SPTAppRemotePodcastPlaybackSpeed extends NSObjectProtocol {

	value: number;
}
declare var SPTAppRemotePodcastPlaybackSpeed: {

	prototype: SPTAppRemotePodcastPlaybackSpeed;
};

interface SPTAppRemoteTrack extends NSObjectProtocol, SPTAppRemoteImageRepresentable {

	URI: string;

	album: SPTAppRemoteAlbum;

	artist: SPTAppRemoteArtist;

	duration: number;

	episode: boolean;

	name: string;

	podcast: boolean;

	saved: boolean;
}
declare var SPTAppRemoteTrack: {

	prototype: SPTAppRemoteTrack;
};

interface SPTAppRemoteUserAPI extends NSObjectProtocol {

	delegate: SPTAppRemoteUserAPIDelegate;

	addItemToLibraryWithURICallback(URI: string, callback: (p1: any, p2: NSError) => void): void;

	fetchCapabilitiesWithCallback(callback: (p1: any, p2: NSError) => void): void;

	fetchLibraryStateForURICallback(URI: string, callback: (p1: any, p2: NSError) => void): void;

	removeItemFromLibraryWithURICallback(URI: string, callback: (p1: any, p2: NSError) => void): void;

	subscribeToCapabilityChanges(callback: (p1: any, p2: NSError) => void): void;

	unsubscribeToCapabilityChanges(callback: (p1: any, p2: NSError) => void): void;
}
declare var SPTAppRemoteUserAPI: {

	prototype: SPTAppRemoteUserAPI;
};

interface SPTAppRemoteUserAPIDelegate extends NSObjectProtocol {

	userAPIDidReceiveCapabilities(userAPI: SPTAppRemoteUserAPI, capabilities: SPTAppRemoteUserCapabilities): void;
}
declare var SPTAppRemoteUserAPIDelegate: {

	prototype: SPTAppRemoteUserAPIDelegate;
};

interface SPTAppRemoteUserCapabilities extends NSObjectProtocol {

	canPlayOnDemand: boolean;
}
declare var SPTAppRemoteUserCapabilities: {

	prototype: SPTAppRemoteUserCapabilities;
};

declare const enum SPTAuthorizationOptions {

	DefaultAuthorizationOption = 0,

	ClientAuthorizationOption = 1
}

declare class SPTConfiguration extends NSObject implements NSSecureCoding {

	static alloc(): SPTConfiguration; // inherited from NSObject

	static configurationWithClientIDRedirectURL(clientID: string, redirectURL: NSURL): SPTConfiguration;

	static new(): SPTConfiguration; // inherited from NSObject

	readonly clientID: string;

	playURI: string;

	readonly redirectURL: NSURL;

	tokenRefreshURL: NSURL;

	tokenSwapURL: NSURL;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { clientID: string; redirectURL: NSURL; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithClientIDRedirectURL(clientID: string, redirectURL: NSURL): this;

	initWithCoder(coder: NSCoder): this;
}

declare class SPTError extends NSError {

	static alloc(): SPTError; // inherited from NSObject

	static errorWithCode(code: SPTErrorCode): SPTError;

	static errorWithCodeDescription(code: SPTErrorCode, description: string): SPTError;

	static errorWithCodeUnderlyingError(code: SPTErrorCode, error: NSError): SPTError;

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<string, any>): SPTError; // inherited from NSError

	static fileProviderErrorForCollisionWithItem(existingItem: NSFileProviderItem): SPTError; // inherited from NSError

	static fileProviderErrorForNonExistentItemWithIdentifier(itemIdentifier: string): SPTError; // inherited from NSError

	static new(): SPTError; // inherited from NSObject
}

declare const enum SPTErrorCode {

	UnknownErrorCode = 0,

	AuthorizationFailedErrorCode = 1,

	RenewSessionFailedErrorCode = 2,

	JSONFailedErrorCode = 3
}

declare var SPTLoginErrorDomain: string;

declare const enum SPTScope {

	PlaylistReadPrivateScope = 1,

	PlaylistReadCollaborativeScope = 2,

	PlaylistModifyPublicScope = 4,

	PlaylistModifyPrivateScope = 8,

	UserFollowReadScope = 16,

	UserFollowModifyScope = 32,

	UserLibraryReadScope = 64,

	UserLibraryModifyScope = 128,

	UserReadBirthDateScope = 256,

	UserReadEmailScope = 512,

	UserReadPrivateScope = 1024,

	UserTopReadScope = 2048,

	UGCImageUploadScope = 4096,

	StreamingScope = 8192,

	AppRemoteControlScope = 16384,

	UserReadPlaybackStateScope = 32768,

	UserModifyPlaybackStateScope = 65536,

	UserReadCurrentlyPlayingScope = 131072,

	UserReadRecentlyPlayedScope = 262144
}

declare class SPTSession extends NSObject implements NSSecureCoding {

	static alloc(): SPTSession; // inherited from NSObject

	static new(): SPTSession; // inherited from NSObject

	readonly accessToken: string;

	readonly expirationDate: Date;

	readonly expired: boolean;

	readonly refreshToken: string;

	readonly scope: SPTScope;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class SPTSessionManager extends NSObject {

	static alloc(): SPTSessionManager; // inherited from NSObject

	static new(): SPTSessionManager; // inherited from NSObject

	static sessionManagerWithConfigurationDelegate(configuration: SPTConfiguration, delegate: SPTSessionManagerDelegate): SPTSessionManager;

	alwaysShowAuthorizationDialog: boolean;

	delegate: SPTSessionManagerDelegate;

	session: SPTSession;

	readonly spotifyAppInstalled: boolean;

	constructor(o: { configuration: SPTConfiguration; delegate: SPTSessionManagerDelegate; });

	applicationOpenURLOptions(application: UIApplication, URL: NSURL, options: NSDictionary<string, any>): boolean;

	initWithConfigurationDelegate(configuration: SPTConfiguration, delegate: SPTSessionManagerDelegate): this;

	initiateSessionWithScopeOptions(scope: SPTScope, options: SPTAuthorizationOptions): void;

	initiateSessionWithScopeOptionsPresentingViewController(scope: SPTScope, options: SPTAuthorizationOptions, presentingViewController: UIViewController): void;

	renewSession(): void;
}

interface SPTSessionManagerDelegate extends NSObjectProtocol {

	sessionManagerDidFailWithError(manager: SPTSessionManager, error: NSError): void;

	sessionManagerDidInitiateSession(manager: SPTSessionManager, session: SPTSession): void;

	sessionManagerDidRenewSession?(manager: SPTSessionManager, session: SPTSession): void;

	sessionManagerShouldRequestAccessTokenWithAuthorizationCode?(manager: SPTSessionManager, code: string): boolean;
}
declare var SPTSessionManagerDelegate: {

	prototype: SPTSessionManagerDelegate;
};
