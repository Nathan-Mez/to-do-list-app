
function newItem(){

  let li = $('<li/>').append($('#input').val())

//1. Adding item to List
  if (!$('#input').val()) {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", crossOut);

//3. Adding a delete button
  let crossOutButton = $('<crossOutButton>X</crossOutButton>')
                        .appendTo(li)
                        .on("click", deleteListItem);

   function deleteListItem(){
 		 li.addClass("delete")
 	}
 // 4. Reordering the items:
   $('#list').sortable();

}
