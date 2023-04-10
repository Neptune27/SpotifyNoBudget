declare class AudioPlayerQueueController {
    private audioPlayer;
    private readonly queue;
    static instance: AudioPlayerQueueController;
    static getInstance(): AudioPlayerQueueController;
    private constructor();
    playFromPopularPlaylist: (artistID: number) => Promise<void>;
    private resetSong;
    private setSong;
    private setQueue;
}
declare const controller: AudioPlayerQueueController;
export { controller, AudioPlayerQueueController };
