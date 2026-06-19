
        

        function showTime() {
            let now = new Date();
            let Time =  `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
            // document.getElementById("clock").innerHTML = Time;}
        }
        showTime(); 
        // setInterval(showTime, 1000);