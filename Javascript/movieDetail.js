const movie_detail = [
    {
        srN:"1",
        movieName:"Coco",
        time:"140.5 min",
        Director:"John Cartor",
        genre:"Action, drama",
        fill: 4,
        line: 1,
        story:"'Coco' tells the tale of Miguel, a young boy with a passion for music, who embarks on a journey in the vibrant Land of the Dead to uncover his family's mysterious past. Against his family's ban on music, Miguel seeks the blessing of his deceased ancestors to pursue his dreams. Along the way, he encounters charming trickster Hector and discovers the importance of family, tradition, and following one's heart. With stunning animation and heartfelt storytelling, 'Coco' celebrates Mexican culture's richness, the power of memory, and the enduring bonds that transcend even death. ",
        img1:"",
        video1:"https://www.youtube.com/embed/Ga6RYejo6Hk",
        country:"india",
        language:"hindi",
        releaseDate:"13 jul 2022"
    },{
        srN:"2",
        movieName:"Mansuri",
        time:"133 min",
        Director:"don Contin",
        genre:"Action, comedy",
        fill: 3,
        line: 2,
        story:"lorem ipsume",
        img1:"",
        video1:"",
        country:"india",
        language:"hindi",
        releaseDate:"13 jul 2022"
    }
]

let movie_header_title = document.getElementsByClassName('movieProps')[0];
  let directorName = document.getElementsByClassName('directorName')[0];
  let MovieGenre = document.getElementsByClassName('MovieGenre')[0];
  let movieDur = document.getElementsByClassName('movieDur')[0];
  let country = document.querySelector('.movieDetailLeft ul li h6:nth-child(2)');
  let language = document.querySelector('.movieDetailLeft ul li:nth-child(2) h6:nth-child(2)');
  let releaseDate = document.querySelector('.movieDetailLeft ul li:nth-child(3) h6:nth-child(2)');
  let story = document.querySelector('.storyDesc p');
  let story_video = document.querySelector('.story_video iframe');

  console.log(story_video)

  let mov = movie_header_title.getAttribute('Id').split('e')[1];
  let movie_code = mov - 1;
  console.log(movie_code);

  movie_header_title.innerText = movie_detail[`${movie_code}`].movieName;
  directorName.innerText = movie_detail[`${movie_code}`].Director;
  movieDur.innerText = movie_detail[`${movie_code}`].time;
  MovieGenre.innerText = movie_detail[`${movie_code}`].genre;
  country.innerText = movie_detail[`${movie_code}`].country;
  language.innerText = movie_detail[`${movie_code}`].language;
  releaseDate.innerText = movie_detail[`${movie_code}`].releaseDate;
  story.innerText = movie_detail[`${movie_code}`].story;
  story_video.src = movie_detail[`${movie_code}`].video1;

// ========================== rating ================================== 
function appendChildren(ratingUl, childTagName, childClassName, numChildren) {
        for (let i = 0; i < numChildren; i++) {
            let child = document.createElement(childTagName);
            child.innerHTML = '<i class="' + childClassName + '"></i>';
            ratingUl.appendChild(child);
        }
    }
    let ratingUl = document.getElementById('starList'); // Get the parent element
    appendChildren(ratingUl, 'li', 'ri-star-s-fill', `${movie_detail[`${movie_code}`].fill}`); // Append filled stars
    appendChildren(ratingUl, 'li', 'ri-star-s-line', `${movie_detail[`${movie_code}`].line}`); // Append an outlined star
// ========================== rating ends==================================
