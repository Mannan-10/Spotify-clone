import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img6 from './img6.jpg';
import song1 from './song1.mp3';
import song2 from './song2.mp3';
import song3 from './song3.mp3';
import song4 from './song4.mp3';
import song5 from './song5.mp3';
import song6 from './song6.mp3';
import logo from './white_logo.png';

export const assets = {
    img1,
    img2,
    img3,
    img4,
    song1,
    song2,
    song3,
    song4,
    song5,
    logo
}

export const albumData = [
    {
        id:'0',
        name: 'Happy Favorites',
        image: img4,
        desc: 'Most played in this week',
        bgColor: '#2a4365'
    },
    {
        id:'1',
        name: 'Top 50',
        image: img2,
        desc: 'Favorite of all time',
        bgColor: '#2a4386'
    }
]

export const songData = [
    {
        id:'0',
        name: 'Dil Ibadat',
        image: img4,
        file: song4,
        desc: 'Tum Mile',
        duration: "5:54"
    },
    {
        id:'1',
        name: 'Besharam Rang',
        image: img1,
        file: song2,
        desc: 'pathan',
        duration: "3:22"
    },
    {
        id:'2',
        name: 'Jhume jo pathan',
        image: img2,
        file: song1,
        desc: 'pathan',
        duration: "3:13"
    },
    {
        id:'3',
        name: 'Tu Hi Haqeeqat',
        image: img4,
        file: song5,
        desc: 'Tum Mile',
        duration: "5:55"
    },
    {
        id:'4',
        name: 'Tujhe Sochta Hoon',
        image: img6,
        file: song6,
        desc: 'Jannat 2',
        duration: "5:15"
    }
]