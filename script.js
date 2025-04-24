

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}

//  script of age calculate

function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}

//  script of conversion 

function convert() {
    const input = parseFloat(document.getElementById('input-value').value);
    const from = document.getElementById('select-from').value;
    const to = document.getElementById('select-to').value;
    let output;

    if (from === 'm' && to === 'cm') {
        output = input * 100;
    } else if (from === 'm' && to === 'mm') {
        output = input * 1000;
    } else if (from === 'm' && to === 'km') {
        output = input / 1000;
    } else if (from === 'cm' && to === 'm') {
        output = input / 100;
    } else if (from === 'cm' && to === 'mm') {
        output = input * 10;
    } else if (from === 'cm' && to === 'km') {
        output = input / 100000;
    } else if (from === 'mm' && to === 'm') {
        output = input / 1000;
    } else if (from === 'mm' && to === 'cm') {
        output = input / 10;
    } else if (from === 'mm' && to === 'km') {
        output = input / 1000000;
    } else if (from === 'km' && to === 'm') {
        output = input * 1000;
    } else if (from === 'km' && to === 'cm') {
        output = input * 100000;
    } else if (from === 'km' && to === 'mm') {
        output = input * 1000000;
    } else {
        output = input;
    }

    document.getElementById('result').innerHTML = input + ' ' + from + ' = ' + output + ' ' + to;
}

//  script of Temperature conversion 

function tempconvert() {
    const input = parseFloat(document.getElementById('inputvalue').value);
    const from = document.getElementById('selectfrom').value;
    const to = document.getElementById('selectto').value;
    let output;

    if (from === 'c' && to === 'f') {
        output = (input * 9 / 5) + 32;
    } else if (from === 'c' && to === 'k') {
        output = input + 273.15;
    } else if (from === 'f' && to === 'c') {
        output = (input - 32) * 5 / 9;
    } else if (from === 'f' && to === 'k') {
        output = (input + 459.67) * 5 / 9;
    } else if (from === 'k' && to === 'c') {
        output = input - 273.15;
    } else if (from === 'k' && to === 'f') {
        output = (input * 9 / 5) - 459.67;
    } else {
        output = input;
    }

    document.getElementById('tempresult').innerHTML = input + ' ' + from + ' = ' + output + ' ' + to;
}