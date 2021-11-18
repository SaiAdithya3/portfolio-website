//contact form to get the details from contact form
//i am using firebase because you have said that we have to not use any other language other than html,css,js






//for security reasons i have removed the firebase config






var messageRef = firebase.database().ref('messages');


document.getElementById('contactform').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    //save message
    saveMessage(name, email, subject, message);

    document.getElementById('contactform').reset();


}


//function to get all values 
function getInputVal(id){
    return document.getElementById(id).value;
}


//save the message to firebase

function saveMessage(name, email, subject, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}