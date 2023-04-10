import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'chaowow'];

// axios.get('https://api.github.com/users/Chaowow')
// .then(res => {
//   console.log(res.data);
// })
// .catch(err => {
//   console.log(err);
// });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

// axios.get('https://api.github.com/users/Chaowow')
// .then(res => {
//   document.querySelector('.cards').appendChild(myFunction(res.data));
// })
// .catch(err => {
//   console.log(err);
// });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

for (let i = 0; i < followersArray.length; i++) {
  getGitCard(followersArray[i]);
}

function getGitCard(username) {
  axios.get(`https://api.github.com/users/${username}`)
.then(res => {
  document.querySelector('.cards').appendChild(myFunction(res.data));
})
.catch(err => {
  console.log(err);
});
};

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function myFunction(object) {
  const divWrapper = document.createElement('div');
  const imgURL = document.createElement('img');
  const divInfo = document.createElement('div');
  const heading = document.createElement('h3');
  const pUsername = document.createElement('p');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');
  const aHref = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowering = document.createElement('p');
  const pBio = document.createElement('p');

  divWrapper.appendChild(imgURL);
  divWrapper.appendChild(divInfo);
  divInfo.appendChild(heading);
  divInfo.appendChild(pUsername);
  divInfo.appendChild(pLocation);
  divInfo.appendChild(pProfile);
  divInfo.appendChild(pFollowers);
  divInfo.appendChild(pFollowering);
  divInfo.appendChild(pBio);
  pProfile.appendChild(aHref);

  divWrapper.classList.add('card');
  divInfo.classList.add('card-info');
  heading.classList.add('name');
  pUsername.classList.add('username');

  imgURL.src = object.avatar_url;
  heading.textContent = object.name;
  pUsername.textContent = object.login;
  pLocation.textContent = 'Location:' + object.location;
  pProfile.textContent = 'Profile:';
  aHref.href = object.html_url;
  aHref.textContent = object.html_url;
  pProfile.appendChild(aHref);
  pFollowers.textContent = 'Followers:' + object.followers;
  pFollowering.textContent = 'Following:' + object.following;
  pBio.textContent = 'Bio:' + object.bio

  
  return divWrapper;

}
myFunction();

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
