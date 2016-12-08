
$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$('.icon-arrow-left-alt').hide();

	// Pinta una noticia en el párrafo que está dentro del DIV callout-news.
	function printNews(){
		var noticia = $('#noticia');

		noticia.append('NUEVAS RECETAS');
	};
	//Mandar llamar la función
	printNews();

	renderActivities(activities);
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	//FORMA 1
	/*
	for (var i = 0; i < recipesArray.length; i++){
		var recipe = recipesArray[i];
		renderRecipe(recipe);
	}	
	*/

	//FORMA 2 Mandar llamar el arreglo con each
	/*_.each(recipesArray, renderRecipe);*/

	//Búsqueda por propiedad highlighted
	var objectRecipe = _.where(recipesArray, {highlighted:true});
	_.each(objectRecipe, renderRecipe);
	
	//El código de comentado de la línea 43 a la 46 se usa con el codigo que empieza en la línea 61
	/*console.log(objectRecipe);
	for (i=0; i < objectRecipe.length; i++){ 
		renderRecipe(objectRecipe);
	}*/
};


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

//El código comentado de abajo se usa si se utiliza el for de arriba comentado de la línea 43 a la 46
/*function renderRecipe(recipe) {
	
	
		console.log('Voy a pintar la receta: ', recipe);
		var vinculo = $('<a></a>');
		vinculo.addClass('item-recipe');

		var span1 = $('<span></span>');
		span1.addClass('attribution');

		var span2 = $('<span></span>');
		span2.addClass('title-recipe');
		span2.text(recipe[i].title);

		var span3 = $('<span></span>');
		span3.addClass('metadata-recipe');

		var span4 = $('<span></span>');
		span4.addClass('author-recipe');
		span4.text(recipe[i].source.name);

		var span5 = $('<span></span>');
		span5.addClass('bookmarks-recipe');

		var span6 = $('<span></span>');
		span6.addClass('icon-bookmark'); 

		var img = $('<img/>');
		img.attr('src', recipe[i].source.url);

		vinculo.append(span1);
		span1.append(span2);
		span1.append(span3);
		span3.append(span4);
		span3.append(span5);
		span5.append(span6);
		vinculo.append(img);*/

function renderRecipe(recipe) {
	
	
		console.log('Voy a pintar la receta: ', recipe);
		var vinculo = $('<a></a>');
		vinculo.addClass('item-recipe');

		var span1 = $('<span></span>');
		span1.addClass('attribution');

		var span2 = $('<span></span>');
		span2.addClass('title-recipe');
		span2.text(recipe.title);

		var span3 = $('<span></span>');
		span3.addClass('metadata-recipe');

		var span4 = $('<span></span>');
		span4.addClass('author-recipe');
		span4.text(recipe.source.name);

		var span5 = $('<span></span>');
		span5.addClass('bookmarks-recipe');

		var span6 = $('<span></span>');
		span6.addClass('icon-bookmark'); 

		var img = $('<img/>');
		img.attr('src', "img/recipes/320x350/" + recipe.name + ".jpg");

		vinculo.append(span1);
		span1.append(span2);
		span1.append(span3);
		span3.append(span4);
		span3.append(span5);
		span5.append(span6);
		vinculo.append(img);

	//console.log(vinculo);
	//Pintarlos en la pantalla
	$('.list-recipes').append(vinculo);

	/*var template =
	'<a class="item-recipe">' +
		'<img src="<%= mainPicture %>">' +
		'<p><%= name %></p>' +
		'<p><%= age.number %>' +
			'<span><%= age.type %></span>' +
		'</p>' +
	'</a>';

	var compiled = _.template(template);
	var li = compiled(pet);
	console.log(li);

	var elemento = $(li);
	$('#petLi').append(elemento);*/





}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);

	//Recorre el arreglo
	_.each(activitiesArray, renderActivity);
	//Oculta el div con clase wrapper-message
	$('.wrapper-message').hide();

}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activity) {

	var template =
	'<a href="#" class="item-activity">' +
		'<span class="attribution">' +
			'<span class="avatar">' +
				'<img class="image-avatar" src="<%= activity.userAvatar %>">' +
			'</span>' +
			'<span class="meta">' +
				'<span class="author"><%= activity.userName %></span> made' +
				'<span class="recipe"><%= activity.recipeName %></span>' +
				'<span class="location">&mdash<%= activity.place %></span>' +
			'</span>' +
		'</span>' +
		'<div class="bg-image" style="background-image: url(&quot;<%=activity.image %>&quot;)"></div>' +
	'</a>';

	var compiled = _.template(template);
	var a = compiled({activity:activity});
	console.log(a);

	var elemento = $(a);
	//list-activities clase del div que está en el archivo html index
	$('.list-activities').append(elemento);
}


