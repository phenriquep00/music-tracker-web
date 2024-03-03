export const formatTrackDuration = (durationMs: number) => {

    const totalSeconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor((totalSeconds % 60));

    const formattedTrackDuration = minutes > 0 ?
        `${minutes}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`
        :
        seconds < 10 ? `0:0${seconds}` : `0:${seconds}`;

    return formattedTrackDuration;
}