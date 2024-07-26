var genrePressed = false;
var languagePressed = false;

const genreButton = document.getElementById('genreBtn');
genreButton.addEventListener('click',function(){
    const caret = document.getElementById('GenreCaret');
        if(!genrePressed){
            caret.style.transform = "rotate(90deg)";
            genrePressed = true;
            document.getElementById('genres').classList.toggle('show');
        }else{
                caret.style.transform = "rotate(0deg)";   
                genrePressed = false;
                document.getElementById('genres').classList.toggle('show');
        }
});

const languageButton = document.getElementById('languageBtn');
languageButton.addEventListener('click',function(){
    const caret = document.getElementById('LanguageCaret');
        if(!languagePressed){
            caret.style.transform = "rotate(90deg)";
            languagePressed = true;
            document.getElementById('languages').classList.toggle('show');
            }else{
                caret.style.transform = "rotate(0deg)";   
                languagePressed = false;
                document.getElementById('languages').classList.toggle('show');

            }
    

});

const genreElements = document.querySelectorAll('#genreList > *');

genreElements.forEach(element => {
    element.addEventListener('click', function(event) {
        this.classList.toggle('selectGenre');
    });
});

const languageElements = document.querySelectorAll('#languageList > *');

languageElements.forEach(element => {
    element.addEventListener('click', function(event) {
        this.classList.toggle('selectGenre');
    });
});