export interface ISong {
    ARTIST_IMG: string;
    ARTIST: string;
    SONG_ID: string,
    SONG_NAME: string,
    SONG_IMG: string,
    TOTAL_VIEW: string,
    DURATION: number,
    SONG_LOCATION: string,
    LYRICS: string,
    ADDED_DATE: string,
    ARTIST_NAME: string,
    ALBUM_NAME: string,
    ALBUM_ID: string,
    ARTIST_ID: string,
    ALBUM_IMG: string
}

export interface IArtist {
    AVATAR: string,
    MONTHLY_LISTENER : string,
    NAME: string
    USER_ID: string
    VERIFY: string
}