var playlist = {
  "artistName": "I am Free"
}

function updatePlayList (playlist, artistName, songtitle) {
  playlist.artistName = songtitle
  return playlist
}
updatePlayList(playlist, "Woo", "Wan")