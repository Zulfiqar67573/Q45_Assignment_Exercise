
// 3. Name Cases: Store a person’s name in a variable,and then print that person’s name in lowercase, uppercase, and titlecase.


///Lowercase In Name

let userName:string="Zulfiqar Ali"
console.log( userName.toLowerCase())



//UpperCase

let person_Name:string="Zulfiqar Ali";
 console.log(`Uppercase : ${person_Name.toUpperCase()}`);

 
 //titleCase

let personName:string="Qadir Bux";
function titleCase(personName:string){
    let name;
    name=personName.toLowerCase().split("");
    for(let i=0; i< personName.length; i++){
        name[i]=name[i].charAt(0).toUpperCase()+name [i].slice(1);
    }
    return name.join(" ");
}
 console.log(`Titlecase: ${titleCase("qadir bux")}`);


        



