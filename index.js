var canvasElement = document.getElementById("cookieChart");

var config = {
    type : "bar",
    data : {
        labels : ["bill", "jeff", "Tim", "Peter" ,"Tom"],
        datasets : [{
            label: "list of numbers", 
            data: [5, -12 ,19, 50,60]}],
    }  
}

// for( const item in config ){
//     console.log(item)
// }

// console.log(config);

Object.entries(config).map( mapelement => {

//    console.log(mapelement)

  mapelement.forEach(element => {
        var data = element.datasets
        console.log(data);


   });
})




var cookieChart = new Chart(canvasElement, config);