// OpenNav initialy hidden
document.getElementById("open").style.display = "none";

// code for open nav
function openNav() {
 
    function myFunction(x) {
        if (x.matches) { // If media query matches
            document.getElementById("mySidenav").style.width = "150px";
            document.getElementById("close").style.display = "block";
            document.getElementById("open").style.display = "none";

            document.getElementById("ul-1").children[0].style.fontSize="10px";
            document.getElementById("ul-1").children[0].style.height="70px";

            document.getElementById("ul-1").children[1].style.fontSize="10px";
            document.getElementById("ul-1").children[1].style.height="70px";
            document.getElementById("ul-1").children[2].style.fontSize="10px";
            document.getElementById("ul-1").children[2].style.height="70px";
            document.getElementById("ul-1").children[3].style.fontSize="10px";
            document.getElementById("ul-1").children[3].style.height="70px";
            document.getElementById("ul-1").children[4].style.fontSize="10px";
            document.getElementById("ul-1").children[4].style.height="70px";
            document.getElementById("ul-1").children[5].style.fontSize="10px";
            document.getElementById("ul-1").children[5].style.height="70px";
            document.getElementById("ul-1").children[6].style.fontSize="10px";
            document.getElementById("ul-1").children[6].style.height="70px";
       


   
        } else {
            document.getElementById("mySidenav").style.width = "350px";
            document.getElementById("close").style.display = "block";
            document.getElementById("open").style.display = "none";


            document.getElementById("ul-1").children[0].style.fontSize="16px";
            document.getElementById("ul-1").children[0].style.height="auto";

            document.getElementById("ul-1").children[1].style.fontSize="16px";
            document.getElementById("ul-1").children[1].style.height="auto";
            document.getElementById("ul-1").children[2].style.fontSize="16px";
            document.getElementById("ul-1").children[2].style.height="auto";

            document.getElementById("ul-1").children[3].style.fontSize="16px";
            document.getElementById("ul-1").children[3].style.height="auto";
            document.getElementById("ul-1").children[4].style.fontSize="16px";
            document.getElementById("ul-1").children[4].style.height="auto";
            document.getElementById("ul-1").children[5].style.fontSize="16px";
            document.getElementById("ul-1").children[5].style.height="auto";
            document.getElementById("ul-1").children[6].style.fontSize="16px";
            document.getElementById("ul-1").children[6].style.height="auto";
        

        }
      }
      
      var x = window.matchMedia("(max-width: 700px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
  }
  

//   function for close navbar
  function closeNav() {
   

    function myFunction(x) {
        if (x.matches) { // If media query matches
            document.getElementById("mySidenav").style.width = "0px";
            document.getElementById("close").style.display = "none";
            document.getElementById("open").style.display = "block";

            document.getElementById("ul-1").children[0].style.fontSize="10px";
            document.getElementById("ul-1").children[0].style.height="70px";
            document.getElementById("ul-1").children[1].style.fontSize="10px";
            document.getElementById("ul-1").children[1].style.height="70px";
            document.getElementById("ul-1").children[2].style.fontSize="10px";
            document.getElementById("ul-1").children[2].style.height="70px";

            document.getElementById("ul-1").children[3].style.fontSize="10px";
            document.getElementById("ul-1").children[3].style.height="70px";

            document.getElementById("ul-1").children[4].style.fontSize="10px";
            document.getElementById("ul-1").children[4].style.height="70px";

            document.getElementById("ul-1").children[5].style.fontSize="10px";
            document.getElementById("ul-1").children[5].style.height="70px";

            document.getElementById("ul-1").children[6].style.fontSize="10px";
            document.getElementById("ul-1").children[6].style.height="70px";
     
        } else {
            document.getElementById("mySidenav").style.width = "100px";
            document.getElementById("close").style.display = "none";
            document.getElementById("open").style.display = "block";



            document.getElementById("ul-1").children[0].style.fontSize="10px";
            document.getElementById("ul-1").children[0].style.height="70px";
            document.getElementById("ul-1").children[1].style.fontSize="10px";
            document.getElementById("ul-1").children[1].style.height="70px";
            document.getElementById("ul-1").children[2].style.fontSize="10px";
            document.getElementById("ul-1").children[2].style.height="70px";

            document.getElementById("ul-1").children[3].style.fontSize="10px";
            document.getElementById("ul-1").children[3].style.height="70px";

            document.getElementById("ul-1").children[4].style.fontSize="10px";
            document.getElementById("ul-1").children[4].style.height="70px";

            document.getElementById("ul-1").children[5].style.fontSize="10px";
            document.getElementById("ul-1").children[5].style.height="70px";

            document.getElementById("ul-1").children[6].style.fontSize="10px";
            document.getElementById("ul-1").children[6].style.height="70px";

   

         

  
        }
      }
      
      var x = window.matchMedia("(max-width: 700px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes

  }


