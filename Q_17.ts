// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
//Solution:

let myNew_friends:string[]=["Zulfiqar", "Attahussain", "Islamdin","Asadullah"]
//Informing that only two people can be invited
console.log("Due to limit of space i invite only two people")
//Removing guest until two people remain
while(myNew_friends.length>2){
 const removingGuest=myNew_friends.pop()
 console.log(`sory,${removingGuest},you are no longer invited to dinner.`)
}

//printing invitations to the removing two guests
myNew_friends.map((guests)=>
console.log(`Dear ${guests} You are still invited to dinner`))

//Printing the final list to conform its empty
myNew_friends.splice(0,myNew_friends.length)
console.log("final guest list:", myNew_friends)

