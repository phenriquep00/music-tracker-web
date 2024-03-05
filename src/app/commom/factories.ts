import { ITrack } from "../models/ITrack";

export function newTrack(): ITrack {
  return {
    id: '',
    artists: '',
    duration: 0,
    explicit: false,
    isPlayable: false,
    trackName: '',
    uri: '',
  }
}