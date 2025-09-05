function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("تم التسجيل بنجاح!");
      updateUI(userCredential.user);
    })
    .catch(error => alert(error.message));
}

function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("تم تسجيل الدخول!");
      updateUI(userCredential.user);
    })
    .catch(error => alert(error.message));
}

function googleSignIn() {
  auth.signInWithPopup(provider)
    .then(result => {
      alert("تم تسجيل الدخول بـ Google!");
      updateUI(result.user);
    })
    .catch(error => alert(error.message));
}

function signOut() {
  auth.signOut().then(() => {
    alert("تم تسجيل الخروج!");
    document.getElementById('auth-section').style.display = "block";
    document.getElementById('project-section').style.display = "none";
  });
}

auth.onAuthStateChanged(user => {
  if (user) updateUI(user);
  else {
    document.getElementById('auth-section').style.display = "block";
    document.getElementById('project-section').style.display = "none";
  }
});

function updateUI(user) {
  document.getElementById('auth-section').style.display = "none";
  document.getElementById('project-section').style.display = "block";
  document.getElementById('user-info').innerText = "مرحباً، " + (user.displayName || user.email);
               }
