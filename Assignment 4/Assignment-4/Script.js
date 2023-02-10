var fName = document.getElementById("firstName");
fName.addEventListener("keyup",fieldValidations);
var lName = document.getElementById("lastName");
lName.addEventListener("keyup",fieldValidations);
var emailId = document.getElementById("emailId");
emailId.addEventListener("keyup",fieldValidations);
var phNo = document.getElementById("phoneNumber");
phNo.addEventListener("keyup",fieldValidations);
var addr = document.getElementById("streetAddress1");
addr.addEventListener("keyup",fieldValidations);
var addr2 = document.getElementById("streetAddress2");
var city = document.getElementById("city");
city.addEventListener("keyup",fieldValidations);
var state = document.getElementById("state");
state.addEventListener("keyup",fieldValidations);
var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("keyup",fieldValidations);
var comments = document.getElementById("comments");
comments.addEventListener("keyup",fieldValidations);
var commentBox = document.getElementById("desc");
commentBox.addEventListener("keyup",fieldValidations);
var checkedValue = "";
const sourcesArray = [];

var fieldVal = /^[a-zA-Z]+$/;
var emailVal = /^[a-zA-Z0-9._%+-]+@northeastern.edu$/;
var phVal = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
var textBox = /^[a-zA-Z\s]+$/;
var addReg = /^\d+\s+[\w\s]+$/;
var zipcodeRegex = /^\d{5}$/;
var errorMsg = false;

function fieldValidations(fieldType)
{
    var value = fieldType.target.value;
	var fType = this.id;
switch(fType)
{
    case "desc":
        if(!value.match(fieldVal) || value.length==0)
        {
            document.getElementById("commentError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("commentError").classList.add("hidden");
            errorMsg = false;
        }
        break;

    case "firstName":
        if(!value.match(fieldVal) || value.length==0)
        {
            document.getElementById("fnError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("fnError").classList.add("hidden");
            errorMsg = false;
        }
        break;
    
    case "lastName":
        if(!value.match(fieldVal) || value.length==0)
        {
            document.getElementById("lnError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("lnError").classList.add("hidden");
            errorMsg = false;
        }
        break;

    case "emailId":
        if(!value.match(emailVal) || value.length==0)
        {
            document.getElementById("emailError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("emailError").classList.add("hidden");
            errorMsg = false;
        }
            break;

    case "phoneNumber":
        if(!value.match(phVal) || value.length==0)
        {
            document.getElementById("phoneError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("phoneError").classList.add("hidden");
            errorMsg = false;
        }
            break;

    case "streetAddress1":
        if(!value.match(addReg) || value.length==0)
        {
            document.getElementById("addrError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("addrError").classList.add("hidden");
            errorMsg = false;
        }
            break;

    case "city":
        if(!value.match(textBox) || value.length==0)
        {
            document.getElementById("cityError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("cityError").classList.add("hidden");
            errorMsg = false;
        }
            break;

    case "state":
        if(!value.match(textBox) || value.length==0)
        {
            document.getElementById("stateError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("stateError").classList.add("hidden");
            errorMsg = false;
        }
            break;

    case "zipcode":
        if(!value.match(zipcodeRegex) || value.length==0)
        {
            document.getElementById("zipError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("zipError").classList.add("hidden");
            errorMsg = false;
        }
            break;
        
    case "social":
        {
            const chkBox = document.querySelectorAll('input[id = social]');
            var count = 0;
            for(i=0; i < chkBox.length; i++) 
            {
                if(chkBox[i].checked)
                {
                    count++;
                }
            }	
        if(count==0)
        {
            document.getElementById("socialErr").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("socialErr").classList.add("hidden");
            errorMsg = false;
        }
            break;
        }

    case "comments":
        if(!value.match(textBox) || value.length==0)
        {
            document.getElementById("commError").classList.remove("hidden");
            errorMsg = true;
        }
        else
        {
            document.getElementById("commError").classList.add("hidden");
            errorMsg = false;
        }
            break;
    }
}

function setFocus()
{
    const chkBox = document.querySelectorAll('input[id = social]');
	for(i=0; i<chkBox.length; i++) {
		chkBox[i].addEventListener("input", fieldValidations);
	}
    fName.focus();
    return true;
}





function CourseOptions(univ) {
    var div = document.getElementById("course-options");
    div.style.display = "block";
    
    
    
    var selDrpDwn = univ.value;
    console.log(selDrpDwn);
    var checkboxSel = document.getElementsByName("course");
    // var p = document.getElementById("optionLabel");
    const checkbox1 = document.querySelector('#checkbox1');
    const checkbox2= document.querySelector('#checkbox2');
    const checkbox3 = document.querySelector('#checkbox3');
    const label1 = document.querySelector('label[for="checkbox1"]');
    const label2 = document.querySelector('label[for="checkbox2"]');
    const label3 = document.querySelector('label[for="checkbox3"]');
    console.log(checkboxSel);
    console.log(checkboxSel[0].value);
    // checkbox.nextElementSibling.textContent
    switch(selDrpDwn)
    {
        case "neu": 
            checkbox1.value = 'MIS';
            label1.textContent = 'MIS';
            checkbox2.value = 'MEM';
            label2.textContent = 'MEM';
            checkbox3.value = 'DAE';
            label3.textContent = 'DAE';
            break;
        case "bu": 
            checkbox1.value = 'DBA';
            label1.textContent = 'DBA';
            checkbox2.value = 'MSc';
            label2.textContent = 'MSc';
            checkbox3.value = 'MA';
            label3.textContent = 'MA';
            break;
        case "mit": 
            checkbox1.value = 'AI';
            label1.textContent = 'AI';
            checkbox2.value = 'Robotics';
            label2.textContent = 'Robotics';
            checkbox3.value = 'BTech';
            label3.textContent = 'BTech';
            break;
        case "hu":
            checkbox1.value = 'MBA';
            label1.textContent = 'MBA';
            checkbox2.value = 'MFA';
            label2.textContent = 'MFA';
            checkbox3.value = 'BCom';
            label3.textContent = 'BCom';
            break;
        case "su":
            checkbox1.value = 'BCA';
            label1.textContent = 'BCA';
            checkbox2.value = 'MBBS';
            label2.textContent = 'MBBS';
            checkbox3.value = 'BDA';
            label3.textContent = 'BDA';
            break;
        case "default":
            div.style.display = "none";
            break;
    }
}

function displayTextBox(e) {
    console.log("checked")
    var textArea = document.getElementById("desc");
    if (e.checked) {
      textArea.style.display = "block";
    } else {
      textArea.style.display = "none";
    }
	// var textBox = document.getElementById("commentBox");
	// if(e.checked){
    //     checkedValue = e.value
    //     textBox.style.display = "block";
    // }
		
}


function submitData(e){
    debugger;
    var selectedUnivIndex = document.getElementById("univ").options.selectedIndex;
    var selectedUnivText = document.getElementById("univ").options[selectedUnivIndex].text
    // const checkboxes = document.querySelectorAll('input[id = social]');
    var descComment = document.getElementById("desc");
    var comments = document.getElementById("comments");

    var radios = document.getElementsByName("title");
    var radioChecked = false;

    
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        radioChecked = true;
        break;
        }
    }

    if (!radioChecked) {
        alert("Please select your Title");
        return false;
    }

    

    var selecteSocialdValues = [];
    var socialCB = document.querySelectorAll('input[name="source"]:checked');
    if (socialCB.length === 0) {
    alert("Please select how you heard");
    errorMsg = false;
    return false;
    }
    else{
        for (var i = 0; i < socialCB.length; i++) {
            selecteSocialdValues.push(socialCB[i].value);
          }
    }
    console.log(selecteSocialdValues);

  



  // Check if radio button is selected


  var selecteCoursedValues = [];
    var courseCB = document.querySelectorAll('input[name="course"]:checked');
    if (courseCB.length === 0) {
    alert("Please select at least one course");
    errorMsg = false;
    return false;
    }
    else{
        for (var i = 0; i < courseCB.length; i++) {
            selecteCoursedValues.push(courseCB[i].value);
          }
    }
    console.log(selecteCoursedValues);

    // var fields = document.getElementsByTagName("input");
    // var optionalFieldFound = false;

    // for (var i = 0; i < fields.length; i++) {
    //     if (fields[i].type === "text" && fields[i].value === "") {
    //     if (!optionalFieldFound) {
    //         optionalFieldFound = fields[i].classList.contains("optional");
    //     } else {
    //         alert("Please fill in all required fields.");
    //         return false;
    //     }
    //     }
    // }

    
    if(errorMsg == false){

        console.log(e.value);

        const data = { 
            firstName: fName.value, 
            lastName: lName.value, 
            emailId: emailId.value, 
            phoneNo:  phNo.value, 
            address1: addr.value,
            address2: addr2.value,
            city: city.value,
            state: state.value,
            zipcode: zipcode.value,
            source: selecteSocialdValues,
            productType: {
                name: selectedUnivText,
                value: checkedValue,
                comments: descComment.value,
            },
            comments: comments.value,
        }
        localStorage.setItem("formData", JSON.stringify(data))
        document.getElementById("dataForm").reset();
        window.location.href= 'FormDataDisplay.html';
		 }
    else{
        alert("Complete the form")
    }
	}