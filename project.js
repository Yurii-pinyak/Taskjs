function countWords() {
    var text = document.getElementById("MainTextArea").value;
    var laststr = "a";
    var help=0;
    var Wordcount = 0;
    var Minitem = 100;
    var Maxitem = 0;
    var tempvalue = 0;

    for (var i = 0; i <= text.length; i++) {
        var currentCharacter = text[i];
        if(laststr == " " && currentCharacter==" "){

        }
        else{
          tempvalue+=1;
        }
        if (currentCharacter == " " || i == text.length) {
          if(laststr != " "){
            Wordcount += 1;
            if(Minitem > tempvalue -1){
              Minitem = tempvalue-1;
            }
            if(Maxitem < tempvalue-1){
              Maxitem = tempvalue-1;
            }
            tempvalue = 0;
          }
        }
        laststr = text[i];
    }
    document.getElementById("wordcount").innerHTML = Wordcount;
    var avgcount =0;
    for(var i = 0;i < text.length;i++){
      var currentCharacter = text[i];
      if(text[i] != " "){
        avgcount +=1;
      }
    }
    document.getElementById("Avgcount").innerHTML = avgcount  / Wordcount;
    document.getElementById("maxitem").innerHTML = Maxitem;
    document.getElementById("minitem").innerHTML = Minitem;
}
