// effect seta
var setaTopEdit = document.querySelector('#setaTopPage');
var firstContainer = document.querySelector('.marketing-img');

setTimeout(function translateYTop(){
    setaTopEdit.style.transition = "2s";
    setaTopEdit.style.transform = "translateY(40%)";

    setTimeout(function Reset(){
        setaTopEdit.style.transform = "translateY(-40%)"; 

        setTimeout(translateYTop, 2000);
    }, 2000)
}, 0);

setaTopEdit.addEventListener('click', ()=>{
    window.location.href = '#container'
})

// efeito de mudar de cor as bolinhas do centro do primeiro container com click
var oneBalls = document.querySelector('#oneBall');
var centerOneBall = document.querySelector("#oneBallCenter");


var twoBalls = document.querySelector('#twoBall');
var twoBallsCenter = document.querySelector('#twoBallCenter');

var treeBalls = document.querySelector('#treeBall');
var treeBallsCenter = document.querySelector('#treeBallCenter');


oneBalls.addEventListener('click', ()=>{
        oneBalls.classList.remove('tree-ball');
        oneBalls.classList.add('tree-ball-moveColor');

        centerOneBall.classList.remove('ball');
        centerOneBall.classList.add('ball-moveColor');

        twoBalls.classList.remove('tree-ball-moveColor');
        twoBalls.classList.add('tree-ball');

        twoBallsCenter.classList.remove('ball-moveColor');
        twoBallsCenter.classList.add('ball');

        treeBalls.classList.remove('tree-ball-moveColor');
        treeBalls.classList.add('tree-ball');

        treeBallsCenter.classList.remove('ball-moveColor');
        treeBallsCenter.classList.add('ball');

        firstContainer.style.background= "url(../../assets/img/floresta.jpg)";
        firstContainer.style.backgroundSize = "cover";
        firstContainer.style.objectFit = "cover";
        firstContainer.style.backgroundRepeat = "no-repeat";
})


twoBalls.addEventListener('click', ()=>{
        oneBalls.classList.remove('tree-ball-moveColor');
        oneBalls.classList.add('tree-ball');

        centerOneBall.classList.remove('ball-moveColor');
        centerOneBall.classList.add('ball');

        twoBalls.classList.remove('tree-ball');
        twoBalls.classList.add('tree-ball-moveColor');

        twoBallsCenter.classList.remove('ball');
        twoBallsCenter.classList.add('ball-moveColor');

        treeBalls.classList.remove('tree-ball-moveColor');
        treeBalls.classList.add('tree-ball');

        treeBallsCenter.classList.remove('ball-moveColor');
        treeBallsCenter.classList.add('ball');

        firstContainer.style.background= "url(../../assets/img/Background.full.webp)";
        firstContainer.style.backgroundSize = "cover";
        firstContainer.style.objectFit = "cover";
        firstContainer.style.backgroundRepeat = "no-repeat";
})


treeBalls.addEventListener('click', ()=>{
    oneBalls.classList.remove('tree-ball-moveColor');
    oneBalls.classList.add('tree-ball');

    centerOneBall.classList.remove('ball-moveColor');
    centerOneBall.classList.add('ball');

    twoBalls.classList.remove('tree-ball-moveColor');
    twoBalls.classList.add('tree-ball');

    twoBallsCenter.classList.remove('ball-moveColor');
    twoBallsCenter.classList.add('ball');

    treeBalls.classList.remove('tree-ball');
    treeBalls.classList.add('tree-ball-moveColor');

    treeBallsCenter.classList.remove('ball');
    treeBallsCenter.classList.add('ball-moveColor');

    firstContainer.style.background= "url(../../assets/img/primavera.jpg)";
    firstContainer.style.backgroundSize = "cover";
    firstContainer.style.objectFit = "cover";
    firstContainer.style.backgroundRepeat = "no-repeat";
})


// segundo container seta branca efeito de slides
var setaEsquerda = document.querySelector('#SLeft');
var setaDireita = document.querySelector('#SRight');
var oneContainerImage = document.querySelector('#one');
var twoContainerImage = document.querySelector('#two');
var treeContainerImage = document.querySelector('#tree');
var fourContainerImage = document.querySelector('#four');
var fiveContainerImage = document.querySelector('#five');
var sixContainerImage = document.querySelector('#six');
var sevenContainerImage = document.querySelector('#seven');
var eigthContainerImage = document.querySelector('#eigth');
var nineContainerImage = document.querySelector('#nine');
var clicked = 0;

setTimeout(function traslateXRight(){
    setaDireita.style.transition = '2s';
    setaDireita.style.transform = 'translateX(20%)';
    setTimeout(function resetRight(){
        setaDireita.style.transform = 'translateX(0%)';

        setTimeout(traslateXRight, 2000)
    }, 2000)
}, 0)


setaDireita.addEventListener('click', ()=>{
    clicked++;

    
    if(clicked === 1){
        oneContainerImage.classList.add('hidden');
        twoContainerImage.classList.add('hidden');
        treeContainerImage.classList.add('hidden');

        fourContainerImage.classList.remove('hidden');
        fiveContainerImage.classList.remove('hidden');
        sixContainerImage.classList.remove('hidden');
    }

    else if(clicked === 2){
        fourContainerImage.classList.add('hidden');
        fiveContainerImage.classList.add('hidden');
        sixContainerImage.classList.add('hidden');


        sevenContainerImage.classList.remove('hidden');
        eigthContainerImage.classList.remove('hidden');
        nineContainerImage.classList.remove('hidden');
    }

    else if(clicked === 3){
        sevenContainerImage.classList.add('hidden');
        eigthContainerImage.classList.add('hidden');
        nineContainerImage.classList.add('hidden');


        oneContainerImage.classList.remove('hidden');
        twoContainerImage.classList.remove('hidden');
        treeContainerImage.classList.remove('hidden');
        clicked = 0
    }

    return clicked
})

setTimeout(function traslateXLeft(){
    setaEsquerda.style.transition = '2s';
    setaEsquerda.style.transform = 'translateX(-20%)';
    setTimeout(function resetLeft(){
        setaEsquerda.style.transform = 'translateX(0%)';

        setTimeout(traslateXLeft, 2000)
    }, 2000)
}, 0)

setaEsquerda.addEventListener('click', ()=>{
    clicked = clicked - 1;



    if(clicked < 0){
        clicked = 2;
        
    }
    
    if(clicked === 2){
        oneContainerImage.classList.add('hidden');
        twoContainerImage.classList.add('hidden');
        treeContainerImage.classList.add('hidden');


        sevenContainerImage.classList.remove('hidden');
        eigthContainerImage.classList.remove('hidden');
        nineContainerImage.classList.remove('hidden');
    }


    
    else if(clicked === 1){
        sevenContainerImage.classList.add('hidden');
        eigthContainerImage.classList.add('hidden');
        nineContainerImage.classList.add('hidden');
        
        
        fourContainerImage.classList.remove('hidden');
        fiveContainerImage.classList.remove('hidden');
        sixContainerImage.classList.remove('hidden');
    }


    else if(clicked === 0){
        fourContainerImage.classList.add('hidden');
        fiveContainerImage.classList.add('hidden');
        sixContainerImage.classList.add('hidden');

        oneContainerImage.classList.remove('hidden');
        twoContainerImage.classList.remove('hidden');
        treeContainerImage.classList.remove('hidden');
    }


    return clicked
})



// adicionando efeitos aos eventos de cliques nas setas brancas la no container
var setasOpen = document.querySelectorAll('.seta-open');
var setasClose = document.querySelectorAll('.seta-close');
var showContainerOne = document.querySelector('#irmaoOne');
var showContainerTwo = document.querySelector('#irmaoTwo');
var showContainerTree = document.querySelector('#irmaoTree');
var showContainerFour = document.querySelector('#irmaoFour');
var showContainerFive = document.querySelector('#irmaoFive');
var ContainerLoremIpsum = document.querySelectorAll('.container-top-lorem-ipsum');
var hrs = document.querySelectorAll('hr');


setasOpen[0].addEventListener('click', ()=>{

    ContainerLoremIpsum[0].classList.add('hidden', 'remove-mobile');
    showContainerOne.classList.remove('hidden', 'remove-mobile');
    hrs[0].classList.add('hidden', 'remove-mobile');


    ContainerLoremIpsum[1].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[2].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[3].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[4].classList.remove('hidden', 'remove-mobile');
    
    hrs[1].classList.remove('hidden', 'remove-mobile');
    hrs[2].classList.remove('hidden', 'remove-mobile');
    hrs[3].classList.remove('hidden', 'remove-mobile');


    showContainerTwo.classList.add('hidden', 'remove-mobile');
    showContainerTree.classList.add('hidden', 'remove-mobile');
    showContainerFour.classList.add('hidden', 'remove-mobile');
    showContainerFive.classList.add('hidden', 'remove-mobile');

    setasClose[0].addEventListener('click', ()=>{
        showContainerOne.classList.add('hidden', 'remove-mobile');
        ContainerLoremIpsum[0].classList.remove('hidden', 'remove-mobile');
        hrs[0].classList.remove('hidden', 'remove-mobile');
    })
})

setasOpen[1].addEventListener('click', ()=>{

    ContainerLoremIpsum[1].classList.add('hidden', 'remove-mobile');
    showContainerTwo.classList.remove('hidden', 'remove-mobile');
    hrs[1].classList.add('hidden', 'remove-mobile');
    
    ContainerLoremIpsum[0].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[2].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[3].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[4].classList.remove('hidden', 'remove-mobile');
    
    hrs[0].classList.remove('hidden', 'remove-mobile');
    hrs[2].classList.remove('hidden', 'remove-mobile');
    hrs[3].classList.remove('hidden', 'remove-mobile');

    showContainerOne.classList.add('hidden', 'remove-mobile');
    showContainerTree.classList.add('hidden', 'remove-mobile');
    showContainerFour.classList.add('hidden', 'remove-mobile');
    showContainerFive.classList.add('hidden', 'remove-mobile');

    setasClose[1].addEventListener('click', ()=>{
        showContainerTwo.classList.add('hidden', 'remove-mobile');
        ContainerLoremIpsum[1].classList.remove('hidden', 'remove-mobile');
        hrs[1].classList.remove('hidden', 'remove-mobile');
    })
})

setasOpen[2].addEventListener('click', ()=>{

    ContainerLoremIpsum[2].classList.add('hidden', 'remove-mobile');
    showContainerTree.classList.remove('hidden', 'remove-mobile');
    hrs[2].classList.add('hidden', 'remove-mobile');
    
    ContainerLoremIpsum[0].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[1].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[3].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[4].classList.remove('hidden', 'remove-mobile');
    
    hrs[0].classList.remove('hidden', 'remove-mobile');
    hrs[1].classList.remove('hidden', 'remove-mobile');
    hrs[3].classList.remove('hidden', 'remove-mobile');

    showContainerOne.classList.add('hidden', 'remove-mobile');
    showContainerTwo.classList.add('hidden', 'remove-mobile');
    showContainerFour.classList.add('hidden', 'remove-mobile');
    showContainerFive.classList.add('hidden', 'remove-mobile');

    setasClose[2].addEventListener('click', ()=>{
        showContainerTree.classList.add('hidden', 'remove-mobile');
        ContainerLoremIpsum[2].classList.remove('hidden', 'remove-mobile');
        hrs[2].classList.remove('hidden', 'remove-mobile');
    })
})

setasOpen[3].addEventListener('click', ()=>{

    ContainerLoremIpsum[3].classList.add('hidden', 'remove-mobile');
    showContainerFour.classList.remove('hidden', 'remove-mobile');
    hrs[3].classList.add('hidden', 'remove-mobile');
    
    ContainerLoremIpsum[0].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[1].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[2].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[4].classList.remove('hidden', 'remove-mobile');
    
    hrs[0].classList.remove('hidden', 'remove-mobile');
    hrs[1].classList.remove('hidden', 'remove-mobile');
    hrs[2].classList.remove('hidden', 'remove-mobile');

    showContainerOne.classList.add('hidden', 'remove-mobile');
    showContainerTwo.classList.add('hidden', 'remove-mobile');
    showContainerTree.classList.add('hidden', 'remove-mobile');
    showContainerFive.classList.add('hidden', 'remove-mobile');

    setasClose[3].addEventListener('click', ()=>{
        showContainerFour.classList.add('hidden', 'remove-mobile');
        ContainerLoremIpsum[3].classList.remove('hidden', 'remove-mobile');
        hrs[3].classList.remove('hidden', 'remove-mobile');
    })
})

setasOpen[4].addEventListener('click', ()=>{

    ContainerLoremIpsum[4].classList.add('hidden', 'remove-mobile');
    showContainerFive.classList.remove('hidden', 'remove-mobile');
    
    ContainerLoremIpsum[0].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[1].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[2].classList.remove('hidden', 'remove-mobile');
    ContainerLoremIpsum[3].classList.remove('hidden', 'remove-mobile');
    
    hrs[0].classList.remove('hidden', 'remove-mobile');
    hrs[1].classList.remove('hidden', 'remove-mobile');
    hrs[2].classList.remove('hidden', 'remove-mobile');
    hrs[3].classList.remove('hidden', 'remove-mobile');

    showContainerOne.classList.add('hidden', 'remove-mobile');
    showContainerTwo.classList.add('hidden', 'remove-mobile');
    showContainerTree.classList.add('hidden', 'remove-mobile');
    showContainerFour.classList.add('hidden', 'remove-mobile');

    setasClose[4].addEventListener('click', ()=>{
        showContainerFive.classList.add('hidden', 'remove-mobile');
        ContainerLoremIpsum[4].classList.remove('hidden', 'remove-mobile');
    })
})


function validate(){
    var name = form.name;
    var email = form.email;
    var telefone = form.telefone;
    var textarea = form.Mensagem;

    
    if(name.value.length < 3){
        alert('Por favor digite seu nome. Ele não pode conter menos que 3 caracteres.');

        name.focus();
        return false
    }

    if(email.value.length < 6){
        alert('Por favor digite o seu E-mail ele deve conter(Ex:@email.com) e ter no mínimo 6 caracteres.');

        email.focus();
        return false
    }

    if(telefone.value.length < 13){
        alert('Por favor digite um telefone válido. Ele deve conter apenas números e ter no mínimo 13 caracteres incuindo os parenteses e o hífen.');

        telefone.focus();
        return false;
    }

    if(textarea.value.length < 10){
        alert('Por favor digite uma mensagem de descrição.');

        textarea.focus();
        return false
    }
}



var numeroTel = document.querySelector('#telefone');

numeroTel.addEventListener('input', ()=>{
    var atualizaTel = event.target.value.replace(/[a-z]/g, "");
    numeroTel.value = atualizaTel;


    if(numeroTel.value.length === 1){
        var inicioDeParenteses = '(' + numeroTel.value;
        numeroTel.value = inicioDeParenteses;
    }

    if(numeroTel.value.length === 3){
        var replaceNumber = numeroTel.value.replace(/[(]/g, "");
        var includeParenteses = '(' + replaceNumber[0] + replaceNumber[1] + ')';
        numeroTel.value = includeParenteses;
    }

    else if(numeroTel.value.length === 4){
        if(numeroTel.value[3] != ')'){
        var replaceNumber = numeroTel.value.replace(/[()]/g, "");
        var newNumberOneParenteses = '(' + replaceNumber[0] + replaceNumber[1] + ')' + replaceNumber[2];
        numeroTel.value = newNumberOneParenteses;
        }
    }

    else if(numeroTel.value.length === 12){
        var replaceNumber = numeroTel.value.replace(/[()]/g, "");
        var includeParenteses = '(' + replaceNumber[0] + replaceNumber[1] + ')' + replaceNumber[2] + replaceNumber[3] + replaceNumber[4] + replaceNumber[5] + '-' + replaceNumber[6] + replaceNumber[7] + replaceNumber[8] + replaceNumber[9];
        numeroTel.value = includeParenteses;
    }   

    else if(numeroTel.value.length === 14){
        var replaceNumber = numeroTel.value.replace(/[()-]/g, "");
        var includeParenteses = '(' + replaceNumber[0] + replaceNumber[1] + ')' + replaceNumber[2] + replaceNumber[3] + replaceNumber[4] + replaceNumber[5] + replaceNumber[6] + '-' + replaceNumber[7] + replaceNumber[8] + replaceNumber[9] + replaceNumber[10];
        numeroTel.value = includeParenteses;
    }   


    if(numeroTel.value.length > 4 && numeroTel.value.length <= 14 && event.data === null){
        var numberCancelHifen = numeroTel.value.replace(/-/g, "");
        numeroTel.value = numberCancelHifen;

        if(numeroTel.value.length === 12){
            var replaceNumber = numeroTel.value.replace(/[()]/g, "");
            var includeParenteses = '(' + replaceNumber[0] + replaceNumber[1] + ')' + replaceNumber[2] + replaceNumber[3] + replaceNumber[4] + replaceNumber[5] + '-' + replaceNumber[6] + replaceNumber[7] + replaceNumber[8] + replaceNumber[9];
            numeroTel.value = includeParenteses;
        }
    }

    else if(numeroTel.value.length > 0 && numeroTel.value.length <= 4 && event.data === null){
        var numberCancelHifen = numeroTel.value.replace(/[()]/g, "");
        numeroTel.value = numberCancelHifen;

        if(numeroTel.value.length === 2){
            var newNumberOneParenteses = '(' + numeroTel.value[0] + numeroTel.value[1];
            numeroTel.value = newNumberOneParenteses;

        }

        else if(numeroTel.value.length === 1){
            var newNumberOneParenteses = '(' + numeroTel.value[0];
            numeroTel.value = newNumberOneParenteses;

        }
    }


});


var idNome = document.querySelector('#nome');
idNome.addEventListener('input', ()=>{
    var atualizaNome = event.target.value.replace(/\W/g, "");
    var atualizaNomeValue = atualizaNome.replace(/\d/g, "");

    idNome.value = atualizaNomeValue;
})



// MOBILE EFEITOS NAS SETAS PARA DIREITA E ESQUERDA QUE MEXEM A DIV DO QUADRADO
var setaPEsqeurda = document.querySelectorAll('.leftMobile');
var setaPDireita = document.querySelectorAll('.rightMobile');


var oneContainerImage = document.querySelector('#one');
var twoContainerImage = document.querySelector('#two');
var treeContainerImage = document.querySelector('#tree');
var fourContainerImage = document.querySelector('#four');
var fiveContainerImage = document.querySelector('#five');
var sixContainerImage = document.querySelector('#six');
var sevenContainerImage = document.querySelector('#seven');
var eigthContainerImage = document.querySelector('#eigth');
var nineContainerImage = document.querySelector('#nine');

for(var setasLeft of setaPEsqeurda){
setasLeft.addEventListener('click', ()=>{
    clicked = clicked - 1
    if(clicked === -1){
        clicked = 8

        if(clicked === 8){
             oneContainerImage.classList.add('remove-mobile');
             nineContainerImage.classList.remove('remove-mobile');

             setaPEsqeurda[0].parentNode.classList.add('remove-mobile');
             setaPEsqeurda[8].parentNode.classList.remove('remove-mobile');
         }
    }

    

    else if(clicked === 7){
        nineContainerImage.classList.add('remove-mobile');
        eigthContainerImage.classList.remove('remove-mobile');

        setaPEsqeurda[8].parentNode.classList.add('remove-mobile');
        setaPEsqeurda[7].parentNode.classList.remove('remove-mobile');
    }

    else if(clicked === 6){
        eigthContainerImage.classList.add('remove-mobile');
        sevenContainerImage.classList.remove('remove-mobile');

        setaPEsqeurda[7].parentNode.classList.add('remove-mobile');
        setaPEsqeurda[6].parentNode.classList.remove('remove-mobile');
    }

    else if(clicked === 5){
        sevenContainerImage.classList.add('remove-mobile');
        sixContainerImage.classList.remove('remove-mobile');

        setaPEsqeurda[6].parentNode.classList.add('remove-mobile');
        setaPEsqeurda[5].parentNode.classList.remove('remove-mobile');
    }

    else if(clicked === 4){
        sixContainerImage.classList.add('remove-mobile');
        fiveContainerImage.classList.remove('remove-mobile');

        setaPEsqeurda[5].parentNode.classList.add('remove-mobile');
        setaPEsqeurda[4].parentNode.classList.remove('remove-mobile');
    }

    else if(clicked === 3){
        fiveContainerImage.classList.add('remove-mobile');
        fourContainerImage.classList.remove('remove-mobile');

        setaPEsqeurda[4].parentNode.classList.add('remove-mobile');
        setaPEsqeurda[3].parentNode.classList.remove('remove-mobile');
    }

    else if(clicked === 2){
        fourContainerImage.classList.add('remove-mobile');
        treeContainerImage.classList.remove('remove-mobile');

        setaPEsqeurda[3].parentNode.classList.add('remove-mobile');
        setaPEsqeurda[2].parentNode.classList.remove('remove-mobile');
    }

    else if(clicked === 1){
        treeContainerImage.classList.add('remove-mobile');
        twoContainerImage.classList.remove('remove-mobile');

        setaPEsqeurda[2].parentNode.classList.add('remove-mobile');
        setaPEsqeurda[1].parentNode.classList.remove('remove-mobile');
    }

    else if(clicked === 0){
        twoContainerImage.classList.add('remove-mobile');
        oneContainerImage.classList.remove('remove-mobile');

        setaPEsqeurda[1].parentNode.classList.add('remove-mobile');
        setaPEsqeurda[0].parentNode.classList.remove('remove-mobile');
    }


    return clicked

})
}




// seta Para a Direitra
for(var setasRight of setaPDireita){
    setasRight.addEventListener('click', ()=>{
        clicked++
        if(clicked === 1){
            oneContainerImage.classList.add('remove-mobile');
            twoContainerImage.classList.remove('remove-mobile');
    
            setaPDireita[0].parentNode.classList.add('remove-mobile');
            setaPDireita[1].parentNode.classList.remove('remove-mobile');
        }
    
        else if(clicked === 2){
            twoContainerImage.classList.add('remove-mobile');
            treeContainerImage.classList.remove('remove-mobile');
    
            setaPDireita[1].parentNode.classList.add('remove-mobile');
            setaPDireita[2].parentNode.classList.remove('remove-mobile');
        }
    
        else if(clicked === 3){
            treeContainerImage.classList.add('remove-mobile');
            fourContainerImage.classList.remove('remove-mobile');
    
            setaPDireita[2].parentNode.classList.add('remove-mobile');
            setaPDireita[3].parentNode.classList.remove('remove-mobile');
        }
    
        else if(clicked === 4){
            fourContainerImage.classList.add('remove-mobile');
            fiveContainerImage.classList.remove('remove-mobile');
    
            setaPDireita[3].parentNode.classList.add('remove-mobile');
            setaPDireita[4].parentNode.classList.remove('remove-mobile');
        }
    
        else if(clicked === 5){
            fiveContainerImage.classList.add('remove-mobile');
            sixContainerImage.classList.remove('remove-mobile');
    
            setaPDireita[4].parentNode.classList.add('remove-mobile');
            setaPDireita[5].parentNode.classList.remove('remove-mobile');
        }
    
        else if(clicked === 6){
            sixContainerImage.classList.add('remove-mobile');
            sevenContainerImage.classList.remove('remove-mobile');
    
            setaPDireita[5].parentNode.classList.add('remove-mobile');
            setaPDireita[6].parentNode.classList.remove('remove-mobile');
        }
    
        else if(clicked === 7){
            sevenContainerImage.classList.add('remove-mobile');
            eigthContainerImage.classList.remove('remove-mobile');
    
            setaPDireita[6].parentNode.classList.add('remove-mobile');
            setaPDireita[7].parentNode.classList.remove('remove-mobile');
        }
    
        else if(clicked === 8){
            eigthContainerImage.classList.add('remove-mobile');
            nineContainerImage.classList.remove('remove-mobile');
    
            setaPDireita[7].parentNode.classList.add('remove-mobile');
            setaPDireita[8].parentNode.classList.remove('remove-mobile');
        }
    
        else if(clicked === 9){
            clicked = 0

            if(clicked === 0){
                nineContainerImage.classList.add('remove-mobile');
                oneContainerImage.classList.remove('remove-mobile');
    
                setaPDireita[8].parentNode.classList.add('remove-mobile');
                setaPDireita[0].parentNode.classList.remove('remove-mobile');
            }
        }

       return clicked
    
    })
}

var ballsMobile = document.querySelectorAll('.ball-mobile');
var centerBallsMobile = document.querySelectorAll('.center-bal-mobile');
var backgroundMobile = document.querySelector('.background-mobile');


// efeito das três bolinhas no mobile
ballsMobile[0].addEventListener('click', ()=>{
    ballsMobile[0].classList.remove('ball-mobile');
    ballsMobile[0].classList.add('ball-mobile-two');

    centerBallsMobile[0].classList.remove('center-bal-mobile');
    centerBallsMobile[0].classList.add('center-bal-mobile-two');

    ballsMobile[1].classList.remove('ball-mobile-two');
    ballsMobile[1].classList.add('ball-mobile');

    centerBallsMobile[1].classList.remove('center-bal-mobile-two');
    centerBallsMobile[1].classList.add('center-bal-mobile');

    ballsMobile[2].classList.remove('ball-mobile-two');
    ballsMobile[2].classList.add('ball-mobile');

    centerBallsMobile[2].classList.remove('center-bal-mobile-two');
    centerBallsMobile[2].classList.add('center-bal-mobile');

    backgroundMobile.style.background= "url(../../assets/img/floresta.jpg)";
    backgroundMobile.style.backgroundSize = "cover";
    backgroundMobile.style.objectFit = "cover";
    backgroundMobile.style.backgroundRepeat = "no-repeat";
})


ballsMobile[1].addEventListener('click', ()=>{
    ballsMobile[0].classList.remove('ball-mobile-two');
    ballsMobile[0].classList.add('ball-mobile');

    centerBallsMobile[0].classList.remove('center-bal-mobile-two');
    centerBallsMobile[0].classList.add('center-bal-mobile');


    ballsMobile[1].classList.remove('ball-mobile');
    ballsMobile[1].classList.add('ball-mobile-two');

    centerBallsMobile[1].classList.remove('center-bal-mobile');
    centerBallsMobile[1].classList.add('center-bal-mobile-two');


    ballsMobile[2].classList.remove('ball-mobile-two');
    ballsMobile[2].classList.add('ball-mobile');

    centerBallsMobile[2].classList.remove('center-bal-mobile-two');
    centerBallsMobile[2].classList.add('center-bal-mobile');
    

    backgroundMobile.style.background= "url(../../assets/img/Background.full.webp)";
    backgroundMobile.style.backgroundSize = "cover";
    backgroundMobile.style.objectFit = "cover";
    backgroundMobile.style.backgroundRepeat = "no-repeat";
})


ballsMobile[2].addEventListener('click', ()=>{
    ballsMobile[0].classList.remove('ball-mobile-two');
    ballsMobile[0].classList.add('ball-mobile');

    centerBallsMobile[0].classList.remove('center-bal-mobile-two');
    centerBallsMobile[0].classList.add('center-bal-mobile');


    ballsMobile[1].classList.remove('ball-mobile-two');
    ballsMobile[1].classList.add('ball-mobile');

    centerBallsMobile[1].classList.remove('center-bal-mobile-two');
    centerBallsMobile[1].classList.add('center-bal-mobile');

    ballsMobile[2].classList.remove('ball-mobile');
    ballsMobile[2].classList.add('ball-mobile-two');

    centerBallsMobile[2].classList.remove('center-bal-mobile');
    centerBallsMobile[2].classList.add('center-bal-mobile-two');



    backgroundMobile.style.background= "url(../../assets/img/primavera.jpg)";
    backgroundMobile.style.backgroundSize = "cover";
    backgroundMobile.style.objectFit = "cover";
    backgroundMobile.style.backgroundRepeat = "no-repeat";
})
