    const textButton = document.getElementById("text-btn");
    const imgButton = document.getElementById("img-btn");
    const modeButton = document.getElementById("mode-btn");
    const textAside = document.getElementById("aside-text");
    const imgAside = document.getElementById("aside-img");
    const mainContainer = document.getElementById("main-container");
    const headerColor = document.getElementById('headerColor');
    const buttontop = document.getElementsByClassName('button-top');
    const generadormemesblack = document.getElementById('titulo');
    // dark aside imagen
    const titleaside = document.getElementById('textoaside')
    const imagenTitle = document.getElementById('imagenaside')
    const urlAside= document.getElementById('urlaside')
    const tituloFondo = document.getElementById('tituloFondo')
    const filtrosAside = document.getElementById('filtrosAside')
    const brilloFiltro = document.getElementById('brillo')
    const opacidadFiltro = document.getElementById('Opacidad')
    const contrasteFiltro = document.getElementById('Contraste')
    const desenfoqueFiltro= document.getElementById('Desenfoque')
    const escalaFiltro = document.getElementById('escala')
    const sepiaFiltro = document.getElementById('Sepia')
    const hueFiltro = document.getElementById('hue')
    const saturadoFiltro = document.getElementById('saturado')
    const negativoFiltro = document.getElementById('Negativo')
    const InputColor= document.getElementById('color-input')
    const selectImagen =document.getElementById('select-imagen')
    const Restart = document.getElementById ('restart')
    // dark aside texto
    const superior = document.getElementById('superior')
    const topText = document.getElementById('toptext')
    const checkboxText = document.getElementById('text-checkbox')
    const inferior = document.getElementById('inferior')
    const bottomText = document.getElementById('boton-text')
    const checkboxBottom = document.getElementById('bottom-checkbox')
    const Fuente = document.getElementById('Fuente')
    const selectFuente = document.getElementById('select-fuente')
    const botonIzquierda = document.getElementById('izquierda-texto')
    const botonMedio= document.getElementById('medio-texto')
    const botonDerecha= document.getElementById('derecha-texto')
    const inputNumber = document.getElementById('input-number')
    const ColorText = document.getElementById('color-Text')
    const FondoText = document.getElementById('fondo-Text')
    const colorInput = document.getElementById('input-color')
    const fondoInput = document.getElementById('color-fondo-input')
    const fondoTransparente = document.getElementById('fondo-checkbox')
    const textoContorno = document.getElementById('texto-contorno')
    const botonNinguno=document.getElementById('boton-ninguno')
    const botonClaro = document.getElementById('boton-claro')
    const botonOscuro = document.getElementById('boton-oscuro')
    const textEspaciado = document.getElementById('text-espaciado')
    const inputEspaciado = document.getElementById('input-espaciado')
    const textInterlineado = document.getElementById('text-interlineado')
    const selectInterlineado =  document.getElementById('select-Interlineado')


    // Hidden
    const hideTextAside = () => {
      imgAside.classList.add("hidden");
      textAside.classList.remove("hidden");
    };

    const hideImgAside = () => {
      textAside.classList.add("hidden");
      imgAside.classList.remove("hidden");
    };


    textButton.addEventListener("click", () => hideTextAside());
    imgButton.addEventListener("click", () => hideImgAside());
    modeButton.addEventListener("click", () => changeMode());

    // modo oscuro
    const changeMode = () => {
        textAside.classList.toggle("dark-aside");
        imgAside.classList.toggle("dark-aside");
        mainContainer.classList.toggle("main-container-dark");
        headerColor.classList.toggle("darkHeader")
        textButton.classList.toggle("darkbutton")
        imgButton.classList.toggle("darkbutton")
        modeButton.classList.toggle("darkbutton")
        generadormemesblack.classList.toggle('darktitle')
        closeButton.classList.toggle('darkbutton')
        closeButton.classList.toggle('darkbutton')
        // dark imagen
        titleaside.classList.toggle('darktitle')
        imagenTitle.classList.toggle('darktitle')
        urlAside.classList.toggle('darktitle')
        filtrosAside.classList.toggle('darktitle')
        tituloFondo.classList.toggle('darktitle')
        brilloFiltro.classList.toggle('darktitle')
        opacidadFiltro.classList.toggle('darktitle')
        contrasteFiltro.classList.toggle('darktitle')
        desenfoqueFiltro.classList.toggle('darktitle')
        escalaFiltro.classList.toggle('darktitle')
        sepiaFiltro.classList.toggle('darktitle')
        hueFiltro.classList.toggle('darktitle')
        saturadoFiltro.classList.toggle('darktitle')
        negativoFiltro.classList.toggle('darktitle')
        urlInput.classList.toggle('inputDark')
        InputColor.classList.toggle('inputDark')
        selectImagen.classList.toggle('inputDark')
        Restart.classList.toggle('inputDark')
        // dark texto
        superior.classList.toggle('darktitle')
        inferior.classList.toggle('darktitle')
        topText.classList.toggle('inputDark')
        checkboxText.classList.toggle('darktitle')
        checkboxBottom.classList.toggle('darktitle')
        bottomText.classList.toggle('inputDark')
        Fuente.classList.toggle('darktitle')
        selectFuente.classList.toggle('inputDark')
        botonIzquierda.classList.toggle('inputDark')
        botonMedio.classList.toggle('inputDark')
        botonDerecha.classList.toggle('inputDark')
        inputNumber.classList.toggle('inputDark')
        ColorText.classList.toggle('darktitle')
        FondoText.classList.toggle('darktitle')
        colorInput.classList.toggle('inputDark')
        fondoInput.classList.toggle('inputDark')
        fondoTransparente.classList.toggle('darktitle')
        textoContorno.classList.toggle('darktitle')
        botonNinguno.classList.toggle('inputDark')
        botonClaro.classList.toggle('inputDark')
        botonOscuro.classList.toggle('inputDark')
        textEspaciado.classList.toggle('darktitle')
        inputEspaciado.classList.toggle('inputDark')
        textInterlineado.classList.toggle('darktitle')
        selectInterlineado.classList.toggle('inputDark')

        if (mainContainer.classList.contains("main-container-dark")) {
          modeButton.innerText = "☀️ Modo claro";
        
        } else {
          modeButton.innerText = "🌙 Modo oscuro";
        }
       };

        // DOWNLOAD MEME
        const downloadButton = document.getElementById("download-btn");
        const meme = document.getElementById("meme-container");
        downloadButton.addEventListener("click", () => downloadMeme());

        const downloadMeme = () => {
          domtoimage.toBlob(meme).then(function (blob) {
          window.saveAs(blob, "mi-meme.png");
        });
        };

      // ASIDE IMAGEN

      // INPUT URL 
      const urlInput = document.getElementById("url-input");
      const memeImg = document.getElementById("meme-img");
     
      const changeBackground = () => {
      memeImg.style.backgroundImage = `url('${urlInput.value}')`;
      };
  
      urlInput.addEventListener("input", () => changeBackground());
  
       // INPUT COLOR FONDOS
      
        const colorName = document.getElementById("color-name");

        const cambiarFondoMeme = () => {
        let colorElegido = InputColor.value;
        memeImg.style.backgroundColor =`${colorElegido}`;
        colorName.innerHTML = `${colorElegido}`;
        };
      
        InputColor.addEventListener("input", () => cambiarFondoMeme());
        memeImg.addEventListener("input", () => cambiarFondoMeme());
        // Select Brillo  
        
        const SelecBrillo = () => {
          let select = selectImagen.value;
          memeImg.style.backgroundBlendMode = select;
        }
      
        selectImagen.addEventListener("change",() => SelecBrillo());

      
      //  Filtros
      const filter = () => {
        memeImg.style.filter = `brightness(${brilloFiltro.value}) opacity(${opacidadFiltro.value})
         contrast(${contrasteFiltro.value}%) blur(${desenfoqueFiltro.value}px) grayscale(${escalaFiltro.value}%) 
         sepia(${ sepiaFiltro.value}%) hue-rotate(${ hueFiltro.value}deg) saturate(${saturadoFiltro.value}%) 
         invert(${negativoFiltro.value})`;
       
    };
    
  
    brilloFiltro.addEventListener("input",() => filter());
    opacidadFiltro.addEventListener("input",() => filter());
    contrasteFiltro.addEventListener("input",() => filter());
    desenfoqueFiltro.addEventListener("input",() => filter());
    escalaFiltro.addEventListener("input",() => filter());
    sepiaFiltro.addEventListener("input",() => filter());
    hueFiltro.addEventListener("input",() => filter());
    saturadoFiltro.addEventListener("input",() => filter());
    negativoFiltro.addEventListener("input",() => filter());

    // Boton Reset
    // const Restart = document.getElementById ('restart')
    const filtro = document.getElementById("filtros")
    const RestablecerFiltros = () => {
      memeImg.style.filter = 'none'
      filtro.style.filter = `brightness(1) 
      opacity(1) 
      contrast(100%) 
      blur(0px)
      grayscale(0%)
      sepia(0%)
      hue-rotate(0)
      saturate(100%)
      invert(0)`;
      brilloFiltro.value = 1;
      opacidadFiltro.value = 1;
      contrasteFiltro.value = 100;
      desenfoqueFiltro.value = 0;
      escalaFiltro.value = 0;
      sepiaFiltro.value = 0;
      hueFiltro.value = 0;
      saturadoFiltro.value = 100;
      negativoFiltro.value = 0;
  
    }

     Restart.addEventListener("click", ()=> RestablecerFiltros());

     // ASIDE TEXTO 

     // Escritura Texto superior Texto inferior y checkbox texto inferior y superior

      const Escritura=() =>{
      parrafoTop.innerText = topText.value;
      parrafoBottom.innerText= bottomText.value;
     }
 
      topText.addEventListener("input",() => Escritura());
      bottomText.addEventListener("input",() => Escritura());
       

      //HIDDE PARRAFOS

      const topTextInput = document.getElementById("input-superior");
      const bottomTextInput = document.getElementById("input-bottom");

      const hideTopText = () => {
        parrafoTop.classList.toggle("hidden");
      };

      const hideBottomText = () => {
        if (bottomTextInput.checked) {
          parrafoBottom.classList.add("hidden");
        } else {
          parrafoBottom.classList.remove("hidden");
        }
        };

        topTextInput.addEventListener("change", () => hideTopText());
        bottomTextInput.addEventListener("change", () => hideBottomText());


      //Select fuentes

      const parrafoTop = document.getElementById('top-text')
      const parrafoBottom = document.getElementById('bottom-text')

      const changeFontFamily = () => {
      parrafoTop.style.fontFamily = `${selectFuente.value}`;
      parrafoBottom.style.fontFamily = `${selectFuente.value}`;
      };

      selectFuente.addEventListener("change", () => changeFontFamily());

      // Agrandar letra   (me falta agrandar el tamaño de las partes blancas)
      
      const TamañanoLetra =()=>{
        let inputTamaño = inputNumber.value;
        parrafoTop.style.fontSize =  `${inputTamaño}px`;
        parrafoBottom.style.fontSize = `${inputTamaño}px`;
      };

     inputNumber.addEventListener('input', () => TamañanoLetra());
     
      //Alineación 

      const AlineaciónIzquierda = () => {
        parrafoTop.style.textAlign="left"
        parrafoBottom.style.textAlign="left"
      }
      
      const AlineaciónMedia = () => {
        parrafoTop.style.textAlign="center"
        parrafoBottom.style.textAlign="center"
      }

      const AlineaciónDerecha = () => {
        parrafoTop.style.textAlign="right"
        parrafoBottom.style.textAlign="right"
      }

      botonIzquierda.addEventListener("click", () => AlineaciónIzquierda());
      botonMedio.addEventListener('click', () => AlineaciónMedia());
      botonDerecha.addEventListener('click', () => AlineaciónDerecha());

      // Color top y bottom text y fondo de los mismos

      const ColorTexto = document.getElementById("color-input-texto")
      const ColorcajaText= document.getElementById("color-fondo-caja-text")

    
      const cambiarColorTexto =() =>{
      let seleccionInput = colorInput.value;
      parrafoTop.style.color = colorInput.value;
      parrafoBottom.style.color= colorInput.value;
      ColorTexto.innerHTML =  `${seleccionInput}`;
      }
    
      const cambiarFondoParrafo =() =>{
      let cambioColor = fondoInput.value;
      parrafoTop.style.background = fondoInput.value;
      parrafoBottom.style.background= fondoInput.value;
      ColorcajaText.innerHTML = `${cambioColor}`;
      }

    colorInput.addEventListener("input", ()=> cambiarColorTexto());
    fondoInput.addEventListener("input",()=> cambiarFondoParrafo());

   
    // Fondo Transparente
   
    const checkboxTrasparente = document.getElementById("fondo-transparente")

    const FondoTransparente = () => {
      parrafoTop.classList.toggle("fondoTransparente");
      parrafoBottom.classList.toggle("fondoTransparente");
      memeImg.classList.toggle("meme");
      parrafoBottom.classList.toggle("titulobottom");
      parrafoTop.classList.toggle("titulotop");

       }

     checkboxTrasparente.addEventListener("change",()=>FondoTransparente());

     // Contorno 

     const SinContorno = () => {
      parrafoTop.style.textShadow ='none'
      parrafoBottom.style.textShadow='none'
     }

     const ContornoClaro = () => {
      parrafoTop.style.textShadow ='2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF';
      parrafoBottom.style.textShadow='2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF';
     }
  
     const ContornoOscuro = () => {
      parrafoTop.style.textShadow ='2px 2px #000, 2px 2px #000, 2px 2px #000, 2px 2px #000';
      parrafoBottom.style.textShadow = '2px 2px #000, 2px 2px #000, 2px 2px #000, 2px 2px #000';
     }

    botonNinguno.addEventListener("click",()=> SinContorno());
    botonClaro.addEventListener("click",()=> ContornoClaro());
    botonOscuro.addEventListener("click",()=> ContornoOscuro());


    // Espaciado

    const Espaciado = () => {
      let espaciado = inputEspaciado.value; 
      parrafoBottom.style.padding = `${espaciado}px 15px`;
      parrafoTop.style.padding = `${espaciado}px 15px `;

      
    }

    inputEspaciado.addEventListener("input",()=>Espaciado());

    // Interlineado

    const Interlineado = () => {
      let interlineado = selectInterlineado.value;
      parrafoTop.style.lineHeight = `${interlineado}`;
      parrafoBottom.style.lineHeight = `${interlineado}`;
    
    }

    selectInterlineado.addEventListener("change",() => Interlineado());
   
   const closeButton = document.getElementById("close-button")
   const closeButtonText = document.getElementById("close-button-text")

     const cerrarPanelImg= () => {
      textAside.classList.add("hidden");
      
      }

      const cerrarPanelText = () => {
      imgAside.classList.add("hidden");
     
      };

     closeButtonText.addEventListener('click',()=> cerrarPanelImg());
    closeButton.addEventListener('click',()=> cerrarPanelText());

   
