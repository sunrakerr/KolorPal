

const wall = document.getElementById('wall')
const search_but = document.getElementById('search-but')
const newbut = document.getElementById('new')
const filenamer = document.getElementById('newName')
const closePro = document.getElementById('dontSavePro')
const newPro = document.getElementById('savePro')


	if(localStorage){
		for(let i=1;i<=localStorage.length;i++){
			var x = localStorage.getItem("file"+i)
			var y = `<div class="bins" id="${x}">
				${x}
			</div>
			`
			wall.innerHTML += y

	}
}


newbut.addEventListener('click',()=>{
		//
		// wall.innerHTML += new_project;
		// i=i+1

		document.getElementById('fileinp').value = ""
		if(filenamer.style.display == 'none'){
			filenamer.style.display = 'flex'
				}

})

search_but.addEventListener('click',()=>{
	localStorage.clear()
	alert('cleared storage!')
	location.reload()
})

closePro.addEventListener('click',()=>{
	if(filenamer.style.display == 'flex'){
		filenamer.style.display = 'none'
	}

})

newPro.addEventListener('click',()=>{
	var a = document.getElementById('fileinp').value
	var n = "file"+(localStorage.length+1)
	for(let i=1;i<=localStorage.length;i++){
		if(localStorage.getItem("file"+i).startsWith(a)){
			alert('Project name already exists!')
			break;
		}
		else{
			localStorage.setItem(n,a);
			console.log(localStorage);
			if(filenamer.style.display == 'flex'){
				filenamer.style.display = 'none'
			}
			break;
		}
	}
	
	if(localStorage){
		for(let i=1;i<=localStorage.length;i++){
			var x = localStorage.getItem("file"+i)
			var y = `<div class="bins" id="${x}">
				${x}
			</div>
			`
			wall.innerHTML += y

	}
}

})



// search_but.addEventListener('click',()=>{
// 	var a = document.getElementById("search").value //ex:fol3
//
//
// 	for(i=0;i<fols.length;i++){
// 		if(fols[i].toString().startsWith( a)){
// 			var b=document.getElementById(fols[i])
// 			b.style.display = 'block'
// 		}
// 		else{
// 		var b=document.getElementById(fols[i])
// 		b.style.display = 'none'
// 		}
// 	}
//
// 	//}
// })
