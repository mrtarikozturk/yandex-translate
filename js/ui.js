function UI(){
    // Elements
    this.outputImageElement = document.querySelector("#outputImage");
    this.outputLanguageElement = document.querySelector("#outputLanguage");
    this.outputWordElement = document.querySelector("#outputWord");
    this.languageListElement = document.querySelector("#language");
}

// Change flag, output language
UI.prototype.changeUI = function(){

    this.outputImageElement.src = `images/${this.languageListElement.value}.png`;

    this.outputLanguageElement.innerHTML = this.languageListElement.options[this.languageListElement.selectedIndex].textContent;
}

// Show transleted word to users
UI.prototype.displayTranslate = function(word){
    this.outputWordElement.textContent=word;
}