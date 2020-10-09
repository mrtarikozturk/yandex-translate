function Translate(word, language) {
    this.apikey = "trnsl.1.1.20200127T112428Z.6d2e01b0aeef9448.9a079472a6e62ccd11f38a4ae737d68f0cffdba3";
    this.word = word;
    this.language = language;
    this.xhr = new XMLHttpRequest();
}

// Get data from API
Translate.prototype.translateWord = function(callback) {
    /****************************************************
      Burada regular function yerine arrow function kullanamayiz. Nedeni ise arrow function kullanilmasi durumunda this ifadesini bind yaptigi icin this ifadesi Translate nesnesini degil window nesnesini ifade eder. Bu nedenle arrow function kullanilmasi durumunda hata cikarabilir. 
    ****************************************************/
    
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open('GET', endpoint);
    this.xhr.send();
    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null, text);
        }
        else{
            callback('Bir hata olustu', null);
        }
    };
}

// Change word and language
Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}

