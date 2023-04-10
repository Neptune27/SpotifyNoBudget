import { IMusic } from "./IMusic";
declare class Queue {
    private setSong;
    private mainQueueElems;
    private nextQueueElems;
    private nowPlayingQueueElems;
    constructor(functionProps: {
        setSong: (queueIndex: number) => void;
    }, elems: {
        mainQueueElems: HTMLElement;
        nowPlayingQueueElems: HTMLElement;
        nextQueueElems: HTMLElement;
    });
    private setCurrentlyPlaying;
    private setNextQueue;
    setupQueue: (currentlyPlaying: IMusic, nextQueue: IMusic[]) => void;
}
export { Queue };
