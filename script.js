function submitForm() {
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
  
    // Get selected food options
    var foodOptions = document.querySelectorAll('input[type="checkbox"]:checked');
    var selectedFoods = Array.from(foodOptions).map(option => option.value).join(', ');
  
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
  
    // Create a table row and append to the table
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow(tableBody.rows.length);
    newRow.insertCell(0).innerHTML = firstName;
    newRow.insertCell(1).innerHTML = lastName;
    newRow.insertCell(2).innerHTML = address;
    newRow.insertCell(3).innerHTML = pincode;
    newRow.insertCell(4).innerHTML = gender;
    newRow.insertCell(5).innerHTML = selectedFoods;
    newRow.insertCell(6).innerHTML = state;
    newRow.insertCell(7).innerHTML = country;
  
    // Clear form fields
    document.getElementById('myForm').reset();
  }
  