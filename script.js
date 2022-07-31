const ordenacao = () => {

    const num1 = document.getElementById('value01').value;
    const num2 = document.getElementById('value02').value;
    const num3 = document.getElementById('value03').value;

    let converter = parseInt(num1);
    let converter2 = parseInt(num2);
    let converter3 = parseInt(num3);

    let maior, menor, meio

    if (converter > converter2 && converter > converter3){
        maior = converter
        if (converter2 < converter3){
            menor = converter2
            meio = converter3
        }else{
            menor = converter3
            meio = converter2
        }
    }else if (converter < converter2 && converter < converter3){
        menor = converter
        if (converter2 > converter3){
            maior = converter2
            meio = converter3
        }else{
            maior = converter3
            meio = converter2
        }
    }else{
        meio = converter
        if (converter2 > converter3){
            maior = converter2
            menor = converter3
        }else{
            maior = converter3
            menor = converter2
        }
    }
    
    const valorfinal = document.getElementById('resultado').innerHTML = menor + '|' + meio + '|' + maior;
}

