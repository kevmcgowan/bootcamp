function keydownAction(event) {
  var key = event.key;
  var keyCode = event.keyCode;
  var keySpan = document.querySelector('#key');
  var codeSpan = document.querySelector('#code');

  keySpan.innerText = key;
  codeSpan.innerText = keyCode;

  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  // console.log(event.keyCode);
  // TODO: Complete keydown function
  // document.querySelector('#key'),innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);

// TODO: Add Event Listener for "keydown" event
document.addEventListener('keydown', keydownAction);
