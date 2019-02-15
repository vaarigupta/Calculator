var exp ="";

function handleclick(btnval)
{
	if(btnval ==="=") /// === is used to compare type and value of the expression given
	{
      exp = new String(eval(exp)); // is a special function used for evaluating strings and give results and parse them
	}
	else if (btnval==="C")
	{
		exp="";
	}
	else
	{ exp += btnval;

	}
  var display = document.getElementById("display");
 display.innerText = exp;
}
///innerText is a combination of html n js and applied on the text in the div element
