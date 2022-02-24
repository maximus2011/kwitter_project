const firebaseConfig = {
      apiKey: "AIzaSyDt4Wqqf8iXWO5jbeWhts7cvL8lHJrG6QI",
      authDomain: "kwitter-7323b.firebaseapp.com",
      databaseURL: "https://kwitter-7323b-default-rtdb.firebaseio.com",
      projectId: "kwitter-7323b",
      storageBucket: "kwitter-7323b.appspot.com",
      messagingSenderId: "1024085694361",
      appId: "1:1024085694361:web:457db5bf79d72319a52508"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="welcome "+ username +  " !";
function add_room(){
      Room_name=document.getElementById("room_name").value;
localStorage.setItem("room",Room_name);
firebase.database().ref("/").child(Room_name).update({
      purpose:"adding room name"
});
window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoRoomname(name){
console.log(name);
localStorage.setItem("room",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room");
      window.location="index.html";
      
}