const data = JSON.parse(localStorage.getItem('formData'));
        const { firstName, lastName, emailId, phoneNo, address1 ,city, state, zipcode, source, productType, comments, address2, prdComment }  = data;
        console.log(prdComment);
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
        td[1].innerHTML = productType.name;
        td[2].innerHTML = productType.comments;
        td[3].innerHTML = firstName;
        td[4].innerHTML = lastName;
        td[5].innerHTML = emailId;
        td[6].innerHTML = phoneNo;
        td[7].innerHTML = address1;
        td[8].innerHTML = address2;
        td[9].innerHTML = city;
        td[10].innerHTML = state;
        td[11].innerHTML = zipcode;
        td[12].innerHTML = source.join(' ');
        td[13].innerHTML = comments;