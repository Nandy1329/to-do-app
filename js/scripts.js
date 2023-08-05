function newItem(){

    // adding item using Jquery:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') { // if the input is empty, alert the user
        alert("You must type something before clicking add!");
    } else {
        $('#list').append(li);
    }

        // crossing out an item:
        function crossOut() { 
            li.toggleClass('strike');
        }

        li.on('dblclick', function crossOut() {   // double click will cross out the item
            li.toggleClass('strike');
        }); 

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem); 

    function deleteListItem() {
        li.addClass('delete');
    }   

    // sorting the list: 
    $('#list').sortable();
}