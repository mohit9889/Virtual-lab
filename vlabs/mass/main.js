alert("Please Read All The Instructions Carefully \n\n 1. Least Count is to get the intervals of velocity in graph. Range : [0,1)\n 2. m is our Mass of Our Space Ship. Range:(1,1000) Either g or kg\n 3.Velocity is relativstic i.e. it is in terms of c. Range : (0,1) \n 4. You will see pitfalls while performing the experiment. You won't be able to skip them.\n 5.Make Sure To Reset The Simulator");
// Disabling  the field and initializing variables globally so that user cant hinder with simulator
document.getElementById("firstdiv").style.visibility = 'hidden';
document.getElementById("thirddiv").style.visibility = 'hidden';
var grp = []; // Array to store values of calculated mass and for graph
var nam;
var ratetime;
document.getElementById("firstdiv").style.opacity = 0;

document.getElementById("thirddiv").style.opacity = 0;

// Disable all Button

document.getElementById("btn1").disabled = true;
document.getElementById("btn2").disabled = true;
document.getElementById("btn3").disabled = true;
document.getElementById("btn4").disabled = true;
document.getElementById("btn5").disabled = true;
document.getElementById("tf1").disabled = true;
document.getElementById("tf2").disabled = true;
document.getElementById("unit").disabled = true;


var btn0 = document.getElementById("btn0");
var list = document.getElementById("unit");
var tempunit = list;
var tf1 = document.getElementById("tf1");
var vel;
var mass;
var tablebtn = 0;
var divs, m, tempx, id;


function openBack() {

    document.getElementById("unit").disabled = false;

    document.getElementById("btn4").disabled = false;
    alert("Please Choose The Unit");
    return true;
}

function check() {
    var tf0 = document.getElementById("tf0").value;
    console.log(tf0);
    if (tf0 == null || tf0 == "" || tf0 == undefined || isNaN(tf0)) {
        alert("Enter Value of Least Count in range (0,1)");
        return false;
    } else if (tf0 != null || tf0 != "" || tf0 != undefined || !isNaN(tf0)) {
        if (tf0 > 0 && tf0 < 1) {
            openBack();
            return true;
        } else {
            alert("Value should be in range(0,1)");
            return false;

        }
    }
}

function falseDisable() {
    document.getElementById("btn1").disabled = false;
}

function changeValue() {

    console.log(list.value);
    if (list.value == "kg") {
        document.getElementById("exparam0").innerHTML = "kg";
        document.getElementById("exparam1").innerHTML = "kg";
        document.getElementById("exparam2").innerHTML = "kg";
    } else if (list.value == "g") {
        document.getElementById("exparam0").innerHTML = "g";
        document.getElementById("exparam1").innerHTML = "g";
        document.getElementById("exparam2").innerHTML = "g";
    }
}

function openInput() {

    nam = list.value;
    document.getElementById("tf1").disabled = false;
    document.getElementById("tf2").disabled = false;
}

function loading() {
    vel = parseFloat(document.getElementById("tf2").value);
    mass = parseFloat(document.getElementById("tf1").value);
    divs = parseFloat(document.getElementById("tf0").value);
    tempx = divs;
}
var rt;

function obse() {
    if (m >= 1000) {
        document.getElementById("btn2").disabled = true;
        clearInterval(id);
        stop1();
    } else {
        m++;
        document.getElementById("leno").innerHTML = m;
    }

}

// Function to start the rocket and 
function strt() {
    loading();
    m = parseFloat(document.getElementById("tf1").value);
    var tempmass = m;
    var v = parseFloat(document.getElementById("tf2").value);

    if ((v > 0 && v < 1 && v >= parseFloat('.6')) && !isNaN(v) && !isNaN(m) && m != null && m != undefined) {

        document.getElementById("btn2").disabled = false;
        document.getElementById("btn3").disabled = false;
        document.getElementById("lena").innerHTML = tf1.value;
        document.getElementById("tf1").disabled = true;
        document.getElementById("tf2").disabled = true;
        document.getElementById("btn1").disabled = true;
        tempmass = tempmass * 100 * 100 * 10 * 5;

        ratetime = parseFloat(10 * 2 * (v * tempmass / (300000000 * Math.sqrt(Math.pow(1 - v * v, 3)))));
        console.log("Rate time " + ratetime);
        rt = ratetime;
        if (ratetime <= 10) {
            ratetime = ratetime * 10;
        }
        start1();
        id = setInterval(obse, ratetime);

        if (m >= 1000) {
            alert("Öbservation Complete: Mass is more than carrying Capacity");
        }


    } else {

        if (v > 1 || isNaN(v))
            alert("Enter Velocity in range of (0,1)");
        else if (v < 0) {
            alert("Enter Velocity in range of (0,1)");
        } else if (v < parseFloat('.6')) {
            alert("To get good observation use the velocity greater than .5");
        } else if (isNaN(m) || m == null || m == undefined) {
            alert("Enter mass in Integers");
        }
    }
}

var count = 0;

// Making Dynamic Table and adding value to the grp array
function tble() {
    if (tablebtn >= 9 || divs > vel) {
        alert("No More Observation");
        return;
    }
    var lk = parseFloat(mass / Math.sqrt(1 - Math.pow(divs, 2)));
    grp.push({
        x: divs,
        y: lk
    });

    if (tablebtn >= 3) {
        document.getElementById("firstdiv").setAttribute('style', 'visibility:visible');
        document.getElementById("firstdiv").style.opacity = 1;
    }

    var row = tb1.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = lk.toFixed(2);
    cell = row.insertCell();
    cell.innerHTML = divs.toFixed(2);
    divs += tempx;
    tablebtn++;
}
// Drawing Graph using drawgraph()
function drwgrph() {
    if (tablebtn >= 3) {
        drawgraph("l1", grp, "Relativstic Velocity in m/s ------->", "(mass in " + nam + ") ------>");
        document.getElementById("btn5").disabled = false;
    } else {
        confirm("We need atleast three values to plot a graph");
    }
}

// Reset Whole Window
function res() {
    document.getElementById("tf1").value = "";
    document.getElementById("tf2").value = "";
    document.getElementById("tf0").value = "";
    document.getElementById("rb1").checked = false;
    document.getElementById("rb2").checked = false;
    document.getElementById("ch1").checked = false;
    document.getElementById("ch2").checked = false;
    document.getElementById("ch3").checked = false;
    document.getElementById("ch4").checked = false;
    document.getElementById("ch5").checked = false;
    window.location.reload();
}

//PITFALL 1
function chk() {
    if (document.getElementById("rb2").checked) {
        alert("Your answer is incorrect. Please try again.");

    } else if (document.getElementById("rb1").checked) {
        alert("You Got It Right !!!!");
        document.getElementById("firstdiv").style.visibility = 'hidden';
        document.getElementById("firstdiv").style.opacity = 0;
        count++;
    }
}

// Conclusion Button
function cnclsn() {
    if (count == 1) {
        document.getElementById("firstdiv").style.opacity = 0;
        document.getElementById("firstdiv").setAttribute('style', 'visibility:hidden');
        document.getElementById("thirddiv").style.opacity = 1;
        document.getElementById("thirddiv").setAttribute('style', 'visibility:visible');
    } else {
        alert("All Pitfalls are not satisfied");
    }

}
var a1 = document.getElementById("ch1");
var b1 = document.getElementById("ch2");
var c1 = document.getElementById("ch3");
var d1 = document.getElementById("ch4");
var e1 = document.getElementById("ch5");
// Conclusion      
function checkbox1() {
    document.getElementById("thirddiv").setAttribute('style', 'visibility:visible');
    document.getElementById("thirddiv").style.opacity = 1;

    if ((b1.checked == true && c1.checked == true && d1.checked == true) && (a1.checked == false && e1.checked == false)) {
        alert("Congratulations! You have completed the experiment successfully.");
    } else if ((a1.checked == true || e1.checked == true) && (b1.checked == true || c1.checked == true || d1.checked == true)) {
        alert("There might be a wrong option selected.\nPlese refer the theory and try again.");
    } else if (b1.checked == true && c1.checked == true && d1.checked == false) {
        alert("All correct options are not selected.\nRead all the options once again.");
    } else if (d1.checked == true && c1.checked == true && b1.checked == false) {
        alert("All correct options are not selected.\nRead all the options once again.");
    } else if (d1.checked == true && b1.checked == true && c1.checked == false) {
        alert("All correct options are not selected.\nRead all the options once again.");
    } else if ((a1.checked == true && e1.checked == true) && (b1.checked == false && c1.checked == false && d1.checked == false)) {
        alert("Sorry, your answer is incorrect.\nPlease refer to the theory and try again.");
    } else if (a1.checked == false && b1.checked == false && c1.checked == false && d1.checked == false && e1.checked == false) {
        alert("Select atlest one option.");
    } else {
        alert("Sorry, your answer is incorrect.\nPlease refer to the theory and try again.");
    }
}

// Rocket Aniamtion

var anim = new Animation("mycanvas");
var canvas = anim.getCanvas();
var context = anim.getContext();
var x;
var y;
var xpoint = 10,
    ypoint = 400;
var flag = 0,
    yan = 1,
    yan1 = 1,
    image_height = 10,
    image_width = 10;

// Start The Rocket
function start1() {
    document.getElementById("btn1").disabled = false;
    if (flag == 0) {
        x = xpoint;
        y = ypoint;
        setInterval(function() {
            image_height += 1.346;
            image_width += 1.346;
            if (image_height > 100 || image_width > 100) {
                image_height = 100;
                image_width = 100;
            }
        }, 100);
        anim.setStage(stage);
        anim.start();
    } else {
        y = ypoint;
        x = xpoint;
        anim.setStage(stage);
        anim.start();
    }
}

// Main Animation Coding
function stage() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    base_image = new Image();
    base_image.src = "rocket.png";
    base_image.height = image_height;
    base_image.width = image_width;
    context.drawImage(base_image, x, y, image_height, image_width);

    if (y > 150) {
        x++;
        y--;
    } else if (y <= 150 && x < 620) {
        y++;
        x = x + yan;
        yan = yan + 0.15;
    } else {
        anim.stop();
    }
}

// Stop The Animation
function stop1() {
    anim.stop();
    flag = 1;
    document.getElementById("btn2").disabled = true;
    return false;
}