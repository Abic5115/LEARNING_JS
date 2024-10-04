let students =
{
        Collage_Id: Math.floor(Math.random() * 100),
        Name: "notime",
        Email: "notime@gmail.com",
        Phone_number: "99999999999",
        Address:
        {
                House_number: "10A",
                Street_name: "ward 10",
                Pin_number: "671212",
                Country: "india",
        },
        Subject: [{
                subject_name: "english",
                subject_mark: 50,
        },
        {
                subject_name: "malayalam",
                subject_mark: 60
        }],
        Applied_for_scholarship: true,

}

console.log(students)


function changename() {
        let newname = prompt("enter the new name")
        students.Name = newname
        console.log("the changed details", students)

}

function changephone() {
        let newphone = prompt("enter the new number")
        if (newphone) {
                students.Phone_number = newphone
                console.log("phone number changed")
                console.log(students)

        }
        else {
                console.log("no change in number")
        }


}

function changeaddress() {
        students.Address.House_number = prompt("enter the House number")
        students.Address.Street_name = prompt("enter the Street name")
        students.Address.Pin_number = prompt("enter the pin number")
        students.Address.Country = prompt("enter the country")
        console.log("the details after cahnging address is", students)


}


function addsubjectandmark() {
        let newsubject = prompt("enter the new subject ")
        let newmark = prompt("enter the new mark ")
        students.subject_name = newsubject
        students.subject_mark = newmark
        console.log("the new subjects arae added", students)


}

function removesubject() {

        let remove = prompt("enter the subject to be removed ")

        for (let i = 0; i < students.Subject.length; i++) {

                if (students.Subject[i].subject_name == remove) {
                        students.Subject.splice(i, 1)
                }
        }
        console.log("the new details updated are", students)
}



function changemark() {
        let subj = prompt("enter the subject name ")
        let markchange = prompt("enter the mark")

        for (let j = 0; j < students.Subject.length; j++) {
                if (students.Subject[j].subject_name == subj) {
                        students.Subject[j].subject_mark = markchange
                }
        }
        console.log("the new details updated are", students)
}

function Displayallmark() {
        for (let k = 0; k < students.Subject.length; k++) {
                prompt("the marks are", students.Subject[k].subject_mark)
                console.log("the marks are", students.Subject[k].subject_mark)
        }
}

function scholarshipstatus() {
        console.log("current scholarship status", students.Applied_for_scholarship)
        let schochange = prompt("do you want to change scholarship status..yes/no")
        if (schochange == "yes") {
                if (students.Applied_for_scholarship == true) {
                        students.Applied_for_scholarship = false
                }
                else {
                        students.Applied_for_scholarship = true
                }
                console.log("the updated status", students)
        }


        else {
                console.log("no chanmge in scholarship status", students)
        }
}



function subchoice() {
        let schoice = parseInt(prompt("Choose an option:\n1. add a new subject and mark \n2.Remove a subject by specifying its name \n3.Changing the mark of subject by specifying its name \n4.Display all the mark \n5. go back"))
        switch (schoice) {
                case 1: addsubjectandmark()
                        break;

                case 2: removesubject()
                        break;

                case 3: changemark()
                        break;
                case 4: Displayallmark()
                        break;



                default:
                        console.log("Invalid choice");
                        break;
        }


}


function addage() {

        let age = prompt("enter the age")
        students.age = age
        console.log(students)
}

function totalmark() {

        let totmark = 0;
        console.log(students.Subject);
        
        for(let i = 0; i < students.Subject.length; i++) {

                totmark = totmark + students.Subject[i].subject_mark;
                console.log((totmark));
                
        }
        console.log("total mark is",totmark)

}

function alterstudent() {
        let choice = true
        while (choice != false) {
                choice = parseInt(prompt("Choose an option:\n1. Change Name\n2. Change Phone Number \n3. change address \n4. change many from the below  \n5. change schoalrship status \n6. add age \n7. show total mark \n8.exit"))



                switch (choice) {
                        case 1: changename()
                                break;
                        case 2: changephone()
                                break;

                        case 3: changeaddress()
                                break;

                        case 4: subchoice()
                                break;

                        case 5: scholarshipstatus()
                                break;

                        case 6: addage()
                                break;

                        case 7: totalmark()
                                break;

                        case 8: choice = false;
                                break;

                        default:
                                console.log("Invalid choice");
                                break;
                }

        }
}
alterstudent()
