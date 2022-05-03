const inputs = document.getElementById("getinput");

const para = document.getElementById("getp");
const title = document.getElementById("ttitle");
const GetData = () => {
	console.log(inputs.value);
	fetch(
		`https://api.edamam.com/api/recipes/v2?type=public&q=${inputs.value}&app_id=614004b6&app_key=4c8b750d162583d89607146761b8cd66`
	)
		.then((e) => e.json())
		.then((e) => {
			e.hits.map((f) => {
				console.log(f.recipe);
				// console.log(f.recipe.image);
				// para.innerHTML += `<img src=${f.recipe.image}>`;
				// -------------------------------------------
				const arr = [f.recipe.ingredientLines];
				console.log(arr.toString());
				arr.map((j) => {
					para.innerHTML += `					<div id="box">
						<div id="upperbox">
							<img
								src=${f.recipe.image}
								alt=""
							/>
						</div>
						<div id="lowerbox">
							<h3 id="ttitle">${f.recipe.label}</h3>
							<div id="details"></div>
						</div>
					</div>`;
					// `<h3>${f.recipe.label}</h3><img src=${f.recipe.image}>  <h5>It has ${
					// 	f.recipe.calories
					// } Calories</h5>
					// <h6>Recipe</h6>
					// <li>${j.toString().replace(/,/g, `<br>`)}</li><br><hr>`;
					// title.innerText += f.recipe.label;
				});
				// ------------------------------------------------
				// para.innerHTML += `<h4>${f.recipe.label} has ${
				// 	f.recipe.calories
				// } and the process of<li> ${f.recipe.ingredientLines.toString()}</li></h4><br>`;
				// console.log(f.recipe.ingredientLines.toString());
				// ---------------------
				// console.log(f.recipe.label);
				// ---------------
				// console.log(
				// 	`${f.recipe.label} has ${f.recipe.calories} and the process of ${f.recipe.ingredients}`
				// );
				// ---------------
				// console.log(...f.recipe.ingredientLines);
				// console.log(" ");
				// ---------------------
				// console.log(
				// 	`${f.recipe.label} has ${f.recipe.calories} calories`
				// );
				// --------------------------
			});
		});
};
