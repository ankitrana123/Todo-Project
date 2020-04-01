let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')

function addItem(){
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
      })
      ulTasks.append(listItem) 
      inpNewTask.val('')
      toggleInputButtons()

       //toggle the done class when clicking on a list item
       listItem.click(() => {
        listItem.toggleClass('done')
      })
      
}

function clearDone() {
    $('#ulTasks .done').remove()
    toggleInputButtons()

  }

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
  }

  function toggleInputButtons() {
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
  }

//call the addItem func on clicking the btnAdd
btnAdd.click(() => {
    
       addItem();
       
  
})

inpNewTask.on('input', toggleInputButtons)

//key press event ie. if Enter is pressed to handle the addition an item to list
inpNewTask.keypress( (e)=>{
    if(e.which==13) {
        addItem();
    }
})

btnReset.click(() => {
    inpNewTask.val('')
    toggleInputButtons()
  })  
//call the clean up function to clear the <li> with strike i.e. .done
btnCleanup.click(clearDone)

//Puts all the selected items to the last of the list
btnSort.click(sortTasks)

