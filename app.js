let database = [
    {
        surName: 'Saliman',
        firstName: 'Abdulwasiu',
        password: '68523973',
        email: 'salimanoladimeji@gmail.com'   
    },
    {
        surName: 'Suleiman',
        firstName: 'Mohammed',
        password: '55521033',
        email: 'suleimanmohammed@gmail.com'   
    },
    {
        surName: 'Chikezie',
        firstName: 'Ebube',
        password: '11223344',
        email: 'ebubechikezie@gmail.com'   
    },
]

let newFeeds = [
    {
        email: 'salimanoladimeji@gmail.com',
        timeLine: 'SALIMAN ABDULWASIU WELCOME TO YOUR FACEBOOK'
    },
    {
        email: 'suleimanmohammed@gmail.com',
        timeLine: 'SULEIMAN MOHAMMED WELCOME TO YOUR FACEBOOK'  
    },
    {
        email: 'ebubechikezie@gmail.com',
        timeLine: 'EBUBE CHIKEZIE WELCOME TO YOUR FACEBOOK' 
    },
]


//declarations of the variables
let email = document.getElementById('email')
let password = document.getElementById('password')
let btnLogin = document.getElementById('btnLogin')
let form = document.getElementById('form')
let container = document.get 
//declaration  for the sign up
let newFirstName = document.getElementById('firstName')
let newSurName = document.getElementById('surName')
let newEmailName = document.getElementById('newEmail')
let newPassword = document.getElementById('newPassword')
let createAccount = document.getElementById('modalCreate')

form.addEventListener('submit',handleLogin)




function handleLogin(event){
    let result = {
        found: null,
        email:''
    }
    
    database.forEach((data)=>{
        if(data.email === email.value && data.password == password.value){
            result.found = true
            result.email = data.email
            
        }
    })

    email.value = ''
    password.value = ''

    if(result.found){
        // document.body.style.background = 'white'
        // document.body.innerHTML = `
        // <div class = 'loading'>
        //     <img src="loading.gif" >
        // </div>`
        // console.log(result)
        form.innerHTML = `
        <div class = 'loading'>
            <img src="loading.gif" >
        </div>`

    }else{
        
    }


    event.preventDefault()
}