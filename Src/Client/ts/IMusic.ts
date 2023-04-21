export interface IMusic {
    songUrl: string,
    imageUrl : string,
    songName: string,
    artist : string,
    lyric: (string|number)[][],
    songID: string,
    albumID: string,
    artistID: string
    albumName: string,
    duration: number
}
//
//
// interface PlannedArtistInterface {
//     artistID : string|number,
//     artistName: string,
//     artistURL: string
// }
//
// interface PlannedAlbumMusicInterface {
//     albumID: string|number,
//     albumName: string,
//     albumUrl: string
// }
//
// interface PlannedMusicInterface {
//     songUrl: string,
//     songName: string,
//     artist : PlannedArtistInterface[],
//     album: PlannedAlbumMusicInterface,
//     lyric: (string|number)[][],
//     duration: number,
//     isLoved: boolean
// }
//
// let song : PlannedMusicInterface = {
//     songName: "Woa",
//     songUrl: "Url/to/song",
//     duration: 150,
//     isLoved: false,
//     lyric: [[0, "a"]],
//     artist : [{
//         artistID: 1,
//         artistName: "A",
//         artistURL: "/IDK/Yeah"
//     }], // Thêm được nhiều nhạc sĩ nữa
//     album : {
//         albumID: 1,
//         albumName: "B",
//         albumUrl: "URL/to/album"
//     }
// }