export function semafaro(cor){

    if (cor== "vermelho"){
      return "Aguarde";
    }
    if (cor == "verde"){
         return "Pode passar";
      }
   else{
     return "Inválido";
      }
   
}

export function diasdaSemana(dia){
    
    if (dia==0){
        return "Domingo";
     }
    else if (dia==1){
      return "Segunda";
     }
     else if (dia==2){
       return "Terça";
     }
     else if (dia==3){
       return  "Quarta";
     }
     else if (dia==4){
       return  "Quinta";
     }
     else if (dia==5){
       return  "Sexta";
     }
     else if (dia==6){
       return  "Sabádo";
     }
     else{
       return  "Dia inválido";
     }
   
}

export function fatorial(limite){
 
    let n = 1;

      for ( let fat = limite; fat >= 1; fat--){
       n *= fat;
    } 
    return n;
}

































export function sequenciaPar(limite){

    let par= 0;

    for (let contar = 1; contar < numero ; contar++) {
            if (contar % 2 == 0)
             numero += contar;
            
         
    }
        return par;

}
