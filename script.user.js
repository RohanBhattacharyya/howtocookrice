// ==UserScript==
// @name         i be cooking da rice
// @namespace    http://tampermonkey.net/
// @version      2024-03-05
// @description  try to take over the world!
// @author       You
// @match        https://play.freerice.com/categories/multiplication-table
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function () {
    try
    {
    var equation = document.getElementsByClassName("card-title")[0].innerText;
    var newequation = equation.replace(" x ","*");
    var answer = eval(newequation);
    for (let i = 0; i < 4; i++)
    {
        if (document.getElementsByClassName("card-button")[i].innerText === answer.toString())
        {
            document.getElementsByClassName("card-button")[i].click();
        }
    }
    }
    catch
    {
    }
    }, 4000);
})();
