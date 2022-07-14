// Submit event listener
document.querySelector('#r-form').addEventListener('submit', function(e){
    e.preventDefault();

    // Dark mode users are too cool to wait
    if (document.body.classList.contains('dark')) return endResult();

    // Hide the results
    document.querySelector('#results').style.display = 'none';
    // Show the loading animation
    document.querySelector('#loading').style.display = 'block';
    document.querySelector('#cope').style.display = 'none';

    setTimeout(endResult, 1000);
});

// Calculate the results
function endResult(){
    // Declare UI variables
    var name = document.getElementById('name');
    var rollNo = document.getElementById('rollNo');
    var emailId = document.getElementById('emailId');
    var mobNo = document.getElementById('mobNo');
    var issue = document.getElementById('issue');
    var copyPaste = document.getElementById('copyPaste');

    if(name && rollNo && emailId && mobNo && issue){
        copyPaste.value = "Name: "+ name.value+ '\r\n' + "Roll No.: "+ rollNo.value+ '\r\n' +"Email Id: "+ emailId.value+'\r\n' + "Mobile No: "+ mobNo.value+ '\r\n' +"Issue: "+ issue.value;
        document.querySelector('#results').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';
        document.querySelector('#cope').style.display = 'block';
    } else {
        // Show an error message
        showError('Some values are left blank');
    }
}

// Show error on invalid input
function showError(error){
    const copyPaste = "Yes"
    // Hide the results and loader
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'none';

    // Create a div for the error message
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add a class to the error message div
    errorDiv.className = 'alert alert-danger';
    
    // Create a text nod and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert the error message above the heading
    card.insertBefore(errorDiv, heading);

    // Clear error message after 3 seconds
    setTimeout(clearError, 4000);
}

// Clear the error message
function clearError(){
    document.querySelector('.alert').remove();
}

function copyText() {
    let val = document.getElementById("copyPaste").value;
    navigator.clipboard.writeText(val).then(function() {
        alert("Text copied to clipboard");
    });
}

/* 
 * Dark mode 
 */

// Animated background
VANTA.TOPOLOGY({
  el: ".bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x564e96,
  backgroundColor: 0x141414
})

// Add/remove dark mode class to body when checkbox is checked/unchecked
document.getElementById("theme-toggle").addEventListener("change", e =>
    document.body.classList.toggle("dark", force=!e.target.checked));
