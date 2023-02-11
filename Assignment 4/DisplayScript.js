const data = JSON.parse(localStorage.getItem('formData'));
        const {title, firstName, lastName, emailId, phoneNo, address1 ,city, state, zipcode, source, courses, comments, address2, cDesc, univ}  = data;
        console.log(data);
        var tableID = document.getElementById("dispTable");
        var row = tableID.insertRow();
        var sources="";
        const td = [];
        for (i=0; i<13; i++)
        {
            td[i] = row.insertCell(i);
            if(i==0)
             {   td[i].innerHTML = i+1;    
             }
        }
        td[1].innerHTML = title + ' ' + firstName + ' ' + lastName;
        td[2].innerHTML = emailId;
        td[3].innerHTML = phoneNo;
        td[4].innerHTML = address1;
        td[5].innerHTML = address2;
        td[6].innerHTML = city + ', ' + zipcode;
        td[7].innerHTML = state;
        td[8].innerHTML = source.join(' ');
        td[9].innerHTML = univ;
        td[10].innerHTML = courses.join(', ');
        td[11].innerHTML = cDesc;
        td[12].innerHTML = comments;