// Inits
const translate = new Translate(document.querySelector('#word').Value, document.querySelector('#language').value);
const ui = new UI();

eventListeners();

// All eventListeners
function eventListeners() {
    document.querySelector('#translate-form').addEventListener('submit', translateWord);
    document.querySelector('#language').onchange = () => ui.changeUI();
    
}

// Main operations
function translateWord(e) {
    
    translate.changeParameters(document.querySelector('#word').Value, document.querySelector('#language').value)
    translate.translateWord((err, response)=>{
        if(err){
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
        }
    });
    e.preventDefault();
}

