
function showSalary(users, age){
  let str = ""
  users.filter(item => item["age"] <= age).forEach((item, index, array) => {
    str += item["name"] + ", " + item["balance"]
    if (index != array.length - 1) str += "\n"
  });
  return str
}