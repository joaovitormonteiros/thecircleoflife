//link do video prova 2: https://youtu.be/FEyga4kM0w0

var tela=1
var largura=200
var altura=50
var xmenu=183
var xmenu1=9
var xmenu2=362
var xmenu3=5
var ymenu1=250
var ymenu2=295
var ymenu3=295
var ymenu4=285
var macacoX=240
var macacoY=270
var raio=70
var xfase=362
var yfase=295
var score=0
var animalX=240
var animalY=270
var cachorroX=240
var cachorroY=270
var jacareX=240
var jacareY=270
var leaoX=240
var leaoY=270
var girinoX=240
var girinoY=270
var cobraX=240
var cobraY=270
var vacaX=240
var vacaY=270
var panteraX=240
var panteraY=270
var casuloX=240
var casuloY=270
var jacaX=240
var jacaY=270
var tigreX=240
var tigreY=270
var coelhoX=240
var coelhoY=270
var azulX=240
var azulY=270
var polarX=240
var polarY=270


function preload() {
  imgMenu = loadImage('animais menu3.jpg');
  imgInstrucao = loadImage('moldura animais.jpg');
  imgVitor=loadImage('foto vitor.jpeg')
  imgTorrada=loadImage('foto torrada.jpg')
  imgPantano = loadImage('pantano.png')
  imgSavana = loadImage('savana.jpg')
  imgSelva = loadImage('selva.jpg')
  imgFundo1 = loadImage('fundo horizonte.jpg')
  imgMacaco = loadImage('macaco.jpg')
  imgLeao = loadImage('leao.jpg')
  imgBife = loadImage('bife.jpg')
  imgCapim = loadImage('capim.jpg')
  imgCenoura = loadImage('cenoura.jpg')
  imgCachorro = loadImage('cachorro.jpg')
  imgLobog = loadImage('loboguara.jpg')
  imgVaca = loadImage('vaca.jpg')
  imgJacare = loadImage('jacaré.jpg')
  imgCobra = loadImage('cobra.jpg')
  imgCavalo = loadImage('cavalo.jpg')
  imgDeserto = loadImage('deserto.jpg')
  imgGirino = loadImage('girino.jpg')
  imgSapo = loadImage('sapo.jpg')
  imgOnca = loadImage('onca.jpg')
  imgPantera = loadImage('pantera.jpg')
  imgTigre = loadImage('tigre.jpg')
  imgAbelha = loadImage('abelha.jpg')
  imgBorboleta = loadImage('borboleta.jpg')
  imgCasulo = loadImage('casulo.jpg')
  imgLouvadeus = loadImage('louvadeus.jpg')
  imgCatinga = loadImage('caatinga.jpg')
  imgCoelho = loadImage('coelho.jpg')
  imgAzul = loadImage('azul.jpg')
  imgPolar = loadImage('polar.jpg')
  imgGelo = loadImage('gelo.jpg')
  imgResultado = loadImage('moldurar.jpg')
}

function setup() {
  createCanvas(570, 350);
}

function draw() {
  

  textStyle(BOLD);
  if(tela==1){
  
    image(imgMenu,-30,-20) //imagem menu
    
    textAlign(CENTER) //texto do menu
    textSize(44)
    textStyle(BOLD)
    text('The Circle of Life',280,50)
    
    textSize(26)
    
    if(mouseX>xmenu && mouseX < xmenu+largura && mouseY>ymenu1 && mouseY<ymenu1+altura){ //botão iniciar
    stroke(200)
    fill(240)
    rect(xmenu, ymenu1, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 4
        mouseX=0
      }
    }
    fill(10)
    noStroke()
    text('Iniciar',285,285) 
    
    if(mouseX>xmenu1 && mouseX < xmenu1+largura && mouseY>ymenu2 && mouseY<ymenu2+altura){ //botão creditos
    stroke(200)
    fill(240)
    rect(xmenu1, ymenu2, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 2
        mouseX=0
      }
    }
    
    fill(10)
    noStroke()
    text('Créditos',110,330)
    
    if(mouseX>xmenu2 && mouseX<xmenu2+largura && mouseY>ymenu3 && mouseY<ymenu3+altura){ //botão intrução
      stroke(200)
      fill(240)
      rect(xmenu2, ymenu3, largura, altura, 15)
      if(mouseIsPressed){
        tela = 3
        mouseX=0
      }
  }
    fill(10)
    noStroke()
    text('Instruções',465,330)
  }
    
  else if(tela==2){ // tela creditos
   background(30,40,100)
    image(imgInstrucao,-30,-10,600,370)
    image(imgVitor,400,50,120,120)
    image(imgTorrada,400,185,100,120)
    textAlign(CENTER)
    textSize(26)
    
    if(mouseX>xmenu3 && mouseX<xmenu3+largura && mouseY>ymenu4 && mouseY<ymenu4+altura){ //botão voltar
      stroke(200)
      fill(240)
      rect(xmenu3, ymenu4, largura, altura,15)
   if (mouseIsPressed){
     tela = 1
     mouseX=0
   }
    }
    fill(10)
    noStroke()
    text('< Voltar',100,320) //palavra voltar
    
    textSize(35)
    textStyle(BOLD)
    textAlign(CENTER)
    text('Créditos',180,50) //texto ceditos
    
    textSize(15)
    textStyle(BOLD)
    textAlign(CENTER)
    text('João Vitor Monteiro de Souza:Programador',230,120)
    text('Leonardo Diniz:Aluno de Licenciatura em ciências biológicas',80,230,300,300)
    
    }
  else if(tela==3){ // tela instruções
     background(200)
    image(imgInstrucao,-30,-10,600,370)
    textAlign(CENTER) 
    textSize(26)
    
    if(mouseX>xmenu3 && mouseX<xmenu3+largura && mouseY>ymenu4 && mouseY<ymenu4+altura){ //botão voltar
      stroke(200)
      fill(240)
      rect(xmenu3, ymenu4, largura, altura,15)
   if (mouseIsPressed){
     tela = 1
     mouseX=0
   }
    }
    fill(10)
    noStroke()
    text('< Voltar',100,320)
    
    textSize(35) //palavra instrução
    text('Instruções',280,50)
    
    textSize(15)
    textStyle(NORMAL)
    textAlign(CENTER)
    text('Ano: 3°ano do ensino fundamental'+'\n'+'Matéria: Ciências'+'\n'+'Habilidades: (EF03CI05) e (EF03CI04)'+"\n"+'                          Resumo: O jogo vai se tratar de um quiz'+'\n'+'   '+'         onde o jogador terá de levar os personagens até a resposta'+'\n'+'correta utilizando as setas do teclado,ganha\n se responder corretamente 10 de 15 questões.'+'\n',270,100)
         
}
  else if(tela==4){ //TELA 4
  background(220)
    image(imgFundo1,0,0,570,400)
  image(imgSelva,20,80,150,120)
  image(imgSavana,200,80,150,120)
  image(imgPantano,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Leve o macaquinho ao seu bioma de origem:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     macacoX=macacoX-5
   if(keyIsDown(RIGHT_ARROW))
     macacoX+=5
   if(keyIsDown(UP_ARROW))
     macacoY-=5
   if(keyIsDown(DOWN_ARROW))
     macacoY+=5
   image(imgMacaco,macacoX,macacoY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Selva',92,220)
  text('Savana',275,220) 
  text('Pantano',455,220)  
 }
  if(macacoX>20 && macacoX<20+150 && macacoY>80 && macacoY<80+120 && tela==4){ //RESPOSTA CERTA SELVA
   tela=19
    score++
   }
     
   
  
    if(macacoX>200 && macacoX<200+150 && macacoY>80 && macacoY<80+120 && tela==4){ //RESPOSTA ERRADA SAVANA
     tela=20
    
}
      
    if(macacoX>380 && macacoX<380+150 && macacoY>80 && macacoY<80+120 && tela==4){ //RESPOSTA ERRADA PANTANO
     tela=20
     }
    else if(tela==19){
    background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 5
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==20){
    background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 5
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }  
  
  else if(tela==5){  //tela 5
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgCapim,20,80,150,120)
  image(imgCenoura,200,80,150,120)
  image(imgBife,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
   text('Leve o leão até seu alimento preferido:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     animalX=animalX-5
   if(keyIsDown(RIGHT_ARROW))
     animalX+=5
   if(keyIsDown(UP_ARROW)) //tela 5
     animalY-=5
   if(keyIsDown(DOWN_ARROW))
     animalY+=5
   image(imgLeao,animalX,animalY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Capim',92,220)
  text('Cenoura',275,220) 
  text('Carne',455,220)  
 }
  if(animalX>20 && animalX<20+150 && animalY>80 && animalY<80+120 && tela==5){ //RESPOSTA CERTA SELVA
   tela=21
  }
     
    if(animalX>200 && animalX<200+150 && animalY>80 && animalY<80+120 && tela==5){ //RESPOSTA ERRADA SAVANA
     tela=21
    
}
     
    if(animalX>380 && animalX<380+150 && animalY>80 && animalY<80+120 && tela==5){ //RESPOSTA ERRADA PANTANO
     tela=22
       score++
     }
      else if(tela==21){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 6
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==22){
    background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 6
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  
  
  else if(tela==6){ //tela 6
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgLobog,20,80,150,120)
  image(imgLeao,200,80,150,120)
  image(imgVaca,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Qual animal pertence a mesma familia do cachorro?:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     cachorroX=cachorroX-5
   if(keyIsDown(RIGHT_ARROW))
     cachorroX+=5
   if(keyIsDown(UP_ARROW))
     cachorroY-=5    //tela 6
   if(keyIsDown(DOWN_ARROW))
     cachorroY+=5
   image(imgCachorro,cachorroX,cachorroY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Lobo Guará',92,220)
  text('Leão',275,220) 
  text('Vaca',455,220)   //tela 6
 }
  if(cachorroX>20 && cachorroX<20+150 && cachorroY>80 && cachorroY<80+120 && tela==6){ //RESPOSTA CERTA SELVA
   tela=24
   score++
   }
    
  
    if(cachorroX>200 && cachorroX<200+150 && cachorroY>80 && cachorroY<80+120 && tela==6){ //RESPOSTA ERRADA SAVANA
     tela=23
    
}
      
    if(cachorroX>380 && cachorroX<380+150 && cachorroY>80 && cachorroY<80+120 && tela==6){ //RESPOSTA ERRADA PANTANO
     tela=23
     }
     else if(tela==23){
    background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 7
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==24){
    background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 7
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  } 
  else if(tela==7){ // tela 7
  background(200)
    image(imgFundo1,0,0,570,400)
  image(imgMacaco,20,80,150,120)
  image(imgCobra,200,80,150,120)
  image(imgCavalo,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Qual animal pertence a mesma classe do jacaré?:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     jacareX=jacareX-5
   if(keyIsDown(RIGHT_ARROW))
     jacareX+=5
   if(keyIsDown(UP_ARROW))
     jacareY-=5    //tela 7
   if(keyIsDown(DOWN_ARROW))
     jacareY+=5
   image(imgJacare,jacareX,jacareY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Macaco',92,220)
  text('Cobra',275,220) 
  text('Cavalo',455,220)   //tela 7
 }
  if(jacareX>20 && jacareX<20+150 && jacareY>80 && jacareY<80+120 && tela==7){ //RESPOSTA CERTA SELVA
   tela=25
  
   }
     
    if(jacareX>200 && jacareX<200+150 && jacareY>80 && jacareY<80+120 && tela==7){ //RESPOSTA ERRADA SAVANA
     tela=26
    score++
}
      
    if(jacareX>380 && jacareX<380+150 && jacareY>80 && jacareY<80+120 && tela==7){ //RESPOSTA ERRADA PANTANO
    tela=25
     }
      else if(tela==25){
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 8
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==26){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 8
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==8){
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgPantano,20,80,150,120)
  image(imgSavana,200,80,150,120)
  image(imgDeserto,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Leve o leão até seu bioma de origem:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     leaoX=leaoX-5
   if(keyIsDown(RIGHT_ARROW))
     leaoX+=5
   if(keyIsDown(UP_ARROW))
     leaoY-=5    //tela 8
   if(keyIsDown(DOWN_ARROW))
     leaoY+=5
   image(imgLeao,leaoX,leaoY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Pantano',92,220)
  text('Savana',275,220) 
  text('Deserto',455,220)   //tela 8
 }
  if(leaoX>20 && leaoX<20+150 && leaoY>80 && leaoY<80+120 && tela==8){ //RESPOSTA CERTA SELVA
   tela=27
   }
     
    if(leaoX>200 && leaoX<200+150 && leaoY>80 && leaoY<80+120 && tela==8){ //RESPOSTA ERRADA SAVANA
    tela=28
       score++
}
      
    if(leaoX>380 && leaoX<380+150 && leaoY>80 && leaoY<80+120 && tela==8){ //RESPOSTA ERRADA PANTANO
    tela=27
     }
     else if(tela==27){
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 9
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==28){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 9
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==9){
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgJacare,20,80,150,120)
  image(imgCobra,200,80,150,120)
  image(imgSapo,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('O girino é filhote de que animal?:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     girinoX=girinoX-5
   if(keyIsDown(RIGHT_ARROW))
     girinoX+=5
   if(keyIsDown(UP_ARROW))
     girinoY-=5    //tela 9
   if(keyIsDown(DOWN_ARROW))
     girinoY+=5
   image(imgGirino,girinoX,girinoY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Jacaré',92,220)
  text('Cobra',275,220) 
  text('Sapo',455,220)   //tela 9
 }
  if(girinoX>20 && girinoX<20+150 && girinoY>80 && girinoY<80+120 && tela==9){ //RESPOSTA CERTA SELVA
   tela=29
   }
    
    if(girinoX>200 && girinoX<200+150 && girinoY>80 && girinoY<80+120 && tela==9){ //RESPOSTA ERRADA SAVANA
     tela=29
       
}
      
    if(girinoX>380 && girinoX<380+150 && girinoY>80 && girinoY<80+120 && tela==9){ //RESPOSTA ERRADA PANTANO
    tela=30
       score++
     }
     else if(tela==29){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 10
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==30){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 10
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  } 
  else if(tela==10){
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgJacare,20,80,150,120)
  image(imgCavalo,200,80,150,120)
  image(imgVaca,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Da mesma forma que a cobra,qual \n desses animais põe ovos :',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     cobraX=cobraX-5
   if(keyIsDown(RIGHT_ARROW))
     cobraX+=5
   if(keyIsDown(UP_ARROW))
     cobraY-=5    //tela 10
   if(keyIsDown(DOWN_ARROW))
     cobraY+=5
   image(imgCobra,cobraX,cobraY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Jacaré',92,220)
  text('Cavalo',275,220) 
  text('Vaca',455,220)   //tela 10
 }
  if(cobraX>20 && cobraX<20+150 && cobraY>80 && cobraY<80+120 && tela==10){ //RESPOSTA CERTA SELVA
   tela=32
     score++
   }
     
    if(cobraX>200 && cobraX<200+150 && cobraY>80 && cobraY<80+120 && tela==10){ //RESPOSTA ERRADA SAVANA
     tela=31
       
}
     
    if(cobraX>380 && cobraX<380+150 && cobraY>80 && cobraY<80+120 && tela==10){ //RESPOSTA ERRADA PANTANO
     tela=31
     }
     else if(tela==31){
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 11
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==32){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 11
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  } 
  else if(tela==11){
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgCenoura,20,80,150,120)
  image(imgBife,200,80,150,120)
  image(imgCapim,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Leve a vaca até seu alimento preferido:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     vacaX=vacaX-5
   if(keyIsDown(RIGHT_ARROW))
     vacaX+=5
   if(keyIsDown(UP_ARROW))
     vacaY-=5    //tela 11
   if(keyIsDown(DOWN_ARROW))
     vacaY+=5
   image(imgVaca,vacaX,vacaY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Cenoura',92,220)
  text('Carne',275,220) 
  text('Capim',455,220)   //tela 11
 }
  if(vacaX>20 && vacaX<20+150 && vacaY>80 && vacaY<80+120 && tela==11){ //RESPOSTA CERTA SELVA
  tela=33
   }
     
    if(vacaX>200 && vacaX<200+150 && vacaY>80 && vacaY<80+120 && tela==11){ //RESPOSTA ERRADA SAVANA
     tela=33
       
}
      
    if(vacaX>380 && vacaX<380+150 && vacaY>80 && vacaY<80+120 && tela==11){ //RESPOSTA ERRADA PANTANO
     tela=34
       score++
     }
      else if(tela==33){
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 12
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==34){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 12
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==12){
    background(200)
   image(imgFundo1,0,0,570,400)
  image(imgLeao,20,80,150,120)
  image(imgOnca,200,80,150,120)
  image(imgTigre,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Além da pantera negra qual outro felino\npode ser encontrado nas américas?:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     panteraX=panteraX-5
   if(keyIsDown(RIGHT_ARROW))
     panteraX+=5
   if(keyIsDown(UP_ARROW))
     panteraY-=5    //tela 11
   if(keyIsDown(DOWN_ARROW))
     panteraY+=5
   image(imgPantera,panteraX,panteraY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Leão',92,220)
  text('Onça',275,220) 
  text('Tigre',455,220)   //tela 12
 }
  if(panteraX>20 && panteraX<20+150 && panteraY>80 && panteraY<80+120 && tela==12){ //RESPOSTA CERTA SELVA
   tela=35
   }
     
    if(panteraX>200 && panteraX<200+150 && panteraY>80 && panteraY<80+120 && tela==12){ //RESPOSTA ERRADA SAVANA
     tela=36
       score++
}
     
    if(panteraX>380 && panteraX<380+150 && panteraY>80 && panteraY<80+120 && tela==12){ //RESPOSTA ERRADA PANTANO
     tela=35
     }
   else if(tela==35){
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 13
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==36){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 13
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }   
  else if(tela==13){
    background(200)
   image(imgFundo1,0,0,570,400)
  image(imgLouvadeus,20,80,150,120)
  image(imgAbelha,200,80,150,120)
  image(imgBorboleta,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Esta etapa pertence ao ciclo de vida de qual inseto:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     casuloX=casuloX-5
   if(keyIsDown(RIGHT_ARROW))
     casuloX+=5
   if(keyIsDown(UP_ARROW))
     casuloY-=5    //tela 11
   if(keyIsDown(DOWN_ARROW))
     casuloY+=5
   image(imgCasulo,casuloX,casuloY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Louva-deus',92,220)
  text('Abelha',275,220) 
  text('Borboleta',455,220)   //tela 13
 }
  if(casuloX>20 && casuloX<20+150 && casuloY>80 && casuloY<80+120 && tela==13){ //RESPOSTA CERTA SELVA
   tela=37
   }
     
  
    if(casuloX>200 && casuloX<200+150 && casuloY>80 && casuloY<80+120 && tela==13){ //RESPOSTA ERRADA SAVANA
     tela=37
       
}
      
    if(casuloX>380 && casuloX<380+150 && casuloY>80 && casuloY<80+120 && tela==13){ //RESPOSTA ERRADA PANTANO
     tela=38
       score++
     }
     else if(tela==37){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 14
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)}
  else if(tela==38){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 14
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  } 
  else if(tela==14){
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgCatinga,20,80,150,120)
  image(imgPantano,200,80,150,120)
  image(imgSelva,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Leve o jacaré até seu bioma de origem:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     jacaX=jacaX-5
   if(keyIsDown(RIGHT_ARROW))
     jacaX+=5
   if(keyIsDown(UP_ARROW))
     jacaY-=5    //tela 14
   if(keyIsDown(DOWN_ARROW))
     jacaY+=5
   image(imgJacare,jacaX,jacaY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Caatinga',92,220)
  text('Pântano',275,220) 
  text('Selva',455,220)   //tela 14
 }
  if(jacaX>20 && jacaX<20+150 && jacaY>80 && jacaY<80+120 && tela==14){ //RESPOSTA CERTA SELVA
   tela=39
   }
     
    if(jacaX>200 && jacaX<200+150 && jacaY>80 && jacaY<80+120 && tela==14){ //RESPOSTA ERRADA SAVANA
    tela=40
       score++
}
     
    if(jacaX>380 && jacaX<380+150 && jacaY>80 && jacaY<80+120 && tela==14){ //RESPOSTA ERRADA PANTANO
     tela=39
       
     }
    else if(tela==39){
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 15
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==40){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 15
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }  
  else if(tela==15){
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgCavalo,20,80,150,120)
  image(imgLobog,200,80,150,120)
  image(imgOnca,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Qual animal pertence a mesma familia do tigre:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     tigreX=tigreX-5
   if(keyIsDown(RIGHT_ARROW))
     tigreX+=5
   if(keyIsDown(UP_ARROW))
     tigreY-=5    //tela 14
   if(keyIsDown(DOWN_ARROW))
     tigreY+=5
   image(imgTigre,tigreX,tigreY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Cavalo',92,220)
  text('Lobo-guará',275,220) 
  text('Onça',455,220)   //tela 15
 }
  if(tigreX>20 && tigreX<20+150 && tigreY>80 && tigreY<80+120 && tela==15){ //RESPOSTA CERTA SELVA
   tela=41
   }
    
    if(tigreX>200 && tigreX<200+150 && tigreY>80 && tigreY<80+120 && tela==15){ //RESPOSTA ERRADA SAVANA
     tela=41
       
}
      
    if(tigreX>380 && tigreX<380+150 && tigreY>80 && tigreY<80+120 && tela==15){ //RESPOSTA ERRADA PANTANO
     tela=42
       score++
     }
     else if(tela==41){
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 16
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==42){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 16
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  } 
  else if(tela==16){
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgBife,20,80,150,120)
  image(imgCapim,200,80,150,120)
  image(imgCenoura,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Leve o coelho até seu alimento preferido:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     coelhoX=coelhoX-5
   if(keyIsDown(RIGHT_ARROW))
     coelhoX+=5
   if(keyIsDown(UP_ARROW))
     coelhoY-=5    //tela 14
   if(keyIsDown(DOWN_ARROW))
     coelhoY+=5
   image(imgCoelho,coelhoX,coelhoY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Carne',92,220)
  text('Capim',275,220) 
  text('Cenoura',455,220)   //tela 15
 }
  if(coelhoX>20 && coelhoX<20+150 && coelhoY>80 && coelhoY<80+120 && tela==16){ //RESPOSTA CERTA SELVA
   
    tela=43
   }
     
    if(coelhoX>200 && coelhoX<200+150 && coelhoY>80 && coelhoY<80+120 && tela==16){ //RESPOSTA ERRADA SAVANA
     tela=43
       
}
      
    if(coelhoX>380 && coelhoX<380+150 && coelhoY>80 && coelhoY<80+120 && tela==16){ //RESPOSTA ERRADA PANTANO
     tela=44
       score++
     }
     else if(tela==43){
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 17
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==44){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 17
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  } 
  else if(tela==17){
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgCobra,20,80,150,120)
  image(imgVaca,200,80,150,120)
  image(imgLobog,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Além da ararinha azul,qual o outro\nespécie ameaçado de extinção:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     azulX=azulX-5
   if(keyIsDown(RIGHT_ARROW))
     azulX+=5
   if(keyIsDown(UP_ARROW))
     azulY-=5    //tela 14
   if(keyIsDown(DOWN_ARROW))
     azulY+=5
   image(imgAzul,azulX,azulY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Cobra',92,220)
  text('Vaca',275,220) 
  text('Lobo-guará',455,220)   //tela 17
 }
  if(azulX>20 && azulX<20+150 && azulY>80 && azulY<80+120 && tela==17){ //RESPOSTA CERTA SELVA
   tela=45
   }
     
    if(azulX>200 && azulX<200+150 && azulY>80 && azulY<80+120 && tela==17){ //RESPOSTA ERRADA SAVANA
     tela=45
       
}
      
    if(azulX>380 && azulX<380+150 && azulY>80 && azulY<80+120 && tela==17){ //RESPOSTA ERRADA PANTANO
     tela=46
       score++
     }
      else if(tela==45){
  
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 18
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)}
  else if(tela==46){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 18
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Próximo >',465,330)
  }
  else if(tela==18){
    background(200)
    image(imgFundo1,0,0,570,400)
  image(imgPantano,20,80,150,120)
  image(imgGelo,200,80,150,120)
  image(imgCatinga,380,80,150,120)
  textSize(20)
  textStyle(BOLD)
  text('Leve o urso polar ao seu habitat de origem:',300,50)  
   if(keyIsDown(LEFT_ARROW)) //movimento do personagem
     polarX=polarX-5
   if(keyIsDown(RIGHT_ARROW))
     polarX+=5
   if(keyIsDown(UP_ARROW))
     polarY-=5    //tela 14
   if(keyIsDown(DOWN_ARROW))
     polarY+=5
   image(imgPolar,polarX,polarY,raio,raio)
    
    textSize(20)
  textStyle(BOLD) //legendas das imagens
  text('Pântano',92,220)
  text('Deserto de gelo',275,220) 
  text('Caatinga',455,220)   //tela 18
 }
  if(polarX>20 && polarX<20+150 && polarY>80 && polarY<80+120 && tela==18){ //RESPOSTA CERTA SELVA
   tela=47
   }
     
    if(polarX>200 && polarX<200+150 && polarY>80 && polarY<80+120 && tela==18){ //RESPOSTA ERRADA SAVANA
     tela=48
      score++ 
}
      
    if(polarX>380 && polarX<380+150 && polarY>80 && polarY<80+120 && tela==18){ //RESPOSTA ERRADA PANTANO
     tela=47
      
     }
      else if(tela==47){
   background(250)
  textSize(36)
    textStyle(BOLD)
    text('Resposta Errada :(',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 49
        mouseX=0
      } //tela 20
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Resultado',465,330)
  }
  else if(tela==48){
  background(250)
  textSize(36)
    textStyle(BOLD)
    text('Certa Resposta',250,200)
    if(mouseX>xfase && mouseX < xfase+largura && mouseY>yfase && mouseY<yfase+altura){ //botão proximo
    stroke(200)
    fill(240)
    rect(xfase, yfase, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 49
        mouseX=0
      } //tela 19
    }
    fill(10)
    noStroke()
    
    textSize(26)
    textStyle(BOLD)
    text('Resultado',465,330)
  }
    else if(tela==49){
    background(200)
    image(imgResultado,0,0,570,350)
      if(score==0){
      textSize(26)
        textStyle(BOLD)
        text('Que pena...\nVocê acertou 0/15',280,200)
      }
      if(score==1){
      textSize(26)
        textStyle(BOLD)
        text('Que pena...\nVocê acertou 1/15',280,200)
      }
      if(score==2){
      textSize(26)
        textStyle(BOLD)
        text('Que pena...\nVocê acertou 2/15',280,200)
      }
      if(score==3){
      textSize(26)
        textStyle(BOLD)
        text('Que pena...\nVocê acertou 3/15',280,200)
      }
      if(score==4){
      textSize(26)
        textStyle(BOLD)
        text('Que pena...\nVocê acertou 4/15',280,200)
      }
      if(score==5){
      textSize(26)
        textStyle(BOLD)
        text('Que pena...\nVocê acertou 5/15',280,200)
      }
      if(score==6){
      textSize(26)
        textStyle(BOLD)
        text('Tente melhorar\nVocê acertou 6/15',280,200)
      }
      if(score==7){
      textSize(26)
        textStyle(BOLD)
        text('Tente melhorar\nVocê acertou 7/15',280,200)
      }
      if(score==8){
      textSize(26)
        textStyle(BOLD)
        text('Tente melhorar\nVocê acertou 8/15',280,200)
      }
      if(score==9){
      textSize(26)
        textStyle(BOLD)
        text('Quase lá\nVocê acertou 9/15',280,200)
      }
      if(score==10){
      textSize(26)
        textStyle(BOLD)
        text('Você é fera!\nAcertou 10/15',280,200)
      }
      if(score==11){
      textSize(26)
        textStyle(BOLD)
        text('Você é fera!\nAcertou 11/15',280,200)
      }
      if(score==12){
      textSize(26)
        textStyle(BOLD)
        text('Você é fera!\nAcertou 12/15',280,200)
      }
      if(score==13){
      textSize(26)
        textStyle(BOLD)
        text('Você é fera!\nAcertou 13/15',280,200)
      }
      if(score==14){
      textSize(26)
        textStyle(BOLD)
        text('Você é fera!\nAcertou 14/15',280,200)
      }
      if(score==15){
      textSize(26)
        textStyle(BOLD)
        text('Você é um MESTRE!!!!\nAcertou 15/15',280,200)
      }
      if(mouseX>xmenu1 && mouseX < xmenu1+largura && mouseY>ymenu2 && mouseY<ymenu2+altura){ //botão creditos
    stroke(200)
    fill(240)
    rect(xmenu1, ymenu2, largura, altura, 15)
      if (mouseIsPressed) {
        tela = 1
        mouseX=0
        score=0
        macacoX=240
        macacoY=270
        animalX=240
 animalY=270
 cachorroX=240
 cachorroY=270
 jacareX=240
 jacareY=270
 leaoX=240
 leaoY=270
 girinoX=240
 girinoY=270
 cobraX=240
 cobraY=270
 vacaX=240
 vacaY=270
 panteraX=240
 panteraY=270
 casuloX=240
 casuloY=270
 jacaX=240
 jacaY=270
 tigreX=240
 tigreY=270
 coelhoX=240
 coelhoY=270
 azulX=240
 azulY=270
 polarX=240
 polarY=270
      }
    }
    
    fill(10)
    stroke(200)
    text('MENU',110,330)
    }
  
}