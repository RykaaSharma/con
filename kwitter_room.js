const app = initializeApp(firebaseConfig);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE-emA0fTg3EL0CoXe70YS1XGbXRtfHII",
  authDomain: "project-94-39c72.firebaseapp.com",
  projectId: "project-94-39c72",
  storageBucket: "project-94-39c72.appspot.com",
  messagingSenderId: "453542096702",
  appId: "1:453542096702:web:778ff283617d0d9e8ec66f",
  measurementId: "G-1C1MBDJT86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



 
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);
        
     window.location = "kwitter_page.html";
    //End code
    
    
getData();

function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_room.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    } 