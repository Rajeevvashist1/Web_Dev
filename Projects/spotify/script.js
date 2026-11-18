const songs = [
  {
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273d3e3c3b3e3e3c3b3d3e3c3b3"
  },
  {
    title: "Kesariya",
    artist: "Arijit Singh",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273e3e3c3b3d3e3c3b3e3e3c3b3"
  },
  {
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273c3b3e3e3d3e3c3b3e3e3c3b3"
  },
  {
    title: "Apna Bana Le",
    artist: "Arijit Singh",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273f3f3c3b3f3f3c3b3f3f3c3b3"
  },
  {
    title: "Tera Yaar Hoon Main",
    artist: "Arijit Singh",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273a3a3c3b3a3a3c3b3a3a3c3b3"
  },
  {
    title: "Shayad",
    artist: "Arijit Singh",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273b3b3c3b3b3b3c3b3b3b3c3b3"
  },
  {
    title: "Dil Diyan Gallan",
    artist: "Atif Aslam",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273c4c4c3b3c4c4c3b3c4c4c3b3"
  },
  {
    title: "Tujhe Kitna Chahne Lage",
    artist: "Arijit Singh",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273d5d5c3b3d5d5c3b3d5d5c3b3"
  },
  {
    title: "Hawayein",
    artist: "Arijit Singh",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273e6e6c3b3e6e6c3b3e6e6c3b3"
  },
  {
    title: "Phir Bhi Tumko Chaahunga",
    artist: "Arijit Singh",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273f7f7c3b3f7f7c3b3f7f7c3b3"
  }
];

const authSection = document.getElementById('auth-section');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const showLoginBtn = document.getElementById('show-login');
const showSignupBtn = document.getElementById('show-signup');
const musicPlayerSection = document.getElementById('music-player-section');
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songList = document.getElementById('song-list');
const currentSongTitle = document.getElementById('current-song-title');
const currentArtist = document.getElementById('current-artist');
const currentAlbumArt = document.getElementById('current-album-art');

let currentSongIndex = 0;
let isPlaying = false;

// --- Auth ---
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Signup successful! Please login.');
  showLoginForm();
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login successful!');
  authSection.style.display = 'none';
  musicPlayerSection.style.display = 'block';
  loadSong(currentSongIndex);
});

showLoginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showLoginForm();
});

showSignupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showSignupForm();
});

function showLoginForm() {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
}

function showSignupForm() {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
}

// --- Music Player ---
function loadSong(index) {
  const song = songs[index];
  audioPlayer.src = song.audioSrc;
  currentSongTitle.textContent = song.title;
  currentArtist.textContent = song.artist;
  currentAlbumArt.src = song.albumArt;

  const items = songList.querySelectorAll('li');
  items.forEach((item, i) => {
    item.classList.toggle('playing', i === index);
  });

  if (isPlaying) {
    audioPlayer.play();
    currentAlbumArt.classList.add('playing');
  } else {
    currentAlbumArt.classList.remove('playing');
  }
}

function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶️';
    currentAlbumArt.classList.remove('playing');
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
    currentAlbumArt.classList.add('playing');
  }
  isPlaying = !isPlaying;
}

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
}

function playPrevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
}

// --- Events ---
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNextSong);
prevBtn.addEventListener('click', playPrevSong);
audioPlayer.addEventListener('ended', playNextSong);

// --- Playlist ---
function populatePlaylist() {
  songList.innerHTML = '';
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    li.addEventListener('click', () => {
      currentSongIndex = index;
      loadSong(currentSongIndex);
      if (!isPlaying) togglePlayPause();
    });
    songList.appendChild(li);
  });
}

populatePlaylist();