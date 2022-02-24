function login(){
    username=document.getElementById("email").value ;
    localStorage.setItem("user_name",username);
    window.location="kwitter_room.html";
    
}
