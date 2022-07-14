
document.querySelector('#r-form').addEventListener('submit', function(e){

    document.querySelector('#results').style.display = 'none';
    document.querySelector('#cope').style.display = 'none';
    endResult()
    e.preventDefault();
});


function endResult(){

    var name = document.getElementById('name');
    var rollNo = document.getElementById('rollNo');
    var emailId = document.getElementById('emailId');
    var mobNo = document.getElementById('mobNo');
    var issue = document.getElementById('issue');
    var copyPaste = document.getElementById('copyPaste');

    if(name.value && rollNo.value && emailId.value && mobNo.value && issue.value){
        copyPaste.value = "Name: "+ name.value+ '\r\n' + "Roll No.: "+ rollNo.value+ '\r\n' +"Email Id: "+ emailId.value+'\r\n' + "Mobile No: "+ mobNo.value+ '\r\n' +"Issue: "+ issue.value;
        document.querySelector('#results').style.display = 'block';
        document.querySelector('#cope').style.display = 'block';
    } else {
        showError('Some values are left blank');
    }
}


function showError(error){
    const copyPaste = "Yes"

    document.querySelector('#results').style.display = 'none';

    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 2000);
}

function clearError(){
    document.querySelector('.alert').remove();
}

function copyText() {
    let val = document.getElementById("copyPaste").value;
    navigator.clipboard.writeText(val).then(function() {
        alert("Text copied to clipboard");
    });
}