    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    window.addEventListener("DOMContentLoaded", () => {
        const addTile = document.getElementById("addition_tile");
        const addTileAns = document.getElementById("addTileAnswer");

        addTile.addEventListener("click", event => {
            const answer = addTile.getAttribute("answer");
            addTileAns.innerHTML = answer;
            window.setTimeout(function(){
                addTileAns.innerHTML = "Click to see the answer!";
            }, 2300);
        });

        const addBtn = document.querySelector("#addBtn");
        addBtn.addEventListener("click", event => {
            document.getElementById("addition_section").style.display = "block";
        });
    });


    window.addEventListener("DOMContentLoaded", () => {
        const subTile = document.getElementById("subtraction_tile");
        const subTileAns = document.getElementById("subTileAnswer");

        subTile.addEventListener("click", event => {
            const answer = subTile.getAttribute("answer");
            subTileAns.innerHTML = answer;
            window.setTimeout(function(){
                subTileAns.innerHTML = "Click to see the answer!";
            }, 2300);
        });

        const subBtn = document.querySelector("#subBtn");
        subBtn.addEventListener("click", event => {
            document.getElementById("subtraction_section").style.display = "block";
        });
    });

    window.addEventListener("DOMContentLoaded", () => {
        const multTile = document.getElementById("multiplication_tile");
        const multTileAns = document.getElementById("multTileAnswer");

        multTile.addEventListener("click", event => {
            const answer = multTile.getAttribute("answer");
            multTileAns.innerHTML = answer;
            window.setTimeout(function(){
                multTileAns.innerHTML = "Click to see the answer!";
            }, 2300);
        });

        const multBtn = document.querySelector("#multBtn");
        multBtn.addEventListener("click", event => {
            document.getElementById("multiplication_section").style.display = "block";
        });
    });

    window.addEventListener("DOMContentLoaded", () => {
        const divTile = document.getElementById("division_tile");
        const divTileAns = document.getElementById("divTileAnswer");

        divTile.addEventListener("click", event => {
            const answer = divTile.getAttribute("answer");
            divTileAns.innerHTML = answer;
            window.setTimeout(function(){
                divTileAns.innerHTML = "Click to see the answer!";
            }, 2300);
        });

        const divBtn = document.querySelector("#divBtn");
        divBtn.addEventListener("click", event => {
            document.getElementById("division_section").style.display = "block";
        });
    });

    window.addEventListener("DOMContentLoaded", () => {
        const modTile = document.getElementById("modulus_tile");
        const modTileAns = document.getElementById("modTileAnswer");

        modTile.addEventListener("click", event => {
            const answer = modTile.getAttribute("answer");
            modTileAns.innerHTML = answer;
            window.setTimeout(function(){
                modTileAns.innerHTML = "Click to see the answer!";
            }, 2300);
        });

        const modBtn = document.querySelector("#modBtn");
        modBtn.addEventListener("click", event => {
            document.getElementById("modulus_section").style.display = "block";
        });
    });