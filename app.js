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
// let container = document.get 
//declaration  for the sign up
let newFirstName = document.getElementById('firstName')
let newSurName = document.getElementById('surName')
let newEmailName = document.getElementById('newEmail')
let newPassword = document.getElementById('newPassword')
let createAccount = document.getElementById('modalCreate')
let logdetails = document.getElementById('logdetails')
let Dmodal = document.getElementById("modal");

form.addEventListener('submit',handleLogin)
createAccount.addEventListener('click',handleCreateAcct)




function handleLogin(event){
    
    if(email.value.trim() !== "" && password.value.trim() !== '' ){
        passed()

    }else{
        showAlert('error','please enter details')
       
    }

    event.preventDefault()
}

function handleCreateAcct(){
    if(newFirstName.value.trim() !== "" && newSurName.value.trim() !== '' && newEmailName.value.trim() !== "" && newPassword.value.trim() !== ''){

        let duplicate = false
        
        database.forEach((data)=>{
            if(data.email === newEmailName.value){
                duplicate = true
            }
        })

        if(duplicate !== true){
            let data = {
                surName: newSurName.value,
                firstName: newFirstName.value,
                password: newPassword.value,
                email: newEmailName.value
            }
            let news = {
                email: newEmailName.value,
                timeLine: `${newFirstName.value} ${newSurName.value} WELCOME TO YOUR FACEBOOK`
            }
    
            create(data,news)
            showAlert('success',"Account Created")
            Dmodal.style.display = 'none';
        }else{
            showAlert('error',"Email has already being taken")
        }

        

    }else{
        showAlert('error','please enter details')
       
    }
}

// to show the alert 

function showAlert(result,message){
    logdetails.innerHTML = `<div class = ${result}>${message}</div>`
    setTimeout(()=>{
        logdetails.innerHTML = ''
    },2000)
}




function create(data,news){

    database.push(data)
    newFeeds.push(news)

    console.log(database)
    console.log(newFeeds)

}

let result = {
    found: null,
    email:''
}

function passed(){

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

        showAlert('success','Welcome Back')
        form.innerHTML = `
        <div class = 'loading'>
            <img src="loading.gif" >
        </div>`

    }else{
        showAlert('error','Cannot find username or password')
    }
}