function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	n = parseInt(n);

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
		var clas = left.html.getAttribute('class');
		left.html.setAttribute('class', clas + ' fib-left');

		var right = fibHelper(n - 2);
		clas = right.html.getAttribute('class');
		right.html.setAttribute('class', clas + ' fib-right');

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
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}

	var tree = fibHelper(n);
	node.appendChild(tree.html);
}

var fibButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	fib(value, form.parentNode);
}

var fibSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Fib(' + me.value + ')';
}