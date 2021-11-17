let myFunction = () => {

    document.getElementById('change').innerHTML = 'Form Submitted';
    
    
    
    }

    function colorChange() {

        var element = document.body;
        element.classList.toggle("Color-change")
        var Nav = document.getElementById("navBar")
        var Footer = document.getElementById("footer")
        Nav.classList.toggle("ColorChangeNav")
        Footer.classList.toggle("ColorChangeNav")




    }

    const para = document.createElement("p");
    const node = document.createTextNode("Hope this works");
    para.appendChild(node);
    const element = document.getElementById("ggg");
    element.appendChild(para);
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "CLICK ME";
    element.appendChild(btn);