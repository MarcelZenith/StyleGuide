    var titletext = [
  {
      "Client": "Optimum1",
      "name":"Black",
      "colorSampleBox": "Black",
      "Font": "sans-serif",
      "Background": "white",
      "Logo": "img/DSlogo.SVG"
     
    },
    
     {
      "Client": "Optimum2",
      "name":"silver",
      "colorSampleBox": "silver",
      "Font": "interstatebold",
      "Background": "green",
      "Logo": "img/DSlogo.SVG"
    }, 
  
    {
      "Client": "Optimum3",
      "name":"red",
      "colorSampleBox": "red",
      "Font": "interstateregular",
      "Background": "grey",
      "Logo": "img/DSlogo.SVG"
    }, 
  
    {
      "Client": "Optimum4",
      "name":"green",
      "colorSampleBox": "green",
      "Font": "Open Sans",
      "Background": "orange",
      "Logo": "img/DSlogo.SVG"
    },
    {
      "Client": "Optimum5",
      "name":"yellow",
      "colorSampleBox": "yellow",
      "Font": "interstateregular",
      "Background": "grey",
      "Logo": "img/DSlogo.SVG"
    }]
  ;
  
   var output ='';
   for (var i=0;i<titletext.length;i++){
  output+='<div class ="wrapper"><div class="colorSample" style="background-color:'+titletext[i].colorSampleBox+'"></div><span class="SampleBox">' + titletext[i].name +"  "+'</span></div>';
   }
  document.getElementById("titletext").innerHTML=output;


// Fonts box Jquery

  var fontbox = [
  {
      "Client": "Optimum1",
     
      "Font": "sans-serif",
     
     
    },
    
     {
      "Client": "Optimum2",
      
      "Font": "interstatebold"
     
    }, 
  
    {
      "Client": "Optimum3",
     
      "Font": "interstateregular"
      
    }, 
  
    {
      "Client": "Optimum4",
      
      "Font": "Open Sans"
      
    },
    {
        "Client": "Optimum5",
      "Font": "interstateregular"
      
    }]
  ;
  
   var output ='';
   for (var i=0;i<fontbox.length;i++){
  output+='<div class ="wrapper"><div class="fontext"><li>' +fontbox[i].Font +"  "+'</li></div></div>';
   }
  document.getElementById("fontbox").innerHTML=output;

//Text Object box Jquery***************************************************

 var NavText = [
  {
      "Client": "Optimum1",
     
      "Text": "This is a paragraph. It's a very simple structure that you will use time and again in your web pages"
     
     
    }]
  ;
  
   var output ='';
   for (var i=0;i<NavText.length;i++){
  output+='<li>'+ NavText[i].Text +"  "+'</li>';
   }
  document.getElementById("NavText").innerHTML=output;

// Background box Jquery ***********************************************************
  
  var backgroundbox = [
  {
      "Client": "Optimum1",
      "name":"Black",
      "colorSampleBox": "Black",
      "Font": "sans-serif",
      "Background": "white",
      "Logo": "img/DSlogo.SVG"
     
    },
    
     {
      "Client": "Optimum2",
      "name":"silver",
      "colorSampleBox": "silver",
      "Font": "interstatebold",
      "Background": "green",
      "Logo": "img/DSlogo.SVG"
    }, 
  
    {
      "Client": "Optimum3",
      "name":"yellow",
      "colorSampleBox": "yellow",
      "Font": "interstateregular",
      "Background": "grey",
      "Logo": "img/DSlogo.SVG"
    },
    {
      "Client": "Optimum4",
      "name":"red",
      "colorSampleBox": "red",
      "Font": "sans-serif",
      "Background": "white",
      "Logo": "img/DSlogo.SVG"
     
    },
    {
      "Client": "Optimum4",
      "name":"green",
      "colorSampleBox": "green",
      "Font": "sans-serif",
      "Background": "white",
      "Logo": "img/DSlogo.SVG"
     
    },
    {
      "Client": "Optimum4",
      "name":"gray",
      "colorSampleBox": "gray",
      "Font": "sans-serif",
      "Background": "white",
      "Logo": "img/DSlogo.SVG"
     
    }]
  ;
  
   var output ='';
   for (var i=0;i<backgroundbox.length;i++){
  output+='<div class="wrapper"><div class="bgcolor" style="background-color:'+backgroundbox[i].colorSampleBox+'"></div><span class="SampleBox">'+"    " + backgroundbox[i].name +"  "+'</span></div>';
   }
  document.getElementById("backgroundbox").innerHTML=output;

// Images box Jquery ***********************************************************

    var logbox = [
  {
      "Client": "Optimum1",
      "name":"Image 1",
      "Logo": "img/DSlogo.SVG"
     
    },
    
     {
      "Client": "Optimum2",
      "name":"Image 2",
      "Logo": "img/DSlogo.SVG"
    }, 
    {
      "Client": "Optimum3",
      "name":"Image 3",
      "Logo": "img/DSlogo.SVG"
    }, 
  
    {
      "Client": "Optimum5",
      "name":"Image 4",
      "Logo": "img/DSlogo.SVG"
    }]
  ;
  
   var output ='';
   for (var i=0;i<logbox.length;i++){
  output+='<div class ="wrapper"><div class="LogoSample"><img src="'+logbox[i].Logo +'" alt="my image" height= "30" width= "235"><span>' + logbox[i].name +"  "+'</span></div></div>';
   }
  document.getElementById("logbox").innerHTML=output;