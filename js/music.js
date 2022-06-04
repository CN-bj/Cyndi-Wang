//获取播放器标签
const audio = document.querySelector('.audio');
//获取歌名
const title = document.querySelector('.title');
//获取上一首按钮
const neon = document.querySelector('.neon');
//获取暂停/开始
const suspend = document.querySelector('.suspend');
//获取下一首
const next = document.querySelector('.next');

/* prev 上一首 ，playPause停止，nex下一首*/
//定义歌曲列表
const songList = [
    {
        path: './musics/AiNi.mp3',
        songName: "爱你-王心凌"
    },
    {
        path: './musics/MengDeGuangDian.mp3',
        songName: "梦的光点-王心凌"
    },
    {
        path: './musics/DaMian.mp3',
        songName: "大眠-王心凌"
    },
    {
        path: './musics/DiYiCiAiDeRen.mp3',
        songName: "第一次爱的人-王心凌"
    },

    {
        path: './musics/Honey.mp3',
        songName: "Honey-王心凌"
    },
]
//定义变量
let songPlaying = false;
/* 定义播放歌曲函数 */
const playSong = () => {
    songPlaying = true;
    audio.play();
    suspend.style.color = "rgba(231, 207, 200)";

}
/* 定义停止歌曲函数 */
const pauseSong = () => {
    songPlaying = false;
    audio.pause();
    suspend.style.color = "rgba(102, 102, 102)";

}
/* 停止或者播放 */
suspend.addEventListener('click', () => {
    songPlaying ? pauseSong() : playSong();
})
//定义播放歌曲时
const loadSong = (songList) => {
    title.innerText = songList.songName;
    audio.src = songList.path;
}
//当前歌曲
let i = 0;
//从第一首开始播放
loadSong(songList[i]);

//上一首歌曲按钮
const prevSong = () => {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}
neon.addEventListener('click', prevSong);
//下一首歌曲按钮
const nextSong = () => {
    i++;
    if (i > songList.length - 1) {
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}
next.addEventListener('click', nextSong);



