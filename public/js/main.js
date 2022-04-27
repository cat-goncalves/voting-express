const button = document.querySelectorAll('.voteButton')

Array.from(button).forEach(element => {
  element.addEventListener('click', function(){
    console.log(this)
  })
})