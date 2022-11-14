import express from 'express';

const router = express.Router();

const albums = [
    {
        id:"album-1",
        title:"Mr.Money With The Vibe",
        cover: "https://ikuol-music-api.up.railway.app/cover/cover.png",
        info:"Ahmed Ololade , known professionally as Asake, is a Nigerian singer and songwriter of Yoruba heritage who specialises in Afrobeats. He got signed to YBNL Nation and Empire Distribution.",
        files:[
            {
                id:"asake-1",
                artist:"Asake",
                duration:"1:40",
                title:"Dull",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Dull.mp3"
            },
            {
                id:"asake-2",
                artist:"Asake",
                duration:"2:42",
                title:"Dupe",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Dupe.mp3"
            },
            {
                id:"asake-3",
                artist:"Asake",
                duration:"2:28",
                title:"Joha",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Joha.mp3"
            },
            {
                id:"asake-4",
                artist:"Asake",
                duration:"1:57",
                title:"Muse",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Muse.mp3"
            },
            {
                id:"asake-5",
                artist:"Asake",
                duration:"3:03",
                title:"Nzaza",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Nzaza.mp3"
            },
            {
                id:"asake-6",
                artist:"Asake",
                duration:"2:03",
                title:"Organise",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Organise.mp3"
            },
            {
                id:"asake-7",
                artist:"Asake",
                duration:"2:36",
                title:"Ototo",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Ototo.mp3"
            },
            {
                id:"asake-8",
                artist:"Asake",
                duration:"2:33",
                title:"PBUY",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/PBUY.mp3"
            },
            {
                id:"asake-9",
                artist:"Asake",
                duration:"2:11",
                title:"Reason",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Reason.mp3"
            },
            {
                id:"asake-10",
                artist:"Asake",
                duration:"3:30",
                title:"Sungba",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Sungba.mp3"
            },
            {
                id:"asake-11",
                artist:"Asake",
                duration:"2:48",
                title:"Sunmomi",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Sunmomi.mp3"
            },
            {
                id:"asake-12",
                artist:"Asake",
                duration:"2:35",
                title:"Terminator",
                cover:"https://ikuol-music-api.up.railway.app/cover/cover.png",
                audio:"https://ikuol-music-api.up.railway.app/music/Terminator.mp3"
            },
        ]
    },

    {
      id:"album-2",
        title:"Certfied Lover Boy",
        cover: "https://ikuol-music-api.up.railway.app/cover/drake.png",
        info:"Drake, real name Aubrey Drake Graham, born October 24, 1986 in Toronto, Ontario, is a Canadian rapper-songwriter and actor.",
        files:[
            {
                id:"drake-1",
                artist:"Drake",
                duration:"4:51",
                title:"Fair Trade",
                cover:"https://ikuol-music-api.up.railway.app/cover/drake.png",
                audio:"https://ikuol-music-api.up.railway.app/music2/FairTrade.mp3"
            },
            {
                id:"drake-2",
                artist:"Drake",
                duration:"3:12",
                title:"Fountains",
                cover:"https://ikuol-music-api.up.railway.app/cover/drake.png",
                audio:"https://ikuol-music-api.up.railway.app/music2/Fountains.mp3"
            },
            {
                id:"drake-3",
                artist:"Drake",
                duration:"3:42",
                title:"Girls Want Girls",
                cover:"https://ikuol-music-api.up.railway.app/cover/drake.png",
                audio:"https://ikuol-music-api.up.railway.app/music2/GirlsWantGirls.mp3"
            },
            {
                id:"drake-4",
                artist:"Drake",
                duration:"4:12",
                title:"IMY2",
                cover:"https://ikuol-music-api.up.railway.app/cover/drake.png",
                audio:"https://ikuol-music-api.up.railway.app/music2/IMY2.mp3"
            },
            {
                id:"drake-5",
                artist:"Drake",
                duration:"4:56",
                title:"In The Bible",
                cover:"https://ikuol-music-api.up.railway.app/cover/drake.png",
                audio:"https://ikuol-music-api.up.railway.app/music2/InTheBible.mp3"
            },
            {
                id:"drake-6",
                artist:"Drake",
                duration:"4:33",
                title:"N 2 Deep",
                cover:"https://ikuol-music-api.up.railway.app/cover/drake.png",
                audio:"https://ikuol-music-api.up.railway.app/music2/N2Deep.mp3"
            },
            {
                id:"drake-7",
                artist:"Drake",
                duration:"5:08",
                title:"TSU",
                cover:"https://ikuol-music-api.up.railway.app/cover/drake.png",
                audio:"https://ikuol-music-api.up.railway.app/music2/TSU.mp3"
            },
        ]
    },

    {
      id:"album-3",
        title:"HIVER A PARIS",
        cover: "https://ikuol-music-api.up.railway.app/cover/dinos.png",
        info:"Dinos, formerly Dinos Punchlinovic, whose real name is Jules Jomby, born November 30, 1993 in Douala, is a French rapper and singer from La Courneuve, in Seine-Saint-Denis.",
        files:[
            {
                id:"dinos-1",
                artist:"Dinos",
                duration:"4:19",
                title:"AMG Performance",
                cover:"https://ikuol-music-api.up.railway.app/cover/dinos.png",
                audio:"https://ikuol-music-api.up.railway.app/music3/AMGPerformance.mp3"
            },
            {
                id:"dinos-2",
                artist:"Dinos",
                duration:"2:49",
                title:"Chrome Hearts",
                cover:"https://ikuol-music-api.up.railway.app/cover/dinos.png",
                audio:"https://ikuol-music-api.up.railway.app/music3/ChromeHearts.mp3"
            },
            {
                id:"dinos-3",
                artist:"Dinos",
                duration:"2:59",
                title:"Modus Vivendi",
                cover:"https://ikuol-music-api.up.railway.app/cover/dinos.png",
                audio:"https://ikuol-music-api.up.railway.app/music3/ModusVivendi.mp3"
            },
            {
                id:"dinos-4",
                artist:"Dinos",
                duration:"1:48",
                title:"Pichichi Anderson",
                cover:"https://ikuol-music-api.up.railway.app/cover/dinos.png",
                audio:"https://ikuol-music-api.up.railway.app/music3/PichichiAnderson.mp3"
            },
            {
                id:"dinos-5",
                artist:"Dinos",
                duration:"3:47",
                title:"Portes Suicide",
                cover:"https://ikuol-music-api.up.railway.app/cover/dinos.png",
                audio:"https://ikuol-music-api.up.railway.app/music3/PortesSuicide.mp3"
            },
            {
                id:"dinos-6",
                artist:"Dinos",
                duration:"3:37",
                title:"Quatre Saisons",
                cover:"https://ikuol-music-api.up.railway.app/cover/dinos.png",
                audio:"https://ikuol-music-api.up.railway.app/music3/QuatreSaisons.mp3"
            },
            {
                id:"dinos-7",
                artist:"Dinos",
                duration:"3:48",
                title:"Simyaci",
                cover:"https://ikuol-music-api.up.railway.app/cover/dinos.png",
                audio:"https://ikuol-music-api.up.railway.app/music3/Simyaci.mp3"
            },
        ]
    },
]

router.get('/', (req, res) => {
    res.json(albums)
});

export default router;