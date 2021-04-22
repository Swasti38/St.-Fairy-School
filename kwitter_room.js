
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyAmM606WXRjGLZIf-C4IC4IMnzZz-QYcfs",
      authDomain: "kwitter-app-3a09a.firebaseapp.com",
      databaseURL: "https://kwitter-app-3a09a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-3a09a",
      storageBucket: "kwitter-app-3a09a.appspot.com",
      messagingSenderId: "373768363284",
      appId: "1:373768363284:web:bb776d1318b40e4e37f601",
      measurementId: "G-7V04SFFESV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
