function pokeSubmit(){
    var param = document.getElementById("pokeInput").value;
    var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;

    // new URL for 3rd GET request
    var pokeURL2 = "http://pokeapi.co/api/v2/pokemon/" + param;

    $.getJSON(pokeURL, function(data){
        //console.log(data);
        var pokeID = data.national_id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].name;
        }
        else var pokeType2 = null;
        var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
        var pokeDescription = "";

        $.getJSON(descriptionURI, function(data2){
            //console.log(data2);
            pokeDescription = data2.description;
        });

        // 3rd GET request to get an image
        $.getJSON(pokeURL2, function(data3){
            console.log(data3);
            console.log(JSON.stringify(data, null, "  "));

            var imageURI = data3.sprites.front_default;
        });

    });	
}






