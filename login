<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login </title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

    <div class="col-md-6">
        <h2>Login</h2>
        <form action="/login" method="POST">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Masukkan email" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Masukkan password" required>
          </div>
          <button type="submit" class="btn btn-primary" id="loginForm">LOGIN</button>
        </form>
      </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script>


      const loginForm = document.getElementById('loginForm')

      loginForm.addEventListener('submit', function (event){
        event.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const formData = new FormData();
        formData.append('email', email)
        formData.append('password', password)
        console.log('Mengirim permintaan login...');

        
        fetch('/login',{
          method:'POST',
          body: formData,
  
        })
  
      .then(response=>response.json())
      .then(data=>{
        if(data.authToken){
          localStorage.setItem('authToken', data.authToken);
  
          window.location.href ='/multipleroom'
          console.log(window.location.href)
        }else{
          alert('Autentikasi gagal')
        }
      })
      .catch(error=>{
        console.log(error)
      })
      })
      
    </script>
</body>
</html>
