
const update = function(type){
    if ( type == "credit_cards" ) type = "Credit Cards";
    else type = type.charAt(0).toUpperCase() + type.slice(1);
    document.getElementById("categor").innerHTML = type;

    document.getElementById("heading").hidden = true;
    document.getElementById("language").hidden = true;
    document.getElementById("quantity").hidden = true;
    document.getElementById("seed").hidden = true;
    document.getElementById("button").hidden = true;

    document.getElementById("images").hidden = true;
    document.getElementById("type").disabled = true;
    document.getElementById("height").disabled = true;
    document.getElementById("width").disabled = true;

    document.getElementById("gender").hidden = true;
    document.getElementById("gender_select").disabled = true;

    document.getElementById("persons").hidden = true;
    document.getElementById("birth_start_date").disabled = true;
    document.getElementById("birth_end_date").disabled = true;
    
    document.getElementById("products").hidden = true;
    document.getElementById("min_price").disabled = true;
    document.getElementById("max_price").disabled = true;
    document.getElementById("taxes").disabled = true;
    document.getElementById("categories_type").disabled = true;

    document.getElementById("texts").hidden = true;
    document.getElementById("characters").disabled = true;

    if ( type != "Select Resource" ){
        document.getElementById("heading").hidden = false;
        document.getElementById("language").hidden = false;
        document.getElementById("quantity").hidden = false;
        document.getElementById("seed").hidden = false;
        document.getElementById("button").hidden = false;
    }
    
    if ( type === "Images" ){
        document.getElementById("images").hidden = false;
        document.getElementById("type").disabled = false;
        document.getElementById("height").disabled = false;
        document.getElementById("width").disabled = false;
    } else if ( type === "Products" ){
        document.getElementById("products").hidden = false;
        document.getElementById("min_price").disabled = false;
        document.getElementById("max_price").disabled = false;
        document.getElementById("taxes").disabled = false;
        document.getElementById("categories_type").disabled = false;
    } else if ( type === "Texts" ){
        document.getElementById("texts").hidden = false;
        document.getElementById("characters").disabled = false;
    } else if ( type === "Users" ){
        document.getElementById("gender").hidden = false;
        document.getElementById("gender_select").disabled = false;
    } else if ( type === "Persons" ){
        document.getElementById("gender").hidden = false;
        document.getElementById("persons").hidden = false;
        document.getElementById("gender_select").disabled = false;
        document.getElementById("birth_start_date").disabled = false;
        document.getElementById("birth_end_date").disabled = false;
    }
}

update(document.querySelector("select").value);

document.querySelector("select").addEventListener('change',function(){
    update(this.value);    
});

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("birth_end_date").value = today;
yyyy -= 90;
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("birth_start_date").value = today;

window.addEventListener( "pageshow", function ( event ) {
    if ( event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 ) )
        window.location.reload();
});