window.onload = () => {
  const song_img_el = document.getElementById("song-image");
  const song_title_el = document.getElementById("song-title");
  const song_artist_el = document.getElementById("song-artist");
  const song_next_up_el = document.getElementById("song-next-up");

  const play_btn = document.getElementById("play-btn");
  const play_btn_icon = document.getElementById("play-icon");
  const pre_btn = document.getElementById("prev-btn");
  const next_btn = document.getElementById("next-btn");

  const audio_player = document.getElementById("music-player");

  let current_song_index;
  let next_song_index;

  let songs = [
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Sombody-new",
      artist: "Second Kelly",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3",
    },
    {
      title: "On-on",
      artist: "Thrid Kelly",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "GOOOOOD",
      artist: "4th Kelly",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3",
    },
  ];

  play_btn.addEventListener("click", TogglePlaySong);
  next_btn.addEventListener("click", () => ChangeSong(true));
  pre_btn.addEventListener("click", () => ChangeSong(false));

  InitPlayer();

  function InitPlayer() {
    current_song_index = 0;
    next_song_index = current_song_index + 1;
    UpdatePlayer();
  }

  function UpdatePlayer() {
    let song = songs[current_song_index];

    song_img_el.style = "background-image: url(" + song.img_src + ")";
    song_title_el.innerHTML = song.title;
    song_artist_el.innerHTML = song.artist;

    song_next_up_el.innerHTML =
      songs[next_song_index].title + " by " + songs[next_song_index].artist;

    audio_player.src = song.src;
  }

  function TogglePlaySong() {
    if (audio_player.paused) {
      audio_player.play();
      play_btn_icon.classList.remove("fa-play");
      play_btn_icon.classList.add("fa-pause");
    } else {
      audio_player.pause();
      play_btn_icon.classList.add("fa-play");
      play_btn_icon.classList.remove("fa-pause");
    }
  }

  function ChangeSong(next = true) {
    if (next) {
      current_song_index++;
      next_song_index = current_song_index + 1;

      if (current_song_index > songs.length - 1) {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
      }

      if (next_song_index > songs.length) {
        next_song_index = 0;
      }
    } else {
      current_song_index--;
      next_song_index = current_song_index + 1;

      if (current_song_index < 0) {
        current_song_index = songs.length - 1;
        next_song_index = 0;
      }
    }

    UpdatePlayer();
    // TogglePlaySong();
  }
};
