// // // Use D3 fetch to read the JSON file
// // // The data from the JSON file is arbitrarily named importedData as the argument
// d3.json("http://127.0.0.1:5000/api/v1.0/date").then((importedData) => {
//   var barData = importedData;

// // Hydroelectric = Hydraulic turbine + Tidal power turbine 
// // Solar = Solar
// // Wind = Wind power turbine
// // Fossil fuels = Conventional Steam turbine + Internal combustion turbine + combustion turbine +
// // Fuel cells/battery
// // Nuclear = Nuclear steam turbine

//   var nuDateList = [];
//   var nuValueList = [];
//   var hyDateList = [];
//   var hyValueList = [];
//   var stDateList = [];
//   var stValueList = [];
//   var inDateList = [];
//   var inValueList = [];
//   var wiDateList = [];
//   var wiValueList = [];
//   var soDateList = [];
//   var soValueList = [];
//   var combDateList = [];
//   var combValueList = [];
//   var tiDateList = [];
//   var tiValueList = [];
//   var otherDateList = [];
//   var otherValueList = [];

//   var filteredDataNuclear = barData.forEach( row => {
//         if (row[2] === 'Nuclear steam turbine'){
//           if(row[0] === 'Canada'){
//             nuDateList.push(row[1])
//             nuValueList.push(row[3]);
//           }}
//         else if (row[2] === 'Hydraulic turbine'){
//           if(row[0] === 'Canada'){
//             hyDateList.push(row[1])
//             hyValueList.push(row[3]);
//           }}
//         else if (row[2] === 'Conventional steam turbine'){
//           if(row[0] === 'Canada'){
//             stDateList.push(row[1])
//             stValueList.push(row[3]);
//             }}
//         else if (row[2] === 'Internal combustion turbine'){
//           if(row[0] === 'Canada'){
//             inDateList.push(row[1])
//             inValueList.push(row[3]);
//             }}
//         else if (row[2] === 'Wind power turbine'){
//           if(row[0] === 'Canada'){
//             wiDateList.push(row[1])
//             wiValueList.push(row[3]);
//            }}
//         else if (row[2] === 'Solar'){
//           if(row[0] === 'Canada'){
//             soDateList.push(row[1])
//             soValueList.push(row[3]);
//           }}
//         else if (row[2] === 'Combustion turbine'){
//           if(row[0] === 'Canada'){
//             combDateList.push(row[1])
//             combValueList.push(row[3]);
//           }}
//         else if (row[2] === 'Tidal power turbine'){
//           if(row[0] === 'Canada'){
//             tiDateList.push(row[1])
//             tiValueList.push(row[3]);
//           }}
//         });
//       var filteredDataSteam = data.forEach( row => {
//         if(row[0] === 'Canada'){
//           if (row[2] === 'Total electricity production from combustible fuels'){
//               otherDateList.push(row[1])
//               otherValueList.push(row[3]);
//             }
//             else if (row[2] === 'Combustion turbine' && row[1] <= 2015)  {
//               otherDateList.push(row[1])
//               otherValueList.push(0);
//             }    
//           }
//   });
// // console.log(otherDateList)
// // console.log(otherValueList)

// //  Adding values for combustion turbine + conventional steam turbine + Internal combuston turbine
// var fossilFuelValue = stValueList.map(function (num, idx){
//   return num + combValueList[idx] + inValueList[idx] + otherValueList[idx];
// });

// var hydroValue = hyValueList.map(function (num, idx){
//   return num + tiValueList[idx]
// })

// console.log(fossilFuelValue)
// console.log(combValueList, stValueList, inValueList, otherValueList)

// // console.log(fossilFuelValue)

// Using plotly to plot the stacked bar chart

// var trace3 = {
//     x: nuDateList,
//     y: nuValueList,
//     name: 'Nuclear',
//     marker: {color: 'rgb(179, 134, 0'},
//     type: 'bar'
//   }

//   var trace1 = {
//     x: hyDateList,
//     y: hydroValue,
//     name: 'Hydroelectric',
//     marker: {color: 'rgb(0, 77, 102)'},
//     type: 'bar'
//   }
//   var trace2 = {
//     x: stDateList,
//     y: fossilFuelValue,
//     name: 'Fossil Fuel',
//     marker: {color: 'rgb(128, 0, 0)'},
//     type: 'bar'
//   }

//   var trace4 = {
//     x: inDateList,
//     y: inValueList,
//     name: 'Internal combustion Steam',
//     type: 'bar'
//   }

//   var trace6 = {
//     x: wiDateList,
//     y: wiValueList,
//     name: 'Wind',
//     marker: {color: 'rgb(45, 134, 45)'},
//     type: 'bar'
//   }

//   var trace5 = {
//     x: soDateList,
//     y: soValueList,
//     name: 'Solar',
//     marker: {color: 'rgb(0, 45, 179)'},
//     type: 'bar'
//   }

//   var trace7 = {
//     x: combDateList,
//     y: combValueList,
//     name: 'Combustion',
//     type: 'bar'
//   }
//   var data = [trace1, trace2, trace3,  trace5, trace6];

//   var layout = {barmode: 'stack',
//   plot_bgcolor:"#ffffff00",
//   paper_bgcolor:"#ffffff00",
//   xaxis: {
//     tickfont : {
//       color : 'black'
//     }  },
//     legend: {
//       font:{
//         color: 'black'
//       }
//     }
//   }
  
//   Plotly.newPlot('plot1', data, layout);

  // Donut chart

//   var donutData = importedData;

//   var sourceList = [];
//   var valueList = [];

//   var filteredData = donutData.forEach( row => {
//     if (row[0] === 'Canada' && row[1] === 2019 && row[2] === 'Nuclear steam turbine' && row[4] !== 0) {
//         sourceList.push('Nuclear')
//         valueList.push(row[3])
//     } 
//     if (row[0] === 'Canada' && row[1] === 2019 && row[2] === 'Wind power turbine' && row[4] !== 0) {
//       sourceList.push("Wind")
//       valueList.push(row[3])
//     } 
//     if (row[0] === 'Canada' && row[1] === 2019 && row[2] === 'Solar' && row[4] !== 0) {
//       sourceList.push('Solar')
//       valueList.push(row[3])
//     } 
//     if (row[0] === 'Canada' && row[1] === 2019 && row[2] === 'Total electricity production from combustible fuels' && row[4] !== '0') {
//       sourceList.push('Fossil Fuel')
//       valueList.push(row[3])
//     } 
//     if (row[0] === 'Canada' && row[1] === 2019 && row[2] === 'Hydraulic turbine' && row[4] !== '0') {
//       sourceList.push('Hydroelectric')
//       valueList.push(row[3])
//     } 
//   });

 
//    console.log(sourceList)
//    console.log(valueList)
   
//   var trace = {
//   values: valueList,
//   labels: sourceList,
//   domain: {column: 0},
//   name: ' ',
//   hoverinfo: 'label+value+name',
//   hole: .6,
//   type: 'pie',
//   marker: {
//     colors: ['rgb(0, 77, 102)', 'rgb(179, 134, 0)', 'rgb(0, 45, 179)', 'rgb(128, 0, 0)', 'rgb(45, 134, 45)']
//   }
//   }
//   var data = [trace];

//   Plotly.newPlot('plot3', data);


// });

d3.json("http://127.0.0.1:5000/api/v1.0/date").then((importedData) => {
  var data = importedData;
  console.log(data)
  var hbarData = importedData;

// Horizontal bar chart - Provincial distribution

 var provinceList = [];
 var hydroList = [];
 var nuclearList = [];
 var solarList = [];
 var combustionList = [];
 var windList = [];
 var internalCombustionList = [];
 var steamList = [];
 var otherList = [];

//  Note: Nuclear steam turbine row doesnt exist in other provinces so was not able to extract 
// the data in the order we wanted. 

 nuclearList = [0,0,0,10031356,0,0,0,0,180907156,0,0,0,0]

var filteredData = hbarData.forEach( row => {
  if (row[0] != 'Canada'){
    if(row[1] === 2019){
      if (row[2] === 'Hydraulic turbine'){
        provinceList.push(row[0])
        hydroList.push(row[3]);
      }
      // else if (row[2] != 'Combustion turbine' && row[2] != 'Hydraulic turbine' && 
      // row[2] != 'Solar' && row[2] != 'Wind power turbine' && row[2] != 'Conventional steam turbine'&& row[2] != 'Total electricity production from combustible fuels' &&
      // row[2] != 'Tidal power turbine'&& row[2] != 'Other types of electricity generation' && row[2] != 'Total all types of electricity generation'&& row[2] != 'Internal combustion turbine' ){
      //   console.log(row)
      //   if (row[2] === 'Nuclear power turbine')  {
      //   nuclearList.push(row[3])
      //     a.push(row[0])}
      //   else {
      //     nuclearList.push(0);
      //   }
      // }

      else if (row[2] === 'Combustion turbine'){
        combustionList.push(row[3]);
      }  
      else if (row[2] === 'Solar'){
        solarList.push(row[3]);
      }
      else if (row[2] === 'Wind power turbine'){
        windList.push(row[3]);
      }
      else if (row[2] === 'Internal combustion turbine'){
        internalCombustionList.push(row[3]);
      }
      else if (row[2] === 'Conventional steam turbine'){
        steamList.push(row[3]);
      }
      else if (row[2] === 'Total electricity production from combustible fuels'){
        otherList.push(row[3]);
      }
    }
  }
}); 

//  Adding values for combustion turbine + conventional steam turbine + Internal combuston turbine
var fossilFuelValue = internalCombustionList.map(function (num, idx){
  return num + steamList[idx] + combustionList[idx] + otherList[idx];
});

// console.log(xList)
var trace1 = {
  x: hydroList,
  y: provinceList,
  name: 'Hydro',
  marker: {color: 'rgb(0, 77, 102)'},
  orientation: 'h',
  type: 'bar',
}
var trace2 = {
  x: fossilFuelValue,
  y: provinceList,
  name: 'Fossil Fuel',
  marker: {color: 'rgb(128, 0, 0)'},
  orientation: 'h',
  type: 'bar',
}
var trace3 = {
  x: nuclearList,
  y: provinceList,
  name: 'Nuclear',
  marker: {color: 'rgb(179, 134, 0)'},
  orientation: 'h',
  type: 'bar',
}
var trace4 = {
  x: solarList,
  y: provinceList,
  name: 'Solar',
  marker: {color: 'rgb(0, 45, 179)'},
  orientation: 'h',
  type: 'bar',
}
var trace5 = {
  x: windList,
  y: provinceList,
  name: 'Wind',
  marker: {color: 'rgb(45, 134, 45)'},
  orientation: 'h',
  type: 'bar',
}

  var data = [trace1, trace2, trace3, trace4, trace5];

  var layout = {barmode: 'stack',
  yaxis: {
    automargin: true
  }
  };

  Plotly.newPlot('plot2', data, layout);

  albertaList = [];
  ontarioList = [];
  manitobaList = [];
  newBurnswickList = [];
  newfoundlandList = [];
  novascotiaList = [];
  quebecList = [];
  saskatchewanList = [];
  yukonList = [];
  peiList = [];
  bcList = [];
  nunavutList = [];
  northtList = [];

  sumValueList = [];

  var filterData = hbarData.forEach( row => {
    if (row[0] != 'Canada'){
      if (row[1] === 2019) {
        if (row[0] === 'Alberta' ){
        albertaList.push(row[3]);
      }
        else if (row[0] === 'British Columbia'){
        bcList.push(row[3]);
      }
      else if (row[0] === 'Manitoba'){
        manitobaList.push(row[3]);
      }
      else if (row[0] === 'New Brunswick'){
        newBurnswickList.push(row[3]);
      }
      else if (row[0] === 'Newfoundland and Labrador'){
        newfoundlandList.push(row[3]);
      }
      else if (row[0] === 'Northwest Territories'){
        northtList.push(row[3]);
      }
      else if (row[0] === 'Nova Scotia'){
        novascotiaList.push(row[3]);
      }
      else if (row[0] === 'Nunavut'){
        nunavutList.push(row[3]);
      }
      else if (row[0] === 'Ontario'){
        ontarioList.push(row[3]);
      }
      else if (row[0] === 'Prince Edward Island'){
        peiList.push(row[3]);
      }
      else if (row[0] === 'Quebec'){
        quebecList.push(row[3]);
      }
      else if (row[0] === 'Saskatchewan'){
        saskatchewanList.push(row[3]);
      }
      else if (row[0] === 'Yukon'){
        yukonList.push(row[3]);
      }
  }
}
  })
      console.log(quebecList)

    var alberatSum = albertaList.reduce(function(a, b){
        return a + b;
    }, 0);
    var bcSum = bcList.reduce(function(a, b){
      return a + b;
    }, 0);
    var mSum = manitobaList.reduce(function(a, b){
      return a + b;
    }, 0);
    var newBSum = newBurnswickList.reduce(function(a, b){
      return a + b;
    }, 0);
    var newfoundlandSum = newfoundlandList.reduce(function(a, b){
      return a + b;
    }, 0);
    var northtSum = northtList.reduce(function(a, b){
      return a + b;
    }, 0);
    var novaSum = novascotiaList.reduce(function(a, b){
      return a + b;
    }, 0);
    var nunavutSum = nunavutList.reduce(function(a, b){
      return a + b;
    }, 0);
    var onSum = ontarioList.reduce(function(a, b){
      return a + b;
    }, 0);
    var peiSum = peiList.reduce(function(a, b){
      return a + b;
    }, 0);
    var qSum = quebecList.reduce(function(a, b){
      return a + b;
    }, 0);
    var sasSum = saskatchewanList.reduce(function(a, b){
      return a + b;
    }, 0);
    var ySum = yukonList.reduce(function(a, b){
      return a + b;
    }, 0);

    sumValueList.push(alberatSum)
    sumValueList.push(bcSum)
    sumValueList.push(mSum)
    sumValueList.push(newBSum)
    sumValueList.push(newfoundlandSum)
    sumValueList.push(northtSum)
    sumValueList.push(novaSum)
    sumValueList.push(nunavutSum)
    sumValueList.push(onSum)
    sumValueList.push(peiSum)
    sumValueList.push(qSum)
    sumValueList.push(sasSum)
    sumValueList.push(ySum)


    console.log(sumValueList)
    console.log(qSum)

  // Plotting the pie chart
    var trace = {
        values: sumValueList,
        labels: provinceList,
        type: 'pie',
        marker: {
              colors: ['rgb(128, 0, 0)', 
              'rgb(179, 134, 0)', 
              'rgb(45, 134, 45)',
              'rgb(128, 0, 0)',
              'rgb(0, 163, 204)',
              'rgb(153, 51, 102)',
              'rgb(0, 45, 179)', 
              'rgb(204, 82, 0)',
              'rgb(204, 153, 0)',
              'rgb(128, 0, 128)',
              'rgb(0, 77, 102)',
              'rgb(153, 204, 0)',
              'rgb(170, 128, 255)'
            ]
          }
    }
        var data = [trace];

  Plotly.newPlot('plot4', data);
 



});
