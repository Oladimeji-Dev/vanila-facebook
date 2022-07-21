/// to open the modal
var openBtn = document.getElementById("modalbtn");
// the modal itself so that we can add the properties
var modal = document.getElementById("modal");
//the x key to close it
var closeModal = document.getElementsByClassName("closeModal")[0];

openBtn.addEventListener('click',openModal);
closeModal.addEventListener('click',exitModal);
window.addEventListener('click',outsideClick);

function openModal (){
    //to  open the modal
    modal.style.display = "block";   
}
function exitModal() {
    modal.style.display = 'none';
}
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
    
}

