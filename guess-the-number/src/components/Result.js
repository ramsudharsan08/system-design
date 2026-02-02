import React from "react";

function Result({secertNum, term}) {
    let result;

    if(term) {
        if (term > secertNum) {
            result = 'Higher';
        }
        else if(term < secertNum) {
            result = 'Lower';
        }
        else if(term == secertNum) {
            result = 'Correct';
        }
        else {
            result = 'Enter valid Input';
        }
    }

    return <>
        <h3>You Guessed: {result}</h3>
    </>
}

export default Result