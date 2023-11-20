document
  .getElementById("imageInput")
  .addEventListener("change", handleImageUpload);

function handleImageUpload() {
  const input = document.getElementById("imageInput");
  const gallery = document.getElementById("imageGallery");

  for (const file of input.files) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageElement = document.createElement("img");
      imageElement.src = e.target.result;
      imageElement.classList.add("image");
      gallery.appendChild(imageElement);
    };

    reader.readAsDataURL(file);
  }
}

function login() {
  gapi.load("auth2", function () {
    gapi.auth2.init({
      client_id: "angular-fin-405710",
    });
  });

  function googleSignIn() {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(
        function (googleUser) {
          const profile = googleUser.getBasicProfile();
          const email = profile.getEmail();

          alert("Logged in with Google. Email: " + email);
        },
        function (error) {
          console.error("Google Sign-In failed:", error);
        }
      );
  }

  console.log("Login with Gmail");
  alert("Login button clicked");
}

function signup() {
  gapi.load("auth2", function () {
    gapi.auth2.init({
      client_id: "YOUR_GOOGLE_CLIENT_ID",
    });
  });

  function googleSignIn() {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(
        function (googleUser) {
          const profile = googleUser.getBasicProfile();
          const email = profile.getEmail();

          alert("Signed up with Google. Email: " + email);
        },
        function (error) {
          console.error("Google Sign-In failed:", error);
        }
      );
  }

  console.log("Sign up with Gmail");
  alert("Signup button clicked");
}

function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

function openSignupModal() {
  document.getElementById("signupModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("signupModal").style.display = "none";
}
