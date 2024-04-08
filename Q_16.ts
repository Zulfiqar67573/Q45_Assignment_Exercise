//Question:16
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
//  Solution:

let myNew_friends:string[]=["Zulfiqar", "Attahussain", "Islamdin","Asadullah"]
     myNew_friends.map((items)=>
     console.log(`Dear ${items},I found a bigger dinner table so iam invited more people.`))
  //Iam adding a new guest in the beginning of array.
    myNew_friends.unshift("Imtiaz")
    console.log(myNew_friends)
    //Iam adding a new Guest in middle Array.
     myNew_friends.splice(3,0,"Aliraza");
     console.log(myNew_friends)

     //iam adding one new guest to the end of our list.
     
     myNew_friends.push("Ameerhussain")
      console.log(myNew_friends)
      myNew_friends.map((items)=>
      console.log(`Dear ${items},You are invited into more people list on dinner.`))