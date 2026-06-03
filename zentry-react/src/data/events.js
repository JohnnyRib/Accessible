// Shared event data — later this will come from your PHP/MySQL backend via fetch.
export const events = [
  {
    id: 'game-award',
    title: 'The Game Awards 2026',
    image: '/Imagenes/GAMEAWARD.jpg',
    category: 'Videojuegos',
    date: '2026-12-10',
    place: 'Los Angeles, Peacock Theater',
    description:
      'The Game Awards es la gala anual que premia lo mejor de la industria del videojuego, con estrenos mundiales, actuaciones musicales y los premios más esperados del año.',
    video: '/Videos/GameAward.mp4',
    audio: '/Audios/GameAward.mp3',
  },
  {
    id: 'xbox',
    title: 'Xbox Games Showcase',
    image: '/Imagenes/Xshowcase.png',
    category: 'Tecnología',
    date: '2026-06-14',
    place: 'Online / Los Angeles',
    description:
      'El Xbox Games Showcase es la presentación principal de Microsoft donde se revelan los títulos que llegarán a Xbox Series X|S, PC y Game Pass.',
    video: '/Videos/Xbox_ShowCase.mp4',
    audio: '/Audios/Xbox_ShowCase.mp3',
  },
  {
    id: 'nintendo-direct',
    title: 'Nintendo Direct: E3 Edition',
    image: '/Imagenes/NE3edition.png',
    category: 'Videojuegos',
    date: '2026-06-16',
    place: 'Kyoto / Digital',
    description:
      'Nintendo Direct ofrece anuncios y avances de los próximos juegos de Nintendo Switch, con sorpresas directamente desde Kyoto.',
    video: '/Videos/Nintendo_Direct.mp4',
    audio: '/Audios/Nintendo_Direct.mp3',
  },
  {
    id: 'playstation',
    title: 'PlayStation State of Play',
    image: '/Imagenes/PlayStation State of Play.jpg',
    category: 'Tecnología',
    date: '2026-05-22',
    place: 'Global Stream',
    description:
      'State of Play es la emisión de PlayStation centrada en novedades, jugabilidad y fechas de lanzamiento de los títulos para PS5.',
    video: '/Videos/State_Of_Play.mp4',
    audio: '/Audios/State_Of_Play.mp3',
  },
  {
    id: 'tokyo-game-show',
    title: 'Tokyo Game Show 2026',
    image: '/Imagenes/Tokyo Game Show 2026.png',
    category: 'Videojuegos',
    date: '2026-09-24',
    place: 'Chiba, Makuhari Messe',
    description:
      'El Tokyo Game Show es una de las mayores ferias de videojuegos del mundo, reuniendo a estudios japoneses e internacionales en Chiba.',
    video: '/Videos/TokyoGameShow.mp4',
    audio: '/Audios/TokyoGameShow.mp3',
  },
  {
    id: 'gamescom',
    title: 'Gamescom 2026',
    image: '/Imagenes/Gamescom 2026.jpg',
    category: 'Videojuegos',
    date: '2026-08-19',
    place: 'Colonia, Koelnmesse',
    description:
      'Gamescom es la feria de videojuegos más grande de Europa, con anuncios, demos jugables y novedades de las principales compañías del sector.',
    video: '/Videos/GamesCom.mp4',
    audio: '/Audios/GamesCom.mp3',
  },
]

// Helper to find one event by its id (used by the detail page).
export const getEventById = (id) => events.find((event) => event.id === id)
