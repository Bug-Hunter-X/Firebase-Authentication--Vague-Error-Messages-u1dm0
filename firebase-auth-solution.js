// Improved error handling for Firebase Authentication
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Successfully signed in: ", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Firebase Authentication Error:", errorCode, errorMessage);
    // Handle specific error codes (e.g., 'auth/wrong-password', 'auth/user-not-found')
    if (errorCode === 'auth/wrong-password') {
      // Display a user-friendly message to the user.
      alert('Incorrect password. Please try again.');
    } else if (errorCode === 'auth/user-not-found') {
      alert('User not found. Please check your email and try again.');
    } else {
      // Display a more generic message
      alert('Authentication failed. Please try again later.');
    }
  });