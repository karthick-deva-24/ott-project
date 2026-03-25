// ── Loading Screen Animation ──────────────────────────────────────────
(function () {
    const screen = document.getElementById('loading-screen');
    const bar    = document.getElementById('loader-bar');
    if (!screen || !bar) return;

    let progress = 0;
    const interval = setInterval(() => {
        // Fast at start, slows near 90
        const increment = progress < 70 ? Math.random() * 8 + 4
                        : progress < 90 ? Math.random() * 3 + 1
                        : 0.5;
        progress = Math.min(progress + increment, 92);
        bar.style.width = progress + '%';
    }, 100);

    window.addEventListener('load', () => {
        clearInterval(interval);
        bar.style.width = '100%';
        setTimeout(() => {
            screen.classList.add('hidden');
        }, 500);
    });
})();
// ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Movie Data
    const movies = [
  {
    "title": "Iron Man",
    "img": "assets/images/marvel_ironman2008.webp?v=1774254288644",
    "year": "2008",
    "rating": "7.9",
    "category": "Marvel"
  },
  {
    "title": "The Avengers",
    "img": "assets/images/marvel_avengers2012.webp?v=1774254289302",
    "year": "2012",
    "rating": "8.0",
    "category": "Marvel"
  },
  {
    "title": "Thor: Ragnarok",
    "img": "assets/images/marvel_thorragnarok.webp?v=1774254290145",
    "year": "2017",
    "rating": "7.9",
    "category": "Marvel"
  },
  {
    "title": "Black Panther",
    "img": "assets/images/marvel_blackpanther.webp?v=1774254290750",
    "year": "2018",
    "rating": "7.3",
    "category": "Marvel"
  },
  {
    "title": "Doctor Strange",
    "img": "assets/images/marvel_doctorstrange.webp?v=1774254291500",
    "year": "2016",
    "rating": "7.5",
    "category": "Marvel"
  },
  {
    "title": "Captain America: The First Avenger",
    "img": "assets/images/marvel_captainamerica.webp?v=1774254292261",
    "year": "2011",
    "rating": "6.9",
    "category": "Marvel"
  },
  {
    "title": "Spider-Man: Homecoming",
    "img": "assets/images/marvel_spidermanhome.webp?v=1774254292842",
    "year": "2017",
    "rating": "7.4",
    "category": "Marvel"
  },
  {
    "title": "Guardians of the Galaxy",
    "img": "assets/images/marvel_gotgvol1.webp?v=1774254293488",
    "year": "2014",
    "rating": "8.0",
    "category": "Marvel"
  },
  {
    "title": "Ghostbusters",
    "img": "assets/images/columbia_ghostbusters84.webp?v=1774254294382",
    "year": "1984",
    "rating": "7.8",
    "category": "Thriller"
  },
  {
    "title": "Men in Black",
    "img": "assets/images/columbia_meninblack.webp?v=1774254295241",
    "year": "1997",
    "rating": "7.3",
    "category": "Thriller"
  },
  {
    "title": "Jumanji",
    "img": "assets/images/columbia_jumanji1995.webp?v=1774254296099",
    "year": "1995",
    "rating": "7.1",
    "category": "Thriller"
  },
  {
    "title": "Spider-Man 2",
    "img": "assets/images/columbia_spiderman2.webp?v=1774254296690",
    "year": "2004",
    "rating": "7.5",
    "category": "Thriller"
  },
  {
    "title": "The Karate Kid",
    "img": "assets/images/columbia_karatekid.webp?v=1774254297728",
    "year": "1984",
    "rating": "7.3",
    "category": "Thriller"
  },
  {
    "title": "Venom",
    "img": "assets/images/columbia_venom2018.webp?v=1774254298650",
    "year": "2018",
    "rating": "6.6",
    "category": "Thriller"
  },
  {
    "title": "Bad Boys",
    "img": "assets/images/columbia_badboys95.webp?v=1774254299635",
    "year": "1995",
    "rating": "6.8",
    "category": "Thriller"
  },
  {
    "title": "Zombieland",
    "img": "assets/images/columbia_zombieland.webp?v=1774254300522",
    "year": "2009",
    "rating": "7.6",
    "category": "Thriller"
  },
  {
    "title": "Top Gun: Maverick",
    "img": "assets/images/paramount_topgunmav.webp?v=1774254301343",
    "year": "2022",
    "rating": "8.3",
    "category": "Entertainment"
  },
  {
    "title": "Mission: Impossible - Fallout",
    "img": "assets/images/paramount_fallout.webp?v=1774254302232",
    "year": "2018",
    "rating": "7.7",
    "category": "Entertainment"
  },
  {
    "title": "Transformers",
    "img": "assets/images/paramount_transformers07.webp?v=1774254303074",
    "year": "2007",
    "rating": "7.0",
    "category": "Entertainment"
  },
  {
    "title": "Titanic",
    "img": "assets/images/paramount_titanic97.webp?v=1774254303637",
    "year": "1997",
    "rating": "7.9",
    "category": "Entertainment"
  },
  {
    "title": "Interstellar",
    "img": "assets/images/paramount_interstellar.webp?v=1774254304239",
    "year": "2014",
    "rating": "8.7",
    "category": "Entertainment"
  },
  {
    "title": "Forrest Gump",
    "img": "assets/images/paramount_forrestgump.webp?v=1774254304786",
    "year": "1994",
    "rating": "8.8",
    "category": "Entertainment"
  },
  {
    "title": "Raiders of the Lost Ark",
    "img": "assets/images/paramount_raiders.webp?v=1774254305816",
    "year": "1981",
    "rating": "8.4",
    "category": "Entertainment"
  },
  {
    "title": "Star Trek",
    "img": "assets/images/paramount_startrek09.webp?v=1774254306409",
    "year": "2009",
    "rating": "7.9",
    "category": "Entertainment"
  },
  {
    "title": "Dune: Part Two",
    "img": "assets/images/trending_dune2.webp?v=1774254919760",
    "year": "2024",
    "rating": "8.8",
    "category": "Trending"
  },
  {
    "title": "Oppenheimer",
    "img": "assets/images/trending_oppenheimer.webp?v=1774254920775",
    "year": "2023",
    "rating": "8.4",
    "category": "Trending"
  },
  {
    "title": "Avatar: The Way of Water",
    "img": "assets/images/trending_avatar2.webp?v=1774254921582",
    "year": "2022",
    "rating": "7.6",
    "category": "Trending"
  },
  {
    "title": "The Batman",
    "img": "assets/images/trending_thebatman.webp?v=1774254922415",
    "year": "2022",
    "rating": "7.8",
    "category": "Trending"
  },
  {
    "title": "John Wick: Chapter 4",
    "img": "assets/images/trending_jw4.webp?v=1774254923171",
    "year": "2023",
    "rating": "7.7",
    "category": "Trending"
  },
  {
    "title": "Everything Everywhere All at Once",
    "img": "assets/images/trending_eeaao.webp?v=1774254924104",
    "year": "2022",
    "rating": "7.8",
    "category": "Trending"
  },
  {
    "title": "Barbie",
    "img": "assets/images/trending_barbie.webp?v=1774254924928",
    "year": "2023",
    "rating": "6.9",
    "category": "Trending"
  },
  {
    "title": "The Creator",
    "img": "assets/images/trending_thecreator.webp?v=1774254925972",
    "year": "2023",
    "rating": "6.8",
    "category": "Trending"
  },
  {
    "title": "Spider-Man: Across the Spider-Verse",
    "img": "assets/images/trending_spiderverse2.webp?v=1774254926861",
    "year": "2023",
    "rating": "8.6",
    "category": "Trending"
  },
  {
    "title": "The Super Mario Bros. Movie",
    "img": "assets/images/trending_mario.webp?v=1774254927633",
    "year": "2023",
    "rating": "7.1",
    "category": "Trending"
  },
  {
    "title": "Naruto",
    "img": "assets/images/anime_naruto.webp?v=1774254928413",
    "year": "2002",
    "rating": "8.4",
    "category": "Anime"
  },
  {
    "title": "Jujutsu Kaisen",
    "img": "assets/images/anime_jjk.webp?v=1774254929350",
    "year": "2020",
    "rating": "8.6",
    "category": "Anime"
  },
  {
    "title": "Attack on Titan",
    "img": "assets/images/anime_aot.webp?v=1774254930139",
    "year": "2013",
    "rating": "9.1",
    "category": "Anime"
  },
  {
    "title": "Demon Slayer: Kimetsu no Yaiba",
    "img": "assets/images/anime_demonslayer.webp?v=1774254930994",
    "year": "2019",
    "rating": "8.7",
    "category": "Anime"
  },
  {
    "title": "One Piece",
    "img": "assets/images/anime_onepiece.webp?v=1774254931920",
    "year": "1999",
    "rating": "9.0",
    "category": "Anime"
  },
  {
    "title": "My Hero Academia",
    "img": "assets/images/anime_mha.webp?v=1774254933059",
    "year": "2016",
    "rating": "8.3",
    "category": "Anime"
  },
  {
    "title": "Death Note",
    "img": "assets/images/anime_deathnote.webp?v=1774254933987",
    "year": "2006",
    "rating": "8.9",
    "category": "Anime"
  },
  {
    "title": "Bleach",
    "img": "assets/images/anime_bleach.webp?v=1774254934889",
    "year": "2004",
    "rating": "8.2",
    "category": "Anime"
  },
  {
    "title": "The Dark Knight",
    "img": "assets/images/movie_page_tdk.webp?v=1774261879005",
    "year": "2008",
    "rating": "9.0",
    "category": "DC"
  },
  {
    "title": "Inception",
    "img": "assets/images/movie_page_inception.webp?v=1774261879823",
    "year": "2010",
    "rating": "8.8",
    "category": "MoviesPage"
  },
  {
    "title": "Pulp Fiction",
    "img": "assets/images/movie_page_pulpfiction.webp?v=1774261880631",
    "year": "1994",
    "rating": "8.9",
    "category": "MoviesPage"
  },
  {
    "title": "The Matrix",
    "img": "assets/images/movie_page_matrix.webp?v=1774261881523",
    "year": "1999",
    "rating": "8.7",
    "category": "MoviesPage"
  },
  {
    "title": "Gladiator",
    "img": "assets/images/movie_page_gladiator.webp?v=1774261882389",
    "year": "2000",
    "rating": "8.5",
    "category": "MoviesPage"
  },
  {
    "title": "Jurassic Park",
    "img": "assets/images/movie_page_jpark.webp?v=1774261883147",
    "year": "1993",
    "rating": "8.2",
    "category": "MoviesPage"
  },
  {
    "title": "Fight Club",
    "img": "assets/images/movie_page_fightclub.webp?v=1774261883917",
    "year": "1999",
    "rating": "8.8",
    "category": "MoviesPage"
  },
  {
    "title": "The Shawshank Redemption",
    "img": "assets/images/movie_page_shawshank.webp?v=1774261884801",
    "year": "1994",
    "rating": "9.3",
    "category": "MoviesPage"
  },
  {
    "title": "Goodfellas",
    "img": "assets/images/movie_page_goodfellas.webp?v=1774261885618",
    "year": "1990",
    "rating": "8.7",
    "category": "MoviesPage"
  },
  {
    "title": "Se7en",
    "img": "assets/images/movie_page_se7en.webp?v=1774261886591",
    "year": "1995",
    "rating": "8.6",
    "category": "MoviesPage"
  },
  {
    "title": "Back to the Future",
    "img": "assets/images/movie_page_bttf.webp?v=1774261887772",
    "year": "1985",
    "rating": "8.5",
    "category": "MoviesPage"
  },
  {
    "title": "The Terminator",
    "img": "assets/images/movie_page_terminator.webp?v=1774261888949",
    "year": "1984",
    "rating": "8.1",
    "category": "MoviesPage"
  },
  {
    "title": "Terminator 2: Judgment Day",
    "img": "assets/images/movie_page_t2.webp?v=1774261889761",
    "year": "1991",
    "rating": "8.6",
    "category": "MoviesPage"
  },
  {
    "title": "Alien",
    "img": "assets/images/movie_page_alien.webp?v=1774261890532",
    "year": "1979",
    "rating": "8.5",
    "category": "MoviesPage"
  },
  {
    "title": "Aliens",
    "img": "assets/images/movie_page_aliens.webp?v=1774261891565",
    "year": "1986",
    "rating": "8.4",
    "category": "MoviesPage"
  },
  {
    "title": "Blade Runner 2049",
    "img": "assets/images/movie_page_br2049.webp?v=1774261892352",
    "year": "2017",
    "rating": "8.0",
    "category": "MoviesPage"
  },
  {
    "title": "Mad Max: Fury Road",
    "img": "assets/images/movie_page_madmax.webp?v=1774261893191",
    "year": "2015",
    "rating": "8.1",
    "category": "MoviesPage"
  },
  {
    "title": "Saving Private Ryan",
    "img": "assets/images/movie_page_ryan.webp?v=1774261894103",
    "year": "1998",
    "rating": "8.6",
    "category": "MoviesPage"
  },
  {
    "title": "The Godfather",
    "img": "assets/images/movie_page_godfather.webp?v=1774261894811",
    "year": "1972",
    "rating": "9.2",
    "category": "MoviesPage"
  },
  {
    "title": "The Godfather Part II",
    "img": "assets/images/movie_page_gf2.webp?v=1774261895528",
    "year": "1974",
    "rating": "9.0",
    "category": "MoviesPage"
  },
  {
    "title": "Toy Story",
    "img": "assets/images/movie_page_toystory.webp?v=1774261896613",
    "year": "1995",
    "rating": "8.3",
    "category": "MoviesPage"
  },
  {
    "title": "Finding Nemo",
    "img": "assets/images/movie_page_nemo.webp?v=1774261898075",
    "year": "2003",
    "rating": "8.2",
    "category": "MoviesPage"
  },
  {
    "title": "Up",
    "img": "assets/images/movie_page_up.webp?v=1774261899182",
    "year": "2009",
    "rating": "8.3",
    "category": "MoviesPage"
  },
  {
    "title": "WALL·E",
    "img": "assets/images/movie_page_walle.webp?v=1774261900070",
    "year": "2008",
    "rating": "8.4",
    "category": "MoviesPage"
  },
  {
    "title": "Logan",
    "img": "assets/images/movie_page_logan.webp?v=1774261901275",
    "year": "2017",
    "rating": "8.1",
    "category": "MoviesPage"
  },
  {
    "title": "Joker",
    "img": "assets/images/movie_page_joker.webp?v=1774261902162",
    "year": "2019",
    "rating": "8.4",
    "category": "MoviesPage"
  },
  {
    "title": "The Departed",
    "img": "assets/images/movie_page_departed.webp?v=1774261902921",
    "year": "2006",
    "rating": "8.5",
    "category": "MoviesPage"
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "img": "assets/images/movie_page_lotr1.webp?v=1774261903754",
    "year": "2001",
    "rating": "8.8",
    "category": "MoviesPage"
  },
  {
    "title": "The Lord of the Rings: The Two Towers",
    "img": "assets/images/movie_page_lotr2.webp?v=1774261904768",
    "year": "2002",
    "rating": "8.8",
    "category": "MoviesPage"
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "img": "assets/images/movie_page_lotr3.webp?v=1774261905568",
    "year": "2003",
    "rating": "9.0",
    "category": "Marvel"
  },
  {
    "title": "The Shining",
    "img": "assets/images/movie_page_shining.webp?v=1774263282823",
    "year": "1980",
    "rating": "8.4",
    "category": "MoviesPage"
  },
  {
    "title": "Casablanca",
    "img": "assets/images/movie_page_casablanca.webp?v=1774263283471",
    "year": "1942",
    "rating": "8.5",
    "category": "MoviesPage"
  },
  {
    "title": "The Big Lebowski",
    "img": "assets/images/movie_page_lebowski.webp?v=1774263284138",
    "year": "1998",
    "rating": "8.1",
    "category": "MoviesPage"
  },
  {
    "title": "Good Will Hunting",
    "img": "assets/images/movie_page_gwh.webp?v=1774263284802",
    "year": "1997",
    "rating": "8.3",
    "category": "MoviesPage"
  },
  {
    "title": "Schindler's List",
    "img": "assets/images/movie_page_schindler.webp?v=1774263285397",
    "year": "1993",
    "rating": "9.0",
    "category": "MoviesPage"
  },
  {
    "title": "A Clockwork Orange",
    "img": "assets/images/movie_page_clockwork.webp?v=1774263285979",
    "year": "1971",
    "rating": "8.3",
    "category": "Disney"
  },
  {
    "title": "Taxi Driver",
    "img": "assets/images/movie_page_taxidriver.webp?v=1774263286729",
    "year": "1976",
    "rating": "8.2",
    "category": "MoviesPage"
  },
  {
    "title": "Star Wars: Episode IV - A New Hope",
    "img": "assets/images/movie_page_starwars4.webp?v=1774263287359",
    "year": "1977",
    "rating": "8.6",
    "category": "MoviesPage"
  },
  {
    "title": "The Empire Strikes Back",
    "img": "assets/images/movie_page_empire.webp?v=1774263287982",
    "year": "1980",
    "rating": "8.7",
    "category": "MoviesPage"
  },
  {
    "title": "E.T. the Extra-Terrestrial",
    "img": "assets/images/movie_page_et.webp?v=1774263288617",
    "year": "1982",
    "rating": "7.9",
    "category": "MoviesPage"
  },
  {
    "title": "Jaws",
    "img": "assets/images/movie_page_jaws.webp?v=1774263289220",
    "year": "1975",
    "rating": "8.1",
    "category": "MoviesPage"
  },
  {
    "title": "Rocky",
    "img": "assets/images/movie_page_rocky.webp?v=1774263289826",
    "year": "1976",
    "rating": "8.1",
    "category": "MoviesPage"
  },
  {
    "title": "Die Hard",
    "img": "assets/images/movie_page_diehard.webp?v=1774263290612",
    "year": "1988",
    "rating": "8.2",
    "category": "MoviesPage"
  },
  {
    "title": "The Sixth Sense",
    "img": "assets/images/movie_page_sixthsense.webp?v=1774263291274",
    "year": "1999",
    "rating": "8.2",
    "category": "MoviesPage"
  },
  {
    "title": "Braveheart",
    "img": "assets/images/movie_page_braveheart.webp?v=1774263291901",
    "year": "1995",
    "rating": "8.3",
    "category": "MoviesPage"
  },
  {
    "title": "No Country for Old Men",
    "img": "assets/images/movie_page_nocountry.webp?v=1774263292533",
    "year": "2007",
    "rating": "8.2",
    "category": "MoviesPage"
  },
  {
    "title": "There Will Be Blood",
    "img": "assets/images/movie_page_twbb.webp?v=1774263293139",
    "year": "2007",
    "rating": "8.2",
    "category": "MoviesPage"
  },
  {
    "title": "The Grand Budapest Hotel",
    "img": "assets/images/movie_page_grandbudapest.webp?v=1774263293769",
    "year": "2014",
    "rating": "8.1",
    "category": "MoviesPage"
  },
  {
    "title": "Django Unchained",
    "img": "assets/images/movie_page_django.webp?v=1774263294748",
    "year": "2012",
    "rating": "8.4",
    "category": "MoviesPage"
  },
  {
    "title": "The Truman Show",
    "img": "assets/images/movie_page_truman.webp?v=1774263295435",
    "year": "1998",
    "rating": "8.2",
    "category": "MoviesPage"
  },
  {
    "title": "Breaking Bad",
    "img": "assets/images/tv_page_bb.webp?v=1774263296087",
    "year": "2008",
    "rating": "9.5",
    "category": "TVShowsPage"
  },
  {
    "title": "Game of Thrones",
    "img": "assets/images/tv_page_got.webp?v=1774263296815",
    "year": "2011",
    "rating": "9.2",
    "category": "TVShowsPage"
  },
  {
    "title": "The Wire",
    "img": "assets/images/tv_page_wire.webp?v=1774263297690",
    "year": "2002",
    "rating": "9.3",
    "category": "TVShowsPage"
  },
  {
    "title": "The Sopranos",
    "img": "assets/images/tv_page_sopranos.webp?v=1774263298337",
    "year": "1999",
    "rating": "9.2",
    "category": "TVShowsPage"
  },
  {
    "title": "Stranger Things",
    "img": "assets/images/tv_page_stranger.webp?v=1774263299132",
    "year": "2016",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "The Office",
    "img": "assets/images/tv_page_office.webp?v=1774263299834",
    "year": "2005",
    "rating": "9.0",
    "category": "TVShowsPage"
  },
  {
    "title": "Friends",
    "img": "assets/images/tv_page_friends.webp?v=1774263300575",
    "year": "1994",
    "rating": "8.9",
    "category": "TVShowsPage"
  },
  {
    "title": "Seinfeld",
    "img": "assets/images/tv_page_seinfeld.webp?v=1774263301290",
    "year": "1989",
    "rating": "8.9",
    "category": "TVShowsPage"
  },
  {
    "title": "The Simpsons",
    "img": "assets/images/tv_page_simpsons.webp?v=1774263302198",
    "year": "1989",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "South Park",
    "img": "assets/images/tv_page_southpark.webp?v=1774263302975",
    "year": "1997",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "Rick and Morty",
    "img": "assets/images/tv_page_ram.webp?v=1774263303638",
    "year": "2013",
    "rating": "9.1",
    "category": "TVShowsPage"
  },
  {
    "title": "BoJack Horseman",
    "img": "assets/images/tv_page_bojack.webp?v=1774263304394",
    "year": "2014",
    "rating": "8.8",
    "category": "TVShowsPage"
  },
  {
    "title": "Fargo",
    "img": "assets/images/tv_page_fargo.webp?v=1774263305068",
    "year": "2014",
    "rating": "8.9",
    "category": "TVShowsPage"
  },
  {
    "title": "True Detective",
    "img": "assets/images/tv_page_td.webp?v=1774263306000",
    "year": "2014",
    "rating": "8.9",
    "category": "TVShowsPage"
  },
  {
    "title": "Peaky Blinders",
    "img": "assets/images/tv_page_peaky.webp?v=1774263306641",
    "year": "2013",
    "rating": "8.8",
    "category": "TVShowsPage"
  },
  {
    "title": "Better Call Saul",
    "img": "assets/images/tv_page_bcs.webp?v=1774263307316",
    "year": "2015",
    "rating": "9.0",
    "category": "TVShowsPage"
  },
  {
    "title": "Mad Men",
    "img": "assets/images/tv_page_madmen.webp?v=1774263308055",
    "year": "2007",
    "rating": "8.6",
    "category": "TVShowsPage"
  },
  {
    "title": "Succession",
    "img": "assets/images/tv_page_succession.webp?v=1774263308679",
    "year": "2018",
    "rating": "8.8",
    "category": "TVShowsPage"
  },
  {
    "title": "The Crown",
    "img": "assets/images/tv_page_crown.webp?v=1774263309551",
    "year": "2016",
    "rating": "8.6",
    "category": "TVShowsPage"
  },
  {
    "title": "Chernobyl",
    "img": "assets/images/tv_page_chernobyl.webp?v=1774263310147",
    "year": "2019",
    "rating": "9.3",
    "category": "TVShowsPage"
  },
  {
    "title": "Band of Brothers",
    "img": "assets/images/tv_page_bob.webp?v=1774263310765",
    "year": "2001",
    "rating": "9.4",
    "category": "TVShowsPage"
  },
  {
    "title": "The Last of Us",
    "img": "assets/images/tv_page_tlou.webp?v=1774263311407",
    "year": "2023",
    "rating": "8.8",
    "category": "TVShowsPage"
  },
  {
    "title": "House of the Dragon",
    "img": "assets/images/tv_page_hotd.webp?v=1774263312038",
    "year": "2022",
    "rating": "8.5",
    "category": "TVShowsPage"
  },
  {
    "title": "The Mandalorian",
    "img": "assets/images/tv_page_mando.webp?v=1774263312705",
    "year": "2019",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "The Boys",
    "img": "assets/images/tv_page_theboys.webp?v=1774263313484",
    "year": "2019",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "Ted Lasso",
    "img": "assets/images/tv_page_tedlasso.webp?v=1774263314146",
    "year": "2020",
    "rating": "8.8",
    "category": "TVShowsPage"
  },
  {
    "title": "Severance",
    "img": "assets/images/tv_page_severance.webp?v=1774263314779",
    "year": "2022",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "Ozark",
    "img": "assets/images/tv_page_ozark.webp?v=1774263315505",
    "year": "2017",
    "rating": "8.5",
    "category": "TVShowsPage"
  },
  {
    "title": "Dark",
    "img": "assets/images/tv_page_dark.webp?v=1774263316270",
    "year": "2017",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "Money Heist",
    "img": "assets/images/tv_page_moneyheist.webp?v=1774263316940",
    "year": "2017",
    "rating": "8.2",
    "category": "TVShowsPage"
  },
  {
    "title": "Narcos",
    "img": "assets/images/tv_page_narcos.webp?v=1774263317857",
    "year": "2015",
    "rating": "8.8",
    "category": "TVShowsPage"
  },
  {
    "title": "Black Mirror",
    "img": "assets/images/tv_page_blackmirror.webp?v=1774263318600",
    "year": "2011",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "Sherlock",
    "img": "assets/images/tv_page_sherlock.webp?v=1774263319403",
    "year": "2010",
    "rating": "9.1",
    "category": "TVShowsPage"
  },
  {
    "title": "Dexter",
    "img": "assets/images/tv_page_dexter.webp?v=1774263320072",
    "year": "2006",
    "rating": "8.6",
    "category": "TVShowsPage"
  },
  {
    "title": "House",
    "img": "assets/images/tv_page_house.webp?v=1774263320796",
    "year": "2004",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "Lost",
    "img": "assets/images/tv_page_lost.webp?v=1774263321631",
    "year": "2004",
    "rating": "8.3",
    "category": "TVShowsPage"
  },
  {
    "title": "Prison Break",
    "img": "assets/images/tv_page_pb.webp?v=1774263322338",
    "year": "2005",
    "rating": "8.3",
    "category": "TVShowsPage"
  },
  {
    "title": "The Walking Dead",
    "img": "assets/images/tv_page_twd.webp?v=1774263323002",
    "year": "2010",
    "rating": "8.1",
    "category": "TVShowsPage"
  },
  {
    "title": "Supernatural",
    "img": "assets/images/tv_page_supernatural.webp?v=1774263323638",
    "year": "2005",
    "rating": "8.4",
    "category": "TVShowsPage"
  },
  {
    "title": "Doctor Who",
    "img": "assets/images/tv_page_drwho.webp?v=1774263324487",
    "year": "2005",
    "rating": "8.6",
    "category": "TVShowsPage"
  },
  {
    "title": "The X-Files",
    "img": "assets/images/tv_page_xfiles.webp?v=1774263325184",
    "year": "1993",
    "rating": "8.6",
    "category": "TVShowsPage"
  },
  {
    "title": "Twin Peaks",
    "img": "assets/images/tv_page_twinpeaks.webp?v=1774263325868",
    "year": "1990",
    "rating": "8.8",
    "category": "TVShowsPage"
  },
  {
    "title": "Mindhunter",
    "img": "assets/images/tv_page_mindhunter.webp?v=1774263326634",
    "year": "2017",
    "rating": "8.6",
    "category": "TVShowsPage"
  },
  {
    "title": "Mr. Robot",
    "img": "assets/images/tv_page_mrrobot.webp?v=1774263327401",
    "year": "2015",
    "rating": "8.5",
    "category": "TVShowsPage"
  },
  {
    "title": "Fleabag",
    "img": "assets/images/tv_page_fleabag.webp?v=1774263328056",
    "year": "2016",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "Arrested Development",
    "img": "assets/images/tv_page_ad.webp?v=1774263329093",
    "year": "2003",
    "rating": "8.7",
    "category": "TVShowsPage"
  },
  {
    "title": "Parks and Recreation",
    "img": "assets/images/tv_page_parks.webp?v=1774263329845",
    "year": "2009",
    "rating": "8.6",
    "category": "TVShowsPage"
  },
  {
    "title": "Brooklyn Nine-Nine",
    "img": "assets/images/tv_page_b99.webp?v=1774263330626",
    "year": "2013",
    "rating": "8.4",
    "category": "TVShowsPage"
  },
  {
    "title": "It's Always Sunny in Philadelphia",
    "img": "assets/images/tv_page_iasip.webp?v=1774263331292",
    "year": "2005",
    "rating": "8.8",
    "category": "TVShowsPage"
  },
  {
    "title": "Curb Your Enthusiasm",
    "img": "assets/images/tv_page_curb.webp?v=1774263331969",
    "year": "2000",
    "rating": "8.8",
    "category": "TVShowsPage"
  }
];

    // ── Netflix-style Movie Modal ─────────────────────────────────────────
    // Inject modal HTML once into the DOM
    if (!document.getElementById('movie-modal')) {
        document.body.insertAdjacentHTML('beforeend', `
        <div id="movie-modal" class="modal-overlay">
            <div class="modal-box">
                <button class="modal-close-btn" id="modal-close-btn"><i class="ri-arrow-left-line"></i> Back</button>

                <div class="modal-trailer-wrap" id="modal-trailer-wrap">
                    <!-- Movie backdrop/poster shown as preview -->
                    <img id="modal-preview-img" src="" alt="" class="modal-preview-img">

                    <!-- Fake play button overlay -->
                    <div class="modal-video-overlay" id="modal-video-overlay">
                        <div class="modal-big-play" id="modal-big-play">
                            <i class="ri-play-fill"></i>
                        </div>
                        <div class="modal-404-error" id="modal-404-error">
                            <div class="error-code">404</div>
                            <div class="error-msg">Content Not Found</div>
                            <div class="error-sub">This content is unavailable or not licensed in your region. Please upgrade your plan.</div>
                            <button class="btn btn-secondary error-dismiss" id="error-dismiss"><i class="ri-close-line"></i> Dismiss</button>
                        </div>
                    </div>
                </div>

                <div class="modal-body">
                    <div class="modal-info-row">
                        <div>
                            <h2 class="modal-title" id="modal-title"></h2>
                            <div class="modal-meta" id="modal-meta"></div>
                        </div>
                        <button class="btn btn-primary modal-play-btn" id="modal-play-btn">
                            <i class="ri-play-fill"></i> Play
                        </button>
                    </div>

                    <!-- Error Toast -->
                    <div class="modal-error-toast" id="modal-error-toast">
                        <i class="ri-error-warning-line"></i>
                        <span>Content not available. Please upgrade your plan to watch.</span>
                    </div>

                    <!-- Related Movies -->
                    <h3 class="modal-related-title">More Like This</h3>
                    <div class="modal-related-grid" id="modal-related-grid"></div>
                </div>
            </div>
        </div>
        `);
    }

    const modal = document.getElementById('movie-modal');
    const modalPreviewImg = document.getElementById('modal-preview-img');
    const modalVideoOverlay = document.getElementById('modal-video-overlay');
    const modalBigPlay = document.getElementById('modal-big-play');
    const modal404 = document.getElementById('modal-404-error');
    const errorDismiss = document.getElementById('error-dismiss');
    const modalTitle = document.getElementById('modal-title');
    const modalMeta = document.getElementById('modal-meta');
    const modalPlayBtn = document.getElementById('modal-play-btn');
    const modalClose = document.getElementById('modal-close-btn');
    const modalErrorToast = document.getElementById('modal-error-toast');
    const modalRelatedGrid = document.getElementById('modal-related-grid');

    const show404 = () => {
        modalBigPlay.style.display = 'none';
        modal404.classList.add('visible');
    };

    // Clicking the big play button OR the preview image shows 404
    modalBigPlay.addEventListener('click', show404);
    modalVideoOverlay.addEventListener('click', (e) => {
        if (e.target === modalVideoOverlay) show404();
    });

    // Dismiss 404 overlay
    errorDismiss.addEventListener('click', (e) => {
        e.stopPropagation();
        modal404.classList.remove('visible');
        modalBigPlay.style.display = 'flex';
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        modal404.classList.remove('visible');
        modalBigPlay.style.display = 'flex';
        modalErrorToast.classList.remove('visible');
    };

    const openModal = (movie) => {
        // Set title & meta
        modalTitle.textContent = movie.title;
        modalMeta.innerHTML = `
            <span class="modal-year">${movie.year}</span>
            <span class="modal-rating"><i class="ri-star-fill"></i> ${movie.rating}</span>
            <span class="modal-category">${movie.category}</span>
        `;

        // Show movie poster as preview background
        modalPreviewImg.src = movie.img;

        // Reset 404 state
        modal404.classList.remove('visible');
        modalBigPlay.style.display = 'flex';
        // Related movies logic: Match category or fallback to any random movies
        let relatedFiltered = movies.filter(m => m.category === movie.category && m.title !== movie.title);
        if (relatedFiltered.length === 0) {
            relatedFiltered = movies.filter(m => m.title !== movie.title);
        }
        const related = relatedFiltered.sort(() => 0.5 - Math.random()).slice(0, 6);

        modalRelatedGrid.innerHTML = '';
        related.forEach(rel => {
            const relCard = document.createElement('div');
            relCard.className = 'modal-related-card';
            relCard.innerHTML = `
                <img src="${rel.img}" alt="${rel.title}">
                <div class="modal-related-info">
                    <div class="modal-related-name">${rel.title}</div>
                    <div class="modal-related-meta">${rel.year} · <i class="ri-star-fill"></i>${rel.rating}</div>
                </div>
            `;
            relCard.addEventListener('click', () => openModal(rel));
            modalRelatedGrid.appendChild(relCard);
        });

        // Reset play-error state
        modalErrorToast.classList.remove('visible');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Play button → error
    modalPlayBtn.addEventListener('click', () => {
        modalErrorToast.classList.add('visible');
        setTimeout(() => modalErrorToast.classList.remove('visible'), 4000);
    });

    // Close triggers
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // Hero Play Button Trigger (Galactic Warriors)
    const heroPlayData = {
        title: "Galactic Warriors",
        img: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop",
        year: "1991",
        rating: "4.7",
        category: "ACTION - ADVENTURE"
    };

    const heroPlayBtn = document.getElementById('hero-play-btn');
    if (heroPlayBtn) {
        heroPlayBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(heroPlayData);
        });
    }

    // Add global 404 overlay to body if not exists
    if (!document.getElementById('global-404')) {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="global-404" class="error-404-overlay">
                <div class="error-404-content">
                    <div class="error-404-code">404</div>
                    <div class="error-404-msg">Content Not Found</div>
                    <p class="error-404-sub">The page or content you are trying to access is currently unavailable or doesn't exist in our library.</p>
                    <button class="error-404-btn" id="close-404"><i class="ri-arrow-left-line"></i> Back to Safety</button>
                </div>
            </div>
        `);
    }

    const global404 = document.getElementById('global-404');
    const close404 = document.getElementById('close-404');

    // Global 404 Trigger
    const showGlobal404 = (e) => {
        if (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
        global404.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    close404.addEventListener('click', () => {
        global404.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Attach 404 to specified elements
    const attach404Listeners = () => {
        // 1. Social Media Icons & Hero "Save for later"
        document.querySelectorAll('.social-icons a, .btn-secondary i.ri-bookmark-line').forEach(el => {
            const btn = el.closest('a') || el.closest('button');
            if(btn) btn.addEventListener('click', showGlobal404);
        });

        // Specific fix for "Save for later" buttons (sometimes they are just .btn-secondary)
        document.querySelectorAll('.btn-secondary').forEach(btn => {
            if (btn.textContent.includes('Save for later')) {
                btn.addEventListener('click', showGlobal404);
            }
        });

        // 2. Footer Links (Specifically Help & Support and Features sections) 
        document.querySelectorAll('.footer-links .link-group').forEach((group, index) => {
             if (index > 0) { // Skip "Navigate" (index 0)
                 group.querySelectorAll('ul li a').forEach(link => {
                     link.addEventListener('click', showGlobal404);
                 });
             }
        });

        // Also ensure "Plans" link in Features is caught
        document.querySelectorAll('.footer-links a').forEach(link => {
             const txt = link.textContent.toLowerCase();
             if (txt.includes('plans') || txt.includes('contact us')) {
                 link.addEventListener('click', showGlobal404);
             }
        });

        // 3. Service Page - Select Plan Buttons
        document.querySelectorAll('.plan-btn').forEach(btn => btn.addEventListener('click', showGlobal404));

        // 4. Contact Page - Info Icons & Form
        document.querySelectorAll('.info-block > div').forEach(div => {
            div.style.cursor = 'pointer';
            div.addEventListener('click', showGlobal404);
        });

        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Clear any existing tooltips
                document.querySelectorAll('.input-tooltip').forEach(t => t.remove());
                document.querySelectorAll('.input-error-shake').forEach(i => i.classList.remove('input-error-shake'));

                const inputs = contactForm.querySelectorAll('input, textarea');
                let firstEmpty = null;

                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        if (!firstEmpty) firstEmpty = input;
                        
                        // Add shake class
                        input.classList.add('input-error-shake');
                        
                        // Create Tooltip
                        const tooltip = document.createElement('div');
                        tooltip.className = 'input-tooltip';
                        tooltip.innerText = 'Fill these slots';
                        
                        // Ensure parent is relative for positioning
                        const parent = input.parentElement;
                        parent.style.position = 'relative';
                        
                        parent.appendChild(tooltip);
                        
                        // Position tooltip exactly above input
                        tooltip.style.bottom = (input.offsetHeight + 10) + 'px';
                        tooltip.style.left = '10px';
                        
                        // Remove after some time
                        setTimeout(() => tooltip.remove(), 3000);
                        setTimeout(() => input.classList.remove('input-error-shake'), 400);
                    }
                });

                if (!firstEmpty) {
                    showGlobal404();
                } else {
                    firstEmpty.focus();
                }
            });
        }
        // 5. User & Admin Dashboard Special Triggers (Event Delegation for Dynamics)
        document.body.addEventListener('click', (e) => {
            const el = e.target;
            
            // Check for Cards or Dashboard Images (Continue Watching / Recommended)
            const isDashItem = el.closest('.cw-card') || (el.closest('#dashboard') && el.tagName === 'IMG' && !el.closest('.movies-grid'));
            if (isDashItem) return showGlobal404(e);

            // Check for Buttons (Dash, Action, Table, Section)
            const btn = el.closest('.dash-btn') || el.closest('.action-btns button') || el.closest('.recent-users-table button') || el.closest('.admin-section button');
            if (btn) {
                // If it's already handled (contact form), or is a logout button, skip
                if (btn.closest('.contact-form')) return;
                const txt = btn.textContent.toLowerCase();
                if (!txt.includes('logout') && !txt.includes('back')) {
                    showGlobal404(e);
                }
            }
        });
    };

    attach404Listeners();
    // ─────────────────────────────────────────────────────────────────────

    // Function to generate movie cards (with modal click)
    const generateMovieCards = (containerId, sourceArray) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const items = sourceArray || movies;
        const shuffled = [...items].sort(() => 0.5 - Math.random());

        shuffled.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <div class="overlay">
                    <div class="play-circle">
                        <i class="ri-play-fill"></i>
                    </div>
                </div>
                <div class="card-info">
                    <div class="card-title">${movie.title}</div>
                    <div class="card-meta">
                        <span>${movie.year}</span>
                        <span><i class="ri-star-fill" style="color:var(--accent)"></i> ${movie.rating}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => openModal(movie));
            container.appendChild(card);
        });
    };


    // Populate rows
    generateMovieCards('trending-row', movies.filter(m => m.category === 'Trending'));
    generateMovieCards('marvel-row', movies.filter(m => m.category === 'Marvel'));
    generateMovieCards('thriller-row', movies.filter(m => m.category === 'Thriller'));
    generateMovieCards('entertainment-row', movies.filter(m => m.category === 'Entertainment'));
    generateMovieCards('anime-row', movies.filter(m => m.category === 'Anime'));

    // Horizontal Scrolling Buttons
    const setupSliders = () => {
        const sliders = document.querySelectorAll('.slider-container');
        
        sliders.forEach(slider => {
            const leftBtn = slider.querySelector('.slider-btn.left');
            const rightBtn = slider.querySelector('.slider-btn.right');
            const row = slider.querySelector('.movie-row');

            const scrollAmount = 300; // Adjust scroll amount as needed

            leftBtn.addEventListener('click', () => {
                row.scrollBy({
                    top: 0,
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            rightBtn.addEventListener('click', () => {
                row.scrollBy({
                    top: 0,
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
        });
    };

    setupSliders();


    const tvShowsGridContainer = document.getElementById('tvshows-page-grid');
    if (tvShowsGridContainer) {
        const tvShowsOnly = movies.filter(m => m.category === 'TVShowsPage');
        tvShowsOnly.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <div class="overlay">
                    <div class="play-circle">
                        <i class="ri-play-fill"></i>
                    </div>
                </div>
                <div class="card-info">
                    <div class="card-title">${movie.title}</div>
                    <div class="card-meta">
                        <span>${movie.year}</span>
                        <span><i class="ri-star-fill" style="color:var(--accent)"></i> ${movie.rating}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => openModal(movie));
            tvShowsGridContainer.appendChild(card);
        });
    }

    // Setup Movies Page Grid if exists
    const moviesGridContainer = document.getElementById('movies-page-grid');
    if (moviesGridContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('cat');
        
        let moviesToDisplay = [];
        const mainContent = document.querySelector('.movie-section');
        
        // Remove existing dynamic title if any
        if (mainContent) {
            const existingTitle = mainContent.querySelector('.section-title');
            if (existingTitle) existingTitle.remove();
        }

        if (catParam) {
            moviesToDisplay = movies.filter(m => m.category === catParam);
            if (mainContent) {
                 const catTitle = document.createElement('h2');
                 catTitle.className = 'section-title';
                 catTitle.style.marginBottom = '30px';
                 catTitle.style.padding = '0 5%';
                 catTitle.innerHTML = `<i class="ri-movie-2-fill" style="color:var(--accent); margin-right:10px;"></i> All ${catParam} Movies`;
                 mainContent.insertBefore(catTitle, moviesGridContainer);
            }
        } else {
            moviesToDisplay = movies.filter(m => m.category === 'MoviesPage');
            if (mainContent) {
                 const catTitle = document.createElement('h2');
                 catTitle.className = 'section-title';
                 catTitle.style.marginBottom = '30px';
                 catTitle.style.padding = '0 5%';
                 catTitle.innerHTML = `<i class="ri-film-line" style="color:var(--accent); margin-right:10px;"></i> All Movies`;
                 mainContent.insertBefore(catTitle, moviesGridContainer);
            }
        }

        moviesGridContainer.innerHTML = ''; // Clear container first
        if (moviesToDisplay.length === 0) {
            moviesGridContainer.innerHTML = '<p style="color:var(--text-secondary); padding: 0 5%; grid-column: 1/-1;">No movies found for this category.</p>';
        } else {
            moviesToDisplay.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <div class="overlay">
                    <div class="play-circle">
                        <i class="ri-play-fill"></i>
                    </div>
                </div>
                <div class="card-info">
                    <div class="card-title">${movie.title}</div>
                    <div class="card-meta">
                        <span>${movie.year}</span>
                        <span><i class="ri-star-fill" style="color:var(--accent)"></i> ${movie.rating}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => openModal(movie));
            moviesGridContainer.appendChild(card);
        });
        }
    }

    // ── Live Search Autocomplete ──────────────────────────────────────────
    const searchInput = document.getElementById('search-input');
    const searchDropdown = document.getElementById('search-dropdown');

    if (searchInput && searchDropdown) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();

            if (query.length === 0) {
                searchDropdown.classList.remove('active');
                searchDropdown.innerHTML = '';
                return;
            }

            const results = movies.filter(m =>
                m.title.toLowerCase().includes(query)
            ).slice(0, 8); // Max 8 suggestions

            searchDropdown.innerHTML = '';

            if (results.length === 0) {
                searchDropdown.innerHTML = '<div class="search-no-results">No results found</div>';
            } else {
                results.forEach(m => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.innerHTML = `
                        <img src="${m.img}" alt="${m.title}" onerror="this.style.display='none'">
                        <div class="search-result-text">
                            <div class="search-result-title">${m.title}</div>
                            <div class="search-result-meta">
                                <span>${m.year}</span>
                                <span><i class="ri-star-fill"></i>${m.rating}</span>
                                <span style="color:var(--accent); font-size:11px;">${m.category}</span>
                            </div>
                        </div>
                    `;
                    item.addEventListener('click', () => {
                        searchDropdown.classList.remove('active');
                        searchDropdown.innerHTML = '';
                        searchInput.value = '';
                        openModal(m);
                    });
                    searchDropdown.appendChild(item);
                });
            }

            searchDropdown.classList.add('active');
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.closest('.search-box').contains(e.target)) {
                searchDropdown.classList.remove('active');
                searchDropdown.innerHTML = '';
            }
        });

        // Clear on Escape key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchDropdown.classList.remove('active');
                searchDropdown.innerHTML = '';
                searchInput.blur();
            }
        });
    }
    // ─────────────────────────────────────────────────────────────────────
});

// ── 3D Tilt Effect on Movie Cards ────────────────────────────────────────
(function () {
    const TILT_MAX   = 12;   // max degrees rotation
    const SCALE      = 1.06; // scale on hover
    const GLOW_COLOR = '94, 232, 82'; // accent green

    function applyTilt(card, e) {
        const rect   = card.getBoundingClientRect();
        const cx     = rect.left + rect.width  / 2;
        const cy     = rect.top  + rect.height / 2;
        const dx     = e.clientX - cx;
        const dy     = e.clientY - cy;
        const rotY   =  (dx / (rect.width  / 2)) * TILT_MAX;
        const rotX   = -(dy / (rect.height / 2)) * TILT_MAX;

        // Move shine based on cursor position (0%–100%)
        const px = ((e.clientX - rect.left) / rect.width)  * 100;
        const py = ((e.clientY - rect.top)  / rect.height) * 100;

        card.style.transform        = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;
        card.style.boxShadow        = `0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(${GLOW_COLOR},0.25)`;
        card.style.zIndex           = '50';
        card.style.setProperty('--shine-x', `${px}%`);
        card.style.setProperty('--shine-y', `${py}%`);
        card.classList.add('tilt-active');
    }

    function resetTilt(card) {
        card.style.transform  = '';
        card.style.boxShadow  = '';
        card.style.zIndex     = '';
        card.classList.remove('tilt-active');
    }

    // Use event delegation — works for dynamically created cards
    document.addEventListener('mousemove', (e) => {
        const card = e.target.closest('.movie-card');
        if (!card) return;
        applyTilt(card, e);
    });

    document.addEventListener('mouseleave', (e) => {
        const card = e.target.closest('.movie-card');
        if (!card) return;
        resetTilt(card);
    }, true);

    document.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.movie-card');
        if (!card) return;
        if (!card.contains(e.relatedTarget)) resetTilt(card);
    });
})();
// ─────────────────────────────────────────────────────────────────────

// ── Parallax Hero & Scroll Reveal Animations ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Parallax Effect
    const heroBgImage = document.querySelector('.hero-bg img');
    if (heroBgImage) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            // Parallax - Move background slower than scrolling speed
            if (scrollPos <= window.innerHeight) {
                heroBgImage.style.transform = `translateY(${scrollPos * 0.4}px)`;
            }
        });
    }

    // 2. Scroll Fade-in Reveal Effect using IntersectionObserver
    // Add "reveal" class to elements we want to animate (e.g. section-headers, cards container, etc.)
    const revealElements = document.querySelectorAll('.movie-section:not(.reveal), .section-header:not(.reveal), .pricing-card:not(.reveal), .feature-item:not(.reveal)');
    
    // Automatically attach reveal class to all these elements
    revealElements.forEach(el => el.classList.add('reveal'));

    const activeRevealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Optional: animate only once
            }
        });
    }, {
        root: null,
        // Start animation slightly before the element enters viewport fully
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
    });

    activeRevealElements.forEach(el => revealObserver.observe(el));

    // 3. Page Transition Animation 
    const links = document.querySelectorAll('a[href]:not([target="_blank"])');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Allow default behavior for empty links, #links, external, or same page
            if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) {
                return;
            }

            e.preventDefault();
            
            // Add Fade & Scale-out effect to Body
            document.body.classList.add('page-transition-out');

            // Wait for transition duration (0.4s) before navigating
            setTimeout(() => {
                window.location.href = href;
            }, 400); // Wait 400ms matching CSS transition
        });
    });
});
// ─────────────────────────────────────────────────────────────────────

// ── Auth Logic for UI ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('stackly_current_user'));
    const navRight = document.querySelector('.nav-right');
    const navLinks = document.querySelector('.nav-links');

    if (currentUser && navRight) {
        // Find existing profile icon and remove it
        const profileIcon = navRight.querySelector('.profile-icon');
        if (profileIcon) {
            profileIcon.remove();
        }

        // Create user info display
        const userInfoContainer = document.createElement('div');
        userInfoContainer.className = 'user-profile-widget';
        userInfoContainer.innerHTML = `
            <div class="user-display">
                <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                <div class="user-details">
                    <span class="u-email">${currentUser.email}</span>
                    <span class="u-role ${currentUser.role === 'Admin' ? 'admin' : 'user'}">${currentUser.role}</span>
                </div>
                <i class="ri-arrow-down-s-line dropdown-arrow"></i>
            </div>
            <div class="user-dropdown">
                <a href="#" id="logout-btn"><i class="ri-logout-box-r-line"></i> Logout</a>
            </div>
        `;
        
        navRight.appendChild(userInfoContainer);

        // Add toggle logic
        const userDisplay = userInfoContainer.querySelector('.user-display');
        const dropdown = userInfoContainer.querySelector('.user-dropdown');
        
        userDisplay.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userInfoContainer.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Logout logic
        const logoutBtn = userInfoContainer.querySelector('#logout-btn');
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('stackly_current_user');
            
            if (window.location.pathname.includes('dashboard')) {
                window.location.href = 'login.html';
            } else {
                window.location.reload();
            }
        });
    } else {
        // Ensure profile icon links to login
        const profileIcon = navRight?.querySelector('.profile-icon');
        if (profileIcon) {
            profileIcon.href = 'login.html';
        }
    }
});
// ─────────────────────────────────────────────────────────────────────

