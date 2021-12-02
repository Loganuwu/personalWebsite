function hoverScript() {
    console.log("Testing hover");
    document.getElementById("gitIcon").innerHTML = `<img src="./assets/logo-github.svg" alt="Github" style="padding-right: 20px;" width="150px" id="gitIcon">`
}

document.getElementById("gitIcon").addEventListener("mouseover", hoverScript)