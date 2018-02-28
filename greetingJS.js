var name = [];
var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function() {
  name = document.getElementById('name').value;
  document.getElementById('name').value = '';
  console.log('name = ' + name);
var difGreetings = [];
difGreetings = ["Hi, how are you, ", "Hey, what are you doing here, ", "...You can't just show up unannounced, what's wrong, "];
var greeting = Math.floor(Math.random() * 3);
console.log(greeting);
var outputGreet = difGreetings[greeting];
console.log(outputGreet);
document.getElementById('yourGreeting').innerHTML = outputGreet + name + "?";
})
