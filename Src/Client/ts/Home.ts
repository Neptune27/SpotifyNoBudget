const getRecentlyAdded = async () => {
    const homeContainer = document.getElementById("homeContainer")
    if (homeContainer === null) {
        return
    }
    const fetchHandle = await fetch("/Song/RecentlyAdded/10");
    const data: {
        ADDED_DATE: string
        DURATION : string
        LYRICS: string,
        SONG_ID: string,
        SONG_IMG: string,
        SONG_LOCATION: string
        SONG_NAME: string,
        TOTAL_VIEW : string
    }[] = await fetchHandle.json();

    for (const datum of data) {
        
    }

}

export {getRecentlyAdded}