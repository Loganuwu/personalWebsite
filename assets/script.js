function projectNavScript() {
    document.getElementById("projectNav").style.color = "red"
    document.getElementById("scrollspyProject").style.color = "red"
    setTimeout(() => {
        document.getElementById("projectNav").style.color = "white"
        document.getElementById("scrollspyProject").style.color = "#64ffda"
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



document.getElementById("projectNav").addEventListener("click", projectNavScript)
document.getElementById("resumeNav").addEventListener("click", resumeNavScript)
document.getElementById("contactNav").addEventListener("click", contactNavScript)