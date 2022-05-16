// Write your JS below

$(document).ready(function() {
    console.log('Document ready')
    
        /*Define Variables*/
        var form = document.getElementsByClassName('register-form');
        var pword1 = document.getElementById("password");
        var pword2 = document.getElementById("passwordcheck");
        var sbBtn = document.querySelectorAll('input[type=submit]');
        /*Define Variables*/

        /*Set Attributes*/
        pword1.setAttribute("type","text")                                                                      /*Set Password field to Text*/
        pword2.setAttribute("type","text")                                                                      /*Set Confirm Password field to Text*/                                                                          /*Set Register Button Disabled to false*/
        pword1.setAttribute("minlength","6")                                                                    /*Set Password Min Length to 6*/
        pword1.setAttribute("oninvalid", "this.setCustomValidity('Password must be 6 characters minimum')");    /*Set Error Message*/
        pword1.setAttribute("oninput","this.setCustomValidity('')")                                             /*Reset Error Message*/
        /*Set Attributes*/

        /* Event Listeners*/
        pword1.addEventListener('keyup', compare);
        pword2.addEventListener('keyup', compare);
        form[0].addEventListener('keyup', compare2);      
        /* Event Listeners*/

        /* Functions*/
        function compare()
        {
        if ((pword2 === document.activeElement || pword1 === document.activeElement)  && pword1.value.length === pword2.value.length && pword1.value != pword2.value)
            {
            sbBtn[0].disabled = false;  
            alert ("Passwords do not match. Passwords must also be 6 characters minimum")
            }
        if (pword1.value.length != pword2.value.length)
            {
            sbBtn[0].disabled = true; 
            }
        }

        function compare2 ()
        {
        if (pword1.value.length === pword2.value.length)
            {
            sbBtn[0].disabled = false; 
            }
        }
        /* Functions*/
     });