import { IPlaylist } from "../models/IPlaylist";

export const createNewPlaylist = (): IPlaylist => {
    return {
        id: '',
        images: null,
        name: '',
        owner: null,
        publicAcess: false,
        snapshopId: '',
        collaborative: false,
        externalUrls: null,
        tracks: null,
        type: null,
        uri: '',
    };
}