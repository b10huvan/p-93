
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCW_Sw4mLWhaN1C1TkBIbauzIBXzWe9Cko",
  authDomain: "kwitter-appp-a1a63.firebaseapp.com",
  projectId: "kwitter-appp-a1a63",
  storageBucket: "kwitter-appp-a1a63.appspot.com",
  messagingSenderId: "112763510672",
  appId: "1:112763510672:web:fc5379e750c480eda91d15",
  measurementId: "G-FZE542MJ2H"
};
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name" , room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+ Room_names);
row="<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}