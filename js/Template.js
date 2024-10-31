class ScrappingTemplate{
    makeScrapping(){
        SelectWeb()
        SendHTTP()
        AnalyzeContent()
        StructuredData()
        Validation()
    }

    SelectWeb(web){
        console.log("La web " + web + " ha sido seleccionada")
    }

    SendHTTP(){
        console.log("Se ha enviado la solicitud HTTP para obtener su contenido")

    }
    AnalyzeContent(){
        throw new console.error("No se ha implementado esta funcion")
    }
    StructuredData(){
        console.log("Se ha estructurado la informacion")
    }
    Validation(){
        console.log("se valida la extracción de la información necesaria")
    }
}

class ScrappingWikipedia extends ScrappingTemplate{
    AnalyzeContent(){
        console.log("Se ha analizado los datos para wikipedia")
    }
}

class ScrappinGAmazon extends ScrappingTemplate{
    AnalyzeContent(){
        console.log("Se ha analizado los datos para Amazon")
    }
}

function appTemplate(){
    console.log("Scrapping para wikipedia")
    scrapping1 = new ScrappingWikipedia;
    scrapping1.makeScrapping();

    console.log("Scrapping para Amazon")
    scrapping2 = new ScrappinGAmazon;
    scrapping2.makeScrapping();
    
}