//Get each input

const firstNameInput = document.querySelector('#first-name')
const lastNameInput =  document.querySelector('#last-name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

const form = document.querySelector('#register-form')
const submitButton = document.querySelector('#submit')

function checkSubmit(e) {
  e.preventDefault()
  console.log('evento cancelado')

  //Checando condições e validando input first-name
  let firstName = firstNameInput.value
  if(firstName == ' ' || firstName == undefined) {
    firstNameInput.classList.add('error')
  }


  //Checando condições e validando input second-name
  let secondName = secondNameInput.value
  if(secondName == ' ' || secondName == undefined) {
    firstNameInput.classList.add('error')
  }

  //Checando condições e validando input email
  let userEmail = emailInput.value
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if(!validateEmail(userEmail)) {
    emailInput.classList.add('email-error')
  }

  //checando condições e validando input password
  if(passwordInput == undefined || passwordInput == ' ') {
    passwordInput.classList.add('error')
  } 

}

