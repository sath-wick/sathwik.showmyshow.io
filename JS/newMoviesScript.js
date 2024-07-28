var genrePressed = false;
var languagePressed = false;

function toggleFilterWindow(){
    filterbtn.classList.toggle('togglefilterbtn');
    document.getElementById('filterwindow').classList.toggle('togglefilterwindow');
}


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

const filterbtn = document.getElementById('filterbtn')
filterbtn.onclick = function(){
    toggleFilterWindow();
}


const filterClose = document.getElementById('close');
filterClose.onclick = function(){
    toggleFilterWindow();
}

const filterDone = document.getElementById('done');
filterDone.onclick = function(){
    toggleFilterWindow();
}
