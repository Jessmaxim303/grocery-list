// alert('YOLO');

var listName = document.querySelector(".userListName");
var itemInput = document.querySelector(".itemInput");
var itemQuantity = document.querySelector(".itemQuantity");
var submitButton = document.querySelector(".submit-btn");
var display = document.getElementById('getList');
 
submitButton.addEventListener("click", becomeSuper); 

function becomeSuper(event){
  console.log(itemInput.value)
  event.preventDefault();
  display.innerText = listName.value + itemInput.value + itemQuantity.value;
}

// function becomeSuper(event) {
//   event.preventDefault();
//   console.log(event)
//   var newFriend = {
//     dreamCame: userNAme.value,
//     newNumber: numberInput.value,
//     howFriendly: friendlyInput.value,
//   }


//   console.log(friendList);
//   friendList.innerHTML +=  `
//     <article class="friend-card" data-friendliness=${newFriend.howFriendly}>
//       <h3>${newFriend.newName}</h3>
//       <h4>${newFriend.newNumber}</h4>
//       <p> Friendly Rating: ${newFriend.howFriendly} / 5<p>
//     </article>
//   `
// }


// 1. get text from .name and .superhero input;


// 2. submit info with button


// 3. make text appear in purple area.


// Iteration 1:
// User completes the form and clicks button. 
// User sees a sentence logged to the console
  // example: Khalid/Supersonic Hearing as the inputs
  // "Khalid has Supersonic Hearing!"
// The function that handles this takes two arguments

// Iteration 2:
// User sees that same sentence, in the purple section (card-container)

// Iteration 3: 
// Same user stories
// Function to create sentence takes only one argument - an object that holds both pieces of information