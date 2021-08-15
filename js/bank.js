document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    //console.log('button clicked');
    const emailField=document.getElementById('user-email').value;
    //const userEmail=emailField.value;
    //console.log(emailField);

    //get pass
    const passwordField=document.getElementById('user-password').value;

     if (emailField == 'meh@johu.com' && passwordField == 'secret'){
         window.location.href='banking.html';
     }
})


