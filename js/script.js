var short = document.getElementById('info')


var pupil = {
    Name: 'Andrea',
    Surname: 'Bondani',
    Age: 23
}

for (key in pupil) {
    short.innerHTML += key + ': ' + pupil[key] + '<br><br>';
}

// ------------------ PART 2 ------------------ //

var short2 = document.getElementById('info2')

var pupils = [];

var pupil2 = {
    Name: 'Andrea',
    Surname: 'Bondani',
    Age: 23
}

var pupil3 = {
    Name: 'Ottavio',
    Surname: 'Fogliata',
    Age: 80  // Avenging Pippo Baudo.
}

var pupil4 = {
    Name: 'Mickey',
    Surname: 'Mouse',
    Age: 92 // Woah.
}

pupils.push(pupil2);
pupils.push(pupil3);
pupils.push(pupil4);

// Output is down in part 3

// ------------------ PART 3 ------------------ //

var addedStudents = parseInt(prompt('How many students would you like to add?'));

for(n = 1; n <= addedStudents; n++) {

    var nameFlag = true;
    var surnameFlag = true;
    var ageFlag = true;
    
    while(nameFlag) {

        var moreStudentsName = prompt('Insert their name (' + n +'° student)');
        if (moreStudentsName === "") {
            alert('Invalid value!')
        } else {
            nameFlag = false;
        }
    }

    while(surnameFlag) {

        var moreStudentsSurname = prompt('Insert their surname (' + n +'° student)');
        if (moreStudentsSurname === "") {
            alert('Invalid value!')
        } else {
            surnameFlag = false;
        }
    }

    while(ageFlag) {

        var moreStudentsAge = parseInt(prompt('Insert their age (' + n +'° student)'));
        if (moreStudentsAge === "" || isNaN(moreStudentsAge)) {
            alert('Invalid value!')
        } else {
            ageFlag = false;
        }
    }   

    pupils.push({
        Name: moreStudentsName,
        Surname: moreStudentsSurname,
        Age: moreStudentsAge
    })

}

for (i = 0; i < pupils.length; i++) {
    for (key in pupils[i]) {
        short2.innerHTML += key + ': ' + pupils[i][key] + '<br><br>';
    }
    short2.innerHTML += '______________________<br><br>'
}

