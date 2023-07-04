const students = [
  {
    ID: 1,
    name: "Alice",
    age: 21,
    grade: "A",
    degree: "Btech",
    email: "alice@example.com",
  },
  {
    ID: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    degree: "MBA",
    email: "bob@example.com",
  },
  {
    ID: 3,
    name: "Charlie",
    age: 20,
    grade: "C",
    degree: "Arts",
    email: "charlie@example.com",
  },
];

  onLoad(students);
// button to add the user;
const addUser = document.getElementById("addUser");

addUser.addEventListener("click" , (event) => {
  event.preventDefault();
  const table_body = document.getElementById("table-body");
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const gpa = document.getElementById("GPA").value;
  const age = document.getElementById("Age").value;
  const degree = document.getElementById("Degree").value;
  console.log(students);
  
if(name !== "" && email !== "" && gpa !== "" && age !== "" && degree !== ""){
  students.push ({ ID: `${students.length+1}`,
                  name: `${name}`,
                  age: `${age}`,
                  grade: `${gpa}`,
                  degree: `${degree}`,
                  email: `${email}`},)


                
                  onLoad(students);
                  
                  
                  document.getElementById("Name").value = "";
                  document.getElementById("Age").value = "";
                  document.getElementById("GPA").value = "";
                  document.getElementById("Degree").value = "";
                  document.getElementById("Email").value = "";
                }
                else{
                  alert("All fileds are required")
                }
      

} )

// onloading the webpage the data of the table will automatically rendered in the web page;
function onLoad(students){
  const table_body = document.getElementById("table-body");
  table_body.innerHTML = "";
    for (let i=0; i<students.length; i++){

    
    table_body.innerHTML += `<tr>
                        <td>${students[i].ID}</td>
                        <td>${students[i].name}</td>
                        <td>${students[i].email}</td>
                        <td>${students[i].age}</td>
                        <td>${students[i].grade}</td>
                        <td class="last_col">${students[i].degree}
                            <div>
                                <img src="images/edit.png" alt="edit" class="edit">
                            </div>
                            <div>
                                <img src="images/delete.png" alt="delete" class = "delete">
                            </div>
                        </td>
                        </tr?
    `
   }
  
}

document.getElementById("filter-input").addEventListener("keyup" , filterData);


// filtering the data on the basis of name email and degree................


function filterData(){
   const filterInput = document.getElementById("filter-input").value.trim().toLowerCase();
   console.log(students);
  let filterArray =  students.filter(element => {
    let name = element.name.toLowerCase();
    let email = element.email.toLowerCase();
    let degree = element.degree.toLowerCase();

   if (name.includes(filterInput) || email.includes(filterInput) || degree.includes(filterInput)){
    return element ;
   }
   });

    onLoad(filterArray);

}

// deleting the entry of a specific ith index

function deleteEntry(){
  
  // const table = document.getElementById("table");
}
document.getElementById("table").addEventListener('click' , function(event){
     if(event.target.classList.contains("delete")){
      // getting the corresponding row
          let row = (event.target.parentNode.parentNode.parentNode);

          // removing the corresponding row
          let rowToBeDelete = (row.children[0].innerText);
          // let name = (row.children[1].innerText);
          let email = (row.children[2].innerText);
          console.log(email);

        for(let i=0; i<students.length; i++){
          
          if(students[i].ID == rowToBeDelete && email == students[i].email){
           students.splice(i , 1);
           console.log(12);
           break;
          }
          
          
        }
        console.log(students);  
        onLoad(students);
     }
     else if(event.target.classList.contains("edit")){
      let row  = (event.target.parentNode.parentNode.parentNode);
      console.log(row.children[0].innerText)

                  document.getElementById("Name").value = row.children[1].innerText;
                  document.getElementById("Age").value = row.children[3].innerText;
                  document.getElementById("GPA").value = row.children[4].innerText;
                  document.getElementById("Degree").value = row.children[5].innerText;
                  document.getElementById("Email").value = row.children[2].innerText;

                  document.getElementById("addUser").innerText = "Edit Students"
                  document.getElementById("addUser").style.backgroundColor = "black";
                  document.getElementById("addUser").style.color = "white";
                  let rowToBeDelete = (row.children[0].innerText);
                  // let name = (row.children[1].innerText);
                  let email = (row.children[2].innerText);
                  console.log(email);
        
                for(let i=0; i<students.length; i++){
                  
                  if(students[i].ID == rowToBeDelete && email == students[i].email){
                   students.splice(i , 1);
                   console.log(12);
                   break;
                  }
                  
                  
                }
                console.log(students);  
                onLoad(students);
     }

     

} 
)

