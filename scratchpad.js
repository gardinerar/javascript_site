var docTitle = "Computing Sequences";
document.title = docTitle;

function addDiv (className) {
  var div = document.createElement("div");
  div.className = className;
  // var text = document.createTextNode("This is div" + n);
  // div.appendChild(text);
  document.body.appendChild(div);
}

function addHeader (text) {
  var header = document.createElement("h1");
  var content = document.createTextNode(text);
  header.appendChild(content);
  document.body.appendChild(header);
  return text;
}

function addHyperlink (url, sequenceName) {
  var p = document.createElement("p");
  var a = document.createElement("a");
  var text1 = "(See ";
  var text2 = " for more information about " + sequenceName + " sequences)";
  a.text = "here";
  a.href = url;
  p.innerHTML = text1;
  p.appendChild(a);
  p.innerHTML += text2;
  document.body.appendChild(p);
}

addHeader("Fibonacci Sequence");
addHyperlink("https://oeis.org/A000045","Fibonacci");
addDiv("stuff-box red shadowed");
addHeader("Pell Sequence");
addHyperlink("https://oeis.org/A000129","Pell");
addDiv("stuff-box blue shadowed");
addHeader("Tribonacci Sequence");
addHyperlink("https://oeis.org/A000073","Tribonacci");
addDiv("stuff-box green shadowed");

function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = fibHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
var fib = function (n, node) {
	var tree = fibHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}
var style = document.createElement('style');
style.textContent = 
	"#fib {" +
	"	display: inline-block;" +
	"	width: 35000px;" +
	"}" +
	"" +
	".fib {" +
	"	background-color: rgba(0,200,255,0.1);" +
	"}" +
	"" +
	".fib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".fib-middle {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}" +
	"" +
	".red {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,80,80);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	"" +
	".yellow {" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	"" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,80,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}" +
	"" +
	".green {" +
	"	border-color: rgb(0,255,0);" +
	"	background:   rgb(60,160,60);" +
	"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
	"}";

document.querySelector('body').appendChild(style);

fib(11, document.querySelector('.red'));

function pellHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = pellHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = pellHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = 2 * (left.value) + right.value;
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
var pell = function (n, node) {
	var tree = pellHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

pell(11, document.querySelector('.blue'));

function tribHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 3) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 0;
		}
		else if (n === 2) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Trib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = tribHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
    var middle = tribHelper(n - 2);
		clas = middle.html.getAttribute("class");
		middle.html.setAttribute("class", clas + " fib-middle");
		
		var right = tribHelper(n - 3);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");
		
		value = left.value + right.value + middle.value;
		var p = document.createElement('p');
		p.textContent = 'Trib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(middle.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
var trib = function (n, node) {
	var tree = tribHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

trib(11, document.querySelector('.green'));

