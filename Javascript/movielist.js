const movie_items = [
    { 
      srNumber:1,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_FMjpg_UY2835_.jpg",
      name: "coco",
      description: "196 min <span>|</span> Animation.",
      url:'movie-1.html'
    },
    { 
      srNumber:2,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      name: "Klaus",
      description: "120 min <span>|</span> animation"
    },
    {
      srNumber:3,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_FMjpg_UX1080_.jpg",
      name: "Zootopia",
      description: "120 min <span>|</span> animation"
    },
    {
      srNumber:4,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BZmYxZjg3OWEtNzg5Yi00M2YzLWI1YzYtYTQ0NTgwNzhjN2E1XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      name: "Finding Nemo",
      description: "16 min <span>|</span> Animation"
    },
    {
      srNumber:5,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UY3000_.jpg",
      name: "Encanto",
      description: "16 min <span>|</span> Animation"
    },
    {
      srNumber:6,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UY3000_.jpg",
      name: "Luca",
      description: "16 min <span>|</span> Animation"
    },
    {
      srNumber:7,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BNDU1NDg5ZjYtNTM0NS00NzBmLWE5MzMtYzc5Mjc4MDQ2YWViXkEyXkFqcGdeQXVyODk1NzM2MjE@._V1_QL75_UY562_CR9,0,380,562_.jpg",
      name: "Doraemon : Nobita's Dorabian Nights (1991)",
      description: "16 min <span>|</span> Animation"
    },
    {
      srNumber:8,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      name: "Fast Five",
      description: "16 min <span>|</span> Action, comedy"
    },
    {
      srNumber:9,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      name: "Spiderman : No way home",
      description: "176 min <span>|</span> CGI, vfs"
    },
    {
      srNumber:10,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY562_CR4,0,380,562_.jpg",
      name: "Kung fu panda",
      description: "16 min <span>|</span> Animation"
    },
    {
      srNumber:11,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BNGZiZjE2MWEtZjg4Ny00YmZiLWJhZjMtNjg5YzgwY2JmYjQ1XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg",
      name: "Moana",
      description: "196 min <span>|</span> Animation"
    },
    {
      srNumber:12,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BZGIxMmFmMTQtMzI5Yi00YmZkLTljYzQtNzIzOTZjOTYyNzFlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY12000_.jpg",
      name: "Money Heist (2017)",
      description: "41 Ep <span>|</span> Animation"
    },
    {
      srNumber:13,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BOTJlY2U2ZmYtMzU3Ny00ZDI3LWEwMDYtOWIxNzdhZDI5ZWRkXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_QL75_UY562_CR24,0,380,562_.jpg",
      name: "12th Fail",
      description: "147 min <span>|</span> Education"
    },
    {
      srNumber:14,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BNzFkM2FhMzQtYjUwZi00N2Y3LWFkZWItMmZmMjQxNGQwZmNhXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_QL75_UY562_CR35,0,380,562_.jpg",
      name: "Jai Bhim",
      description: "164 Min <span>|</span> Awareness"
    },
    {
      srNumber:15,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR5,0,380,562_.jpg",
      name: "3 idiots",
      description: "170 Min <span>|</span> Education, Comedy"
    },
    {
      srNumber:16,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BMmQwMzdiOGMtNGZiYS00YjgyLWJlMjItYzQ3Nzc2OGIwYjQwXkEyXkFqcGdeQXVyMzQ1MTM3NjY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      name: "Captain Underpants",
      description: "89 Min <span>|</span> Animation, Comedy"
    },
    {
      srNumber:17,
      imgsrc : "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      name: "Avengers: Endgame",
      description: "181 Min <span>|</span> Sci-fi, Action"
    }
    
    ];
    