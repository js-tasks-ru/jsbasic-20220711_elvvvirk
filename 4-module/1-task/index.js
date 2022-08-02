function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  let str =""
  for (let key of friends){
    str += `<li> ${key.firstName} ${key.lastName} </li>` +'\n'
  }
  ul.innerHTML = str
  return ul
}
