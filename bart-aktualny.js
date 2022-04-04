// //zadanie 1.

// const people = [
//   {
//     firstName: "Bartolomeo",
//     lastName: "Lozano",
//   },
// ];
// // 1.a
// const ziom = people[0].firstName

// function getNickname() {
//   // kombinowałem z pętlą wywala mi tylko litere 'b' i nie wiem dlaczego nie chce mi iterować dalej ;/
//   // let nick = ``
//   // for (i = ziom[0]; i <= ziom[2]; i++){
//   //     nick += i
//   // }
//   // return nick
//   const char = ziom[0]
//   const char2 = ziom[1]
//   const char3 = ziom[2]
//   const char4 = `${char}${char2}${char3}`
//   const nickname = char4.split('').reverse().join('');
//   return nickname.toLowerCase()
  
// }
// const nickname = people.map(()=> {
//   return {
//     firstName: people[0].firstName,
//     lastName: people[0].lastName,
//     nickname: getNickname(people.firstName),
//   }
// })
// console.log(nickname)
//  // zadanie 1.b
//  const last = people[0].lastName

// function getNickname2(lastName) {

//   const char = last[last.length - 1]
//   const char2 = last[last.length - 2]
//   const char3 = last[last.length - 3]
//   const nickname2 = `${char}${char2}${char3}`
//   return nickname2.toLowerCase()
// }
// const nickname2 = nickname.map((lastname) => {
//   return {
//     firstName: nickname[0].firstName,
//     lastName: nickname[0].lastName,
//     nickname: nickname[0].nickname + `${getNickname2(people.lastName)}`
//   }
// })
// console.log(nickname2)

//zadanie 2.

const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
  },
];




