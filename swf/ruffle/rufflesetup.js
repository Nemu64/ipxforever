const useflashplayer = new URLSearchParams(window.location.search);
var useflash = useflashplayer.get('forceflash');
if (forceflash != "true" || forceflash != "1"){
window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
    "polyfills": true,
    "autoplay": "on",
    "unmuteOverlay": "hidden",
}
}