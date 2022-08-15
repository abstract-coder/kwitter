//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBSH12-a3sUh8d7LfG3kc8W6-JLoKkfz3w",
      authDomain: "kwitter-f99d4.firebaseapp.com",
      databaseURL: "https://kwitter-f99d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-f99d4",
      storageBucket: "kwitter-f99d4.appspot.com",
      messagingSenderId: "33529130855",
      appId: "1:33529130855:web:106dd7ff1e45547e1bc9c2"
};
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
new_room_name = localStorage.getItem("new_room");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(new_room_name).push({
            name: username,
            message: msg,
            likes: 0
      });
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; 
                  childData = childSnapshot.val(); 
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        user_name= message_data['name'];
                        message = message_data['message'];
                        likes = message_data['likes'];
                        //End code
                  }
            });
      });
}
getData();
