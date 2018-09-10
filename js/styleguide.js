    var titletext = [
    {
      "Client": "Artis",
      "name":"H1, H2, H3 text color",
      "colorSampleBox": "rgba(33, 33, 41, 1)",
	  "colorCode":"rgba(33, 33, 41, 1)"
    },
    {
      "Client": "Artis",
      "name":"Default text color for body and paragraph tag",
	  "colorSampleBox": "rgba(151, 151, 151, 1)",
	  "colorCode":"rgba(151, 151, 151, 1)"
    }, 
    {
      "Client": "Artis",
      "name":"Text color hightlighted text",
      "colorSampleBox": "rgba(157, 131, 62, 1)",
	  "colorCode":"rgba(157, 131, 62, 1)"
    },
	{
      "Client": "Artis",
      "name":"Text color hightlighted text",
      "colorSampleBox": "rgba(217, 61, 122, 1)",
	  "colorCode":"rgba(217, 61, 122, 1)"
    },
	{
      "Client": "Artis",
      "name":"Text color on header-background",
      "colorSampleBox": "rgba(255, 255, 255, 1)",
	  "colorCode":"rgba(255, 255, 255, 1)"
    },	
	]
  ;
  
   var output ='';
   for (var i=0;i<titletext.length;i++){
  output+='<div class ="wrapper"><div class="colorSample" style="background-color:'+titletext[i].colorSampleBox+'"></div><span class="SampleBox">' + titletext[i].name +"  "+ '</span>' +'<div class="useDescription">'+ "Color code: " +titletext[i].colorCode+'</div>'+'</div>';
   }
  document.getElementById("titletext").innerHTML=output;


// Fonts box Jquery
  var fontbox = [
  {
      "Client": "Artis",
      "Font": "Gotham Narrow, Open Sans, Sans Serif",
	  "useage":"Font-stack for body tag"
    },
    {
      "Client": "Artis",
      "Font": "ITC New Baskerville",
	  "useage":"H1, H2 tags"
    }]
  ;
  
   var output ='';
   for (var i=0;i<fontbox.length;i++){
  output+='<div class ="wrapper"><div class="fontext"><li>' +fontbox[i].Font + '<div class="useDescriptionFont">' + "Usage: " +fontbox[i].useage +"  "+ '</div>'+'</li></div></div>';
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
      "Client": "Artis",
      "name":"Site background",
      "colorSampleBox": "rgba(246, 244, 238, 1)",
	  "colorCode":"rgba(246, 244, 238, 1)"
    },
    
     {
      "Client": "Artis",
      "name":"Header background",
      "colorSampleBox": "rgba(33, 33, 41, 1)",
	  "colorCode":"rgba(33, 33, 41, 1)"
    }, 
    {
      "Client": "Artis",
      "name":"Default lock background / content blocks",
      "colorSampleBox": "rgba(255, 255, 255, 1)",
	  "colorCode":"rgba(255, 255, 255, 1)"
    }]
  ;
  
   var output ='';
   for (var i=0;i<backgroundbox.length;i++){
  output+='<div class="wrapper"><div class="bgcolor" style="background-color:'+backgroundbox[i].colorSampleBox+'"></div><span class="SampleBox">'+"    " + backgroundbox[i].name +"  "+ '<div class="useDescription">'+ "Color code: " +backgroundbox[i].colorCode+ '</div>' + '</span></div>';
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




    var buttonText = [
    {
      "Client": "Artis",
      "name":"Primary actions such as Save and Add",
      "colorSampleBox": "rgba(157, 131, 62, 1)",
	  "colorCode":"Color code: rgba(157, 131, 62, 1)"
    },
	]
  ;
  
   var output ='';
   for (var i=0;i<buttonText.length;i++){
  output+='<div class ="wrapper"><div class="colorSample" style="background-color:'+buttonText[i].colorSampleBox+'"></div><span class="SampleBox">' + buttonText[i].name +"  "+ '</span>' +'<div class="useDescription">'+ "Color code: " +buttonText[i].colorCode+'</div>'+'</div>';
   }
  document.getElementById("buttonText").innerHTML=output;