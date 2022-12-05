// setInterval(func, delayTime in milliseconds);

var users1 = [
    {
      name: 'JD',
      age: 42
    },
    {
      name: 'Jane',
      age: 35
    },
    {
      name: 'Sarah',
      age: 38
    }
  ];
  
  var users2 = [
    {
      eyeColor: 'blue',
      height: 6.2,
      hairColor: 'blonde'
    },
    {
      eyeColor: 'green',
      height: 5.8,
      hairColor: 'Red'
    }
  ];
  
            //    (parameters, they come out in the order entered)
function printer(arr) {
    var main = document.querySelector('#output');

    // create a div for each object in the arry.
    // create a paragraph for each key/value par in the object and then add each paragraph 
    // to the div.
    // output the completed div to the #output.
    
    for (var obj of arr) {
        var div = document.createElement('div');
        var h3 = document.createElement('h3');

        h3.innerText = 'User Information';
        div.appendChild(h3);

        // for IN used to loop over object
      for (var prop in obj) {
        var p = document.createElement('p');

        p.innerText = `${prop}: ${obj[prop]}`;

        div.appendChild(p);
        }
    main.appendChild(div);
      }
    }

        //argument
printer(users2);