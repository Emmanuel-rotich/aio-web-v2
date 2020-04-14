/*Filter function*/
//filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    //if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myFilterBtn");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


/*Copy function*/

var clipboard = new ClipboardJS('.copy');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

/*Copy popup*/
// When the user clicks on <div>, open the popup
function copyPopup() {

    var copyBtn = document.getElementsByClassName("copy");

    var popup = document.getElementsByClassName("myPopup");

    copyBtn[0].onclick = function() {
        popup[0].style.display = "block";
    }
    copyBtn[1].onclick = function() {
        popup[1].style.display = "block";
    }
    copyBtn[2].onclick = function() {
        popup[2].style.display = "block";
    }
    copyBtn[3].onclick = function() {
        popup[3].style.display = "block";
    }
    copyBtn[4].onclick = function() {
        popup[4].style.display = "block";
    }
    copyBtn[5].onclick = function() {
        popup[5].style.display = "block";
    }
    copyBtn[6].onclick = function() {
        popup[6].style.display = "block";
    }
    copyBtn[7].onclick = function() {
        popup[7].style.display = "block";
    }
    copyBtn[8].onclick = function() {
        popup[8].style.display = "block";
    }
    copyBtn[9].onclick = function() {
        popup[9].style.display = "block";
    }
    copyBtn[10].onclick = function() {
        popup[10].style.display = "block";
    }
    copyBtn[11].onclick = function() {
        popup[11].style.display = "block";
    }
    copyBtn[12].onclick = function() {
        popup[12].style.display = "block";
    }
    copyBtn[13].onclick = function() {
        popup[13].style.display = "block";
    }
    copyBtn[14].onclick = function() {
        popup[14].style.display = "block";
    }
    copyBtn[15].onclick = function() {
        popup[15].style.display = "block";
    }
    copyBtn[16].onclick = function() {
        popup[16].style.display = "block";
    }
    copyBtn[17].onclick = function() {
        popup[17].style.display = "block";
    }
    copyBtn[18].onclick = function() {
        popup[18].style.display = "block";
    }
    copyBtn[19].onclick = function() {
        popup[19].style.display = "block";
    }

}

/*Modal*/

// Get modalPurchase
var modal = document.getElementsByClassName('modal');

// Get button that opens the modalPurchase
var btnPurchase = document.getElementsByClassName("purchaseBtn");

// Get <spanPurchase> element that closes the modalPurchase
var span = document.getElementsByClassName("close");

// When user clicks on the button, open the modalPurchase 
btnPurchase[0].onclick = function() {
    modal[0].style.display = "block";
}

btnPurchase[1].onclick = function() {
    modal[1].style.display = "block";
}

btnPurchase[2].onclick = function() {
    modal[2].style.display = "block";
}
btnPurchase[3].onclick = function() {
    modal[3].style.display = "block";
}

btnPurchase[4].onclick = function() {
    modal[4].style.display = "block";
}

btnPurchase[5].onclick = function() {
    modal[5].style.display = "block";
}

btnPurchase[6].onclick = function() {
    modal[6].style.display = "block";
}

btnPurchase[7].onclick = function() {
    modal[7].style.display = "block";
}

btnPurchase[8].onclick = function() {
    modal[8].style.display = "block";
}

btnPurchase[9].onclick = function() {
    modal[9].style.display = "block";
}

btnPurchase[10].onclick = function() {
    modal[10].style.display = "block";
}
btnPurchase[11].onclick = function() {
    modal[11].style.display = "block";
}
btnPurchase[12].onclick = function() {
    modal[12].style.display = "block";
}
btnPurchase[13].onclick = function() {
    modal[13].style.display = "block";
}
btnPurchase[14].onclick = function() {
    modal[14].style.display = "block";
}
btnPurchase[15].onclick = function() {
    modal[15].style.display = "block";
}
btnPurchase[16].onclick = function() {
    modal[16].style.display = "block";
}
btnPurchase[17].onclick = function() {
    modal[17].style.display = "block";
}
btnPurchase[18].onclick = function() {
    modal[18].style.display = "block";
}
btnPurchase[19].onclick = function() {
    modal[19].style.display = "block";
}

// When user clicks on <span> (x), close modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}

span[2].onclick = function() {
    modal[2].style.display = "none";
}

span[3].onclick = function() {
    modal[3].style.display = "none";
}

span[4].onclick = function() {
    modal[4].style.display = "none";
}

span[5].onclick = function() {
    modal[5].style.display = "none";
}

span[6].onclick = function() {
    modal[6].style.display = "none";
}

span[7].onclick = function() {
    modal[7].style.display = "none";
}

span[8].onclick = function() {
    modal[8].style.display = "none";
}

span[9].onclick = function() {
    modal[9].style.display = "none";
}

span[10].onclick = function() {
    modal[10].style.display = "none";
}
span[11].onclick = function() {
    modal[11].style.display = "none";
}
span[12].onclick = function() {
    modal[12].style.display = "none";
}
span[13].onclick = function() {
    modal[13].style.display = "none";
}
span[14].onclick = function() {
    modal[14].style.display = "none";
}
span[15].onclick = function() {
    modal[15].style.display = "none";
}
span[16].onclick = function() {
    modal[16].style.display = "none";
}
span[17].onclick = function() {
    modal[17].style.display = "none";
}
span[18].onclick = function() {
    modal[18].style.display = "none";
}
span[19].onclick = function() {
    modal[19].style.display = "none";
}

// When user clicks anywhere outside of the modal, close it

window.addEventListener("click", function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }

    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }

    if (event.target == modal[2]) {
        modal[2].style.display = "none";
    }

    if (event.target == modal[3]) {
        modal[3].style.display = "none";
    }

    if (event.target == modal[4]) {
        modal[4].style.display = "none";
    }

    if (event.target == modal[5]) {
        modal[5].style.display = "none";
    }

    if (event.target == modal[6]) {
        modal[6].style.display = "none";
    }

    if (event.target == modal[7]) {
        modal[7].style.display = "none";
    }

    if (event.target == modal[8]) {
        modal[8].style.display = "none";
    }
    if (event.target == modal[9]) {
        modal[9].style.display = "none";
    }
    if (event.target == modal[10]) {
        modal[10].style.display = "none";
    }
    if (event.target == modal[11]) {
        modal[11].style.display = "none";
    }
    if (event.target == modal[12]) {
        modal[12].style.display = "none";
    }
    if (event.target == modal[13]) {
        modal[13].style.display = "none";
    }
    if (event.target == modal[14]) {
        modal[14].style.display = "none";
    }
    if (event.target == modal[15]) {
        modal[15].style.display = "none";
    }
    if (event.target == modal[16]) {
        modal[16].style.display = "none";
    }
    if (event.target == modal[17]) {
        modal[17].style.display = "none";
    }
    if (event.target == modal[18]) {
        modal[18].style.display = "none";
    }
    if (event.target == modal[19]) {
        modal[19].style.display = "none";
    }
})