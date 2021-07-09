let btnSubmit = document.getElementById("tombol");

// do something if the button click
btnSubmit.addEventListener("click", () => {
  alert("Hello World!");
});


const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		//Typical action to be performed when the document is ready:
		var data = JSON.parse(xhttp.responseText);
		console.log(data);
	} else if(this.readyState == 4) {
		alert(`error = ${xhttp.responseText}`);
    // console.log(`error : ${xhttp.responseText}`);
	}
};

xhttp.open("GET",
 "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json",
 true);
xhttp.send();
 
