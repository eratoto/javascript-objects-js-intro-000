var playlist = {
  artistName: "I am Free"
}

function updatePlayList (playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}
updatePlayList(playlist, "Woo", "Wan")