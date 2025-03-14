document.addEventListener('DOMContentLoaded',
    function()
    {
        //const file = document.getElementById("testfile");

        var file = document.getElementById("scriptframe");
        file.src = "SCRIPTS/biosScript3-14-2025.txt"


        text = "mainpage.html";

        const testpara = document.getElementById("testtext");
        testpara.innerText = "something else";

        var link = document.createElement("a");
        var linktext = document.createTextNode("title text");
        link.appendChild(linktext);
        link.title = "link!!!";
        link.href = text;
        document.getElementById("playground").appendChild(link);
    }
);