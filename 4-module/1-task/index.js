function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  ul.innerHTML = `<li>${friends[0].firstName} ${friends[0].lastName}</li><li>${friends[1].firstName} ${friends[1].lastName}</li><li>${friends[2].firstName} ${friends[2].lastName}</li>`;
  return ul;
}