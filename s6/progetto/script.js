$(document).ready( main );

function main()
{   
    preparaSchema();
}

function preparaSchema()
{         
    let immagini = [];
    crea_e_mischia_immagini();

    for (let i=0; i<16; i++)
    {
        let src_immagine = " src='img/" + immagini[i] + "'";
        let img = "<img " + src_immagine +  "/>";
        
        let id_div = "id= 'div" + i + "'";
        let stato_div = " stato = 'coperta'";

        $("#struttura").append("<div " + id_div + 
                               stato_div + " class='carta'>" + img + "</div>");
    }

    //nascondere tutte le carte girandole
    $("div>img").slideToggle();

    //questa variabile sarà disponibile in voltaCarta
    let conta_carte = 16;            
    let id_prima_carta = "nessuna";

    //associare al click di tutti i div la stessa voltaCarta
    $("#struttura>div").on("click", voltaCarta);

    //NB: funzione dentro la precedente! Serve per accedere da qui
    //a id_prima_carta e conta_carte
    function voltaCarta()
    {
      let selettore_questa_carta = "#"+this.id;          
      let selettore_prima_carta = "#"+id_prima_carta;

      //se è stato fatto click su una carta già indovinata, non fare nulla
      if ($(selettore_questa_carta).attr("stato") === "indovinata"
          || selettore_prima_carta===selettore_questa_carta
      )
      {return;}
      
      //questa carta in ogni caso va prima girata
      $(selettore_questa_carta+">img").slideToggle(1000).delay(2000); 
      
      if (id_prima_carta==="nessuna") 
      {            
        //questa diventa la prima carta girata  
        id_prima_carta = this.id;
      }
      else //c`è una prima carta già girata
      {           
        //se gli src delle immagini sono uguali, segnale come indovinate
        //e non girarle
        if ( $(selettore_questa_carta+">img").attr("src") ===
              $(selettore_prima_carta+">img").attr("src") )
        {
          //alert("vero");
          $(selettore_questa_carta).attr("stato", "indovinata");
          $(selettore_prima_carta).attr("stato", "indovinata");

          //resetto indicatore prima carta
          id_prima_carta = "nessuna";

          conta_carte -= 2;
          if (conta_carte === 0)
          {
            $("#vittoria").css('visibility', 'visible');
          }


        }
        else //rigiro le carte e resetto indicatore prima carta             
        {
          
          $(selettore_prima_carta+">img").slideToggle(1000).delay(1000);
          $(selettore_questa_carta+">img").slideToggle(1000);

          $(selettore_questa_carta).attr("stato", "coperta"); 
          $(selettore_prima_carta).attr("stato", "coperta"); 

          id_prima_carta = "nessuna";
        }
      }
    }

     function crea_e_mischia_immagini()
    {
      for (let i=1; i<=8; i++)
      { 
        immagini.push("img"+i+".jpg");
        immagini.push("img"+i+".jpg");
      }

      //mischiarle
      for (let i=0; i<100; i++)
      {
        let pos_carta1 = Math.trunc( Math.random() * 16);
        let pos_carta2 = Math.trunc( Math.random() * 16);

        //scambiarle di posto
        if (pos_carta1 !== pos_carta2)
            {
          let temp = immagini[pos_carta1];
          immagini[pos_carta1] = immagini[pos_carta2];
          immagini[pos_carta2] = temp;  
        }
      }
    }            
}

