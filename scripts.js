document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if username and password are correct (dummy validation)
    if (username === 'user' && password === 'password') {
        window.location.href = 'welcome.html';
      document.getElementById('message').innerHTML = 'Login successful!';
    } else {
      document.getElementById('message').innerHTML = 'Invalid username or password.';
    }
  });
  