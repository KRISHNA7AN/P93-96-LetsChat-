// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI3r02l3DQXFvYOaelX8hM16E08uTmLrQ",
    authDomain: "kwitterc93-d70da.firebaseapp.com",
    databaseURL: "https://kwitterc93-d70da-default-rtdb.firebaseio.com",
    projectId: "kwitterc93-d70da",
    storageBucket: "kwitterc93-d70da.appspot.com",
    messagingSenderId: "118579337054",
    appId: "1:118579337054:web:a8e7144f9b36e5c5e721cf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS HERE
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  console.log("Room Name - " = Room_names);
  row = "<div class='room_name' id="+Room_names+"onclick'redirectToRoomName(this.id' >#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML=+ row;
        //End code
        });});}
  getData();
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location="LetsChat_page.html";
  }
  
  function redirectToRoomName(name)
  {
    console.log(name)
    localStorage.setItem("room_name", name);
    window.location = "LetsChat_page.html";
  }
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
  window.location = "index.html";
  }
  
  