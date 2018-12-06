// Get modal element
var modal = document.getElementById('simpleModal')

// Get modal button
var modalBtn = document.getElementById('modalBtn')

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0]; // need to look this up...why we had to specify the array position of the element

// listen for open click
modalBtn.addEventListener('click', openModal)

// function to open modal
function openModal () {
  modal.style.display = 'block'
}

// listen for close click
closeBtn.addEventListener('click', closeModal)

// function to close modal
function closeModal () {
  modal.style.display = 'none'
}

// listen for click outside modal when modal is on display
window.addEventListener('click', clickOutside)

// function to close modal if it is being displayed and a click occurs out it
function clickOutside (e) {
  if (e.target == modal) {
    console.log('registered a click')
    modal.style.display = 'none'
  }
}
