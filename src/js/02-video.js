import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}

const lastPosition = JSON.parse(
  localStorage.getItem('videoplayer-current-time'),
);

if (lastPosition) {
  player
    .setCurrentTime(lastPosition)
    .then(seconds => console.log(seconds))
    .catch(error => console.log(error));
}
