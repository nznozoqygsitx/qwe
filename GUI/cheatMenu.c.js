// cheatMenu.c.js

let airBreakObj;

CheatMenu.init = function ()
{   
    $("body").append(cheatMenuCode);

    airBreakObj = 
    {
        airBreakState:
        {
            color: document.getElementById("airBreakStateColor"),
            label: document.getElementById("airBreakState")
        },

        airBreakSpeed:
        {
            label: document.getElementById("airBreakSpeed")
        },

        antiAimState:
        {
            color: document.getElementById("antiAimStateColor"),
            label: document.getElementById("antiAimState")
        }
    };
}

CheatMenu.setStates = function ()
{
    if (airBreakObj.airBreakState.label.textContent == "FALSE" && airBreak.state == true)
    {
        airBreakObj.airBreakState.label.textContent = "TRUE";
        airBreakObj.airBreakState.color.color = "green";
    }

    if (airBreakObj.airBreakState.label.textContent == "TRUE" && airBreak.state == false)
    {
        airBreakObj.airBreakState.label.textContent = "FALSE";
        airBreakObj.airBreakState.color.color = "red";
    }

    if (airBreakObj.airBreakSpeed.label.textContent != airBreak.speed)
    {
        airBreakObj.airBreakSpeed.label.textContent = airBreak.speed;
    }

    if (airBreakObj.antiAimState.label.textContent == "FALSE" && airBreak.antiAim == true)
    {
        airBreakObj.antiAimState.label.textContent = "TRUE";
        airBreakObj.antiAimState.color.color = "green";
    }

    if (airBreakObj.antiAimState.label.textContent == "TRUE" && airBreak.antiAim == false)
    {
        airBreakObj.antiAimState.label.textContent = "FALSE";
        airBreakObj.antiAimState.color.color = "red";
    }
}