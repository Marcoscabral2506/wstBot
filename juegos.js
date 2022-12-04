const Tipos = [
    {
        id: 0,
        nombre: 'Rocket League 🚙⚽',
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg',
    },
    {
        nombre: 'League Of Legends 🧙‍♂️',
        id: 1,
        img: 'https://cdnb.artstation.com/p/assets/images/images/021/422/255/large/t-j-geisen-lol-icon-rendered-v001.jpg?1571640551',
    },
    {
        id: 2,
        nombre: "Phasmophobia 👻📱",
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/739630/capsule_616x353.jpg?t=1667574170',
    },
    {
        id: 3,
        nombre: "Devour 👿🐐",
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1274570/header.jpg?t=1667274838',
    },
    {
        id: 4,
        nombre: 'Fall guys 👑🐧',
        img: 'https://cdn1.epicgames.com/offer/50118b7f954e450f8823df1614b24e80/EGS_FallGuys_Mediatonic_S1_2560x1440-187aa50ffaa014885d6702a0b632f848',
    },
    {
        id: 5,
        nombre: 'OverWatch 2 🔫'
    }
];

function generarJuego() {
    var maxElementId = Object.values(Tipos).length - 1;
    var random = Math.floor(Math.random() * (maxElementId + 1)) + 0;
    const { nombre } = Tipos[random];
    return `Sale un ${nombre}`;
}

module.exports = {
    "generarJuego": generarJuego
}