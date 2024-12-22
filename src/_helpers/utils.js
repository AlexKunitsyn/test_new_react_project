// import React from 'react';


export const scrollToTarget = (target) => {
    const targetElement = document.getElementById(target);
    if(targetElement && target) {
        targetElement.scrollIntoView({ behavior: "smooth" })
    }
    // target && targetElement ? targetElement.scrollIntoView({ behavior: "smooth" }) : null
};