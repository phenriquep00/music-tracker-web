export const getAlbumFullLenghtInMinutes = (tracks: any) => {

    var totalMS: number = 0;

    for (const track of tracks) totalMS += track.duration;

    const totalSeconds = Math.floor(totalMS / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const formattedDuration = hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`;

    return formattedDuration;
}