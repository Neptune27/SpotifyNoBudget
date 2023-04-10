const getRecentlyAdded = async () => {
    const homeContainer = document.getElementById("homeContainer");
    if (homeContainer === null) {
        return;
    }
    const fetchHandle = await fetch("/Song/RecentlyAdded/10");
    const data = await fetchHandle.json();
    for (const datum of data) {
    }
};
export { getRecentlyAdded };
//# sourceMappingURL=Home.js.map