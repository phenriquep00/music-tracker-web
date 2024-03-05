import { ITrack } from "../models/ITrack";
import { newTrack } from "./factories";

export function SpotifyTrackObjectFullToTrack(spotifyTrack: SpotifyApi.TrackObjectFull): ITrack {
  if (!spotifyTrack) return newTrack();

  return {
    id: spotifyTrack.id,
    trackName: spotifyTrack.name,
    artists: spotifyTrack.artists,
    duration: spotifyTrack.duration_ms,
    explicit: spotifyTrack.explicit,
    isPlayable: spotifyTrack.is_playable,
    uri: spotifyTrack.uri
  }
}