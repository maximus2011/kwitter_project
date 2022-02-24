//YOUR FIREBASE LINKS
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
  username=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room");
  function send(){
        msg=document.getElementById("message").value;
        firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
        });
        document.getElementById("message").value="";
        
        
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
namewithtag="<h4>"+Name+"<img class='user_tick' src='tick.png'> </h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spanwithatag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button> <hr>";
row=namewithtag+messagewithtag+likebutton+spanwithatag;
document.getElementById("output").innerHTML+=row;


//End code
    } });  }); }
getData();
function updatelike(message_id){
  console.log("clicked on like button "+message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_like=Number(likes)+1;
  console.log(updated_like);
  firebase.database().ref(room_name).child(message_id).update({
    like:updated_like
  });
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room");
  window.location="kwitter.html";
  
}