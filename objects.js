var playlist = {
  artistName: "I am Free"
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}
updatePlayList(playlist, "Woo", "Wan")