//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
var chk = 0,id = 3,checkBoxCount = 0;

const submitBtn = document.getElementById("button");
submitBtn.disabled = true;
submitBtn.style.backgroundColor = "grey";
const dropDownText = document.querySelectorAll(".dropDownTextArea");

const dropDownToggle = (event) => {
  const displayText = event.target.parentElement.parentElement.nextElementSibling.style.display;
  event.target.parentElement.parentElement.nextElementSibling.style.display = displayText === 'table-cell' ? 'none' : 'table-cell';
};

const addRow = (id) => {
  const rowTemplate1 = `
    <td class="arrow">
      <input type="checkbox"/><br /><br />
      <img class="arrowChild" src="down.png" width="25px" onclick="dropDownToggle(event)"/>
    </td>
    <td>Student ${id}</td>
    <td>Teacher ${id}</td>
    <td>Approved</td>
    <td>Fall</td>
    <td>TA</td>
    <td>34567</td>
    <td>100%</td>
    <td class="Edit" style="display: none;"><button>Edit</button></td>
    <td class="Delete" style="display: none;"><button>Delete</button</td>
  `;
  return [rowTemplate1];
};

const addDropDown = () => {
  const rowTemplate2 = `
    <td colspan="8">
      Advisor:<br /><br />
      Award Details<br />
      Summer 1-2014(TA)<br />
      Budget Number: <br />
      Tuition Number: <br />
      Comments:<br /><br /><br />
      Award Status:<br /><br /><br />
    </td>
  `;
  return rowTemplate2;
};

const addNewRow = () => {
  const table = document.getElementById("myTable").lastChild;
  const index = table.rows.length;
  id++;
  const row = table.insertRow(index);
  const subRow = table.insertRow(index + 1);
  row.innerHTML = addRow(id);
  subRow.innerHTML = addDropDown();
  table.append(row);
  table.append(subRow);
  subRow.classList.add("dropDownTextArea");
  subRow.style.display = "none";
  addCheckBoxListeners(Math.floor(index / 2));
  alert("New student added successfully");
};


const edtColumn = document.getElementsByClassName("editBtnCol");

const delColumn = document.getElementsByClassName("delButton");

//Checkbox funtionality
window.onload=function(){
  const checkBox = document.querySelectorAll('input[type = checkbox]');
  for (i = 0; i<checkBox.length; i++) 
  {
     addCheckBoxListeners(i)
  }
  const addBtn = document.getElementById('add');
  addBtn.addEventListener("click",function()
  {
    addNewRow();
  })    
}

//changes
 

//Function definition of addChecBoxListeners which is called in Checkbox functionality
function addCheckBoxListeners(index){
  const checkBox = document.querySelectorAll('input[type = checkbox]');
  checkBox[index].addEventListener("change", function()
  {
    var buttonEdt = this.parentElement.parentElement.lastElementChild.previousElementSibling;
    var buttonEdtDisp = buttonEdt.style.display;

    this.parentElement.parentElement.lastElementChild.previousElementSibling.style.display = buttonEdtDisp ==='table-cell' ? 'none' : 'table-cell';

    var buttonDel = this.parentElement.parentElement.lastElementChild;
    var buttonDelDisp = buttonDel.style.display;

    this.parentElement.parentElement.lastElementChild.style.display = buttonDelDisp ==='table-cell' ? 'none' : 'table-cell';

    buttonEdt.addEventListener("click", function()
    {
      alert('Please edit student details');
    })

    buttonDel.addEventListener("click", function()
    {
      const row =  buttonDel.parentElement;
      row.parentElement.removeChild(row.nextElementSibling);
      row.parentElement.removeChild(row);
      checkBoxCount--;
      if(checkBoxCount==0)
      {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = "grey";
        edtColumn[0].style.display = "none";
        delColumn[0].style.display = "none";
      }
    })
    
    if(checkBox[index].checked)
      checkBoxCount++;
    else
      checkBoxCount--;

    if(this.checked)
    {
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = "orange";
      edtColumn[0].style.display = "table-cell";
      delColumn[0].style.display = "table-cell";
      this.parentElement.parentElement.style.backgroundColor = 'yellow';
    }
    else if(!this.checked)
    {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "grey";
      edtColumn[0].style.display = "none";
      delColumn[0].style.display = "none";
      this.parentElement.parentElement.style.backgroundColor = 'white';
    }
  });
}

