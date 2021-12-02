function projectNavScript() {
    document.getElementById("projectNav").style.color = "red"
    document.getElementById("scrollspyProject").style.color = "red"
    setTimeout(() => {
        document.getElementById("projectNav").style.color = "white"
        document.getElementById("scrollspyProject").style.color = "#64ffda"
    }, 4000);
    
}

function educationNavScript() {
    document.getElementById("educationNav").style.color = "red"
    document.getElementById("scrollspyEducation").style.color = "red"
    setTimeout(() => {
        document.getElementById("educationNav").style.color = "white"
        document.getElementById("scrollspyEducation").style.color = "#64ffda"
    }, 4000);
    
}

function resumeNavScript() {
    document.getElementById("resumeNav").style.color = "red"
    document.getElementById("scrollspyResume").style.color = "red"
    setTimeout(() => {
        document.getElementById("resumeNav").style.color = "white"
        document.getElementById("scrollspyResume").style.color = "#64ffda"
    }, 4000);
    
}

function contactNavScript() {
    document.getElementById("contactNav").style.color = "red"
    document.getElementById("scrollspyContact").style.color = "red"
    setTimeout(() => {
        document.getElementById("contactNav").style.color = "white"
        document.getElementById("scrollspyContact").style.color = "#64ffda"
    }, 4000);
    
}

function socialNavScript() {
    document.getElementById("socialNav").style.color = "red"
    document.getElementById("scrollspySocial").style.color = "red"
    document.getElementById("scrollspySocial").style.fontSize = "30px";
    setTimeout(() => {
        document.getElementById("socialNav").style.color = "white"
        document.getElementById("scrollspySocial").style.color = "grey"
        document.getElementById("scrollspySocial").style.fontSize = "16px";
    }, 4000);
    
}

function gitClick() {
    document.getElementById("gitIcon").style.width = "140px";
}

function gitClickOut() {
    document.getElementById("gitIcon").style.width = "110px";
}

function instagramClick() {
    document.getElementById("instagramIcon").style.width = "60px";
}
function instagramClickOut() {
    document.getElementById("instagramIcon").style.width = "40px";
}
function linkedinClick() {
    document.getElementById("linkedinIcon").style.width = "70px";
}
function linkedinClickOut() {
    document.getElementById("linkedinIcon").style.width = "50px";
}



document.getElementById("projectNav").addEventListener("click", projectNavScript)
document.getElementById("educationNav").addEventListener("click", educationNavScript)
document.getElementById("resumeNav").addEventListener("click", resumeNavScript)
document.getElementById("contactNav").addEventListener("click", contactNavScript)
document.getElementById("socialNav").addEventListener("click", socialNavScript)



document.getElementById("gitIcon").addEventListener("mouseover",gitClick)
document.getElementById("gitIcon").addEventListener("mouseout",gitClickOut)
document.getElementById("instagramIcon").addEventListener("mouseover",instagramClick)
document.getElementById("instagramIcon").addEventListener("mouseout",instagramClickOut)
document.getElementById("linkedinIcon").addEventListener("mouseover",linkedinClick)
document.getElementById("linkedinIcon").addEventListener("mouseout",linkedinClickOut)