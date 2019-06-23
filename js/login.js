$(document).ready(function (e) {
  $('#recover').click(function (e) {
    e.preventDefault()

    $('.splas').hide()
    $('.registro_user').hide()
    $('.recuperar').show()
  })

  $('#registro').click(function (e) {
    e.preventDefault()

    $('.recuperar').hide()
    $('.splas').hide()
    $('.registro_user').show()
  })
})
