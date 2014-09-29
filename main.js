var FoodItem = function(name, calories, vegan, glutenFree, citrusFree)
{
	this.name = name || 'Donut';
	this.calories = calories || '800';
	this.vegan = vegan || false;
	this.glutenFree = glutenFree || false;
	this.citrusFree = citrusFree || true;
}
FoodItem.prototype.toString = function()
{
	return this.name + ' has ' + this.calories +
		' calories, is ' + ((this.vegan) ? '' : 'not ') + 'vegan, is ' 
		+ ((this.glutenFree) ? '' : 'not ') + 'gluten free, and is '
		+ ((this.citrusFree) ? '' : 'not ') + 'citrus free.';
}

var Drink = function(name, description, price, ingredients)
{
	this.name = name || 'water';
	this.description = description || 'watery';
	this.price = price || 999;
	this.ingredients = ingredients || [new FoodItem('H20')];
}

var Plate = function(name, description, price, ingredients)
{
	this.name = name || 'Water Plate';
	this.description = description || 'watery';
	this.price = price || 999;
	this.ingredients = ingredients || [new FoodItem('ceramic')];
}
Plate.prototype.toString = function()
{
	var out = this.name + ' is ' + this.description +
		', costs $' + this.price + ', and contains: ';
	out += this.ingredients.map(function(foodItem)
	{
		return foodItem.name;
	}).join(', ');
	return out;
}
Plate.prototype.isVegan = function()
{
	this.ingredients.forEach(function(foodItem)
	{
		if(!foodItem.vegan)
			return false;
	})
}
Plate.prototype.isGlutenFree = function()
{
	this.ingredients.forEach(function(foodItem)
	{
		if(!foodItem.glutenFree)
			return false;
	})
}
Plate.prototype.isCitrusFree = function()
{
	this.ingredients.forEach(function(foodItem)
	{
		if(!foodItem.citrusFree)
			return false;
	})
}

var Order = function(plates)
{
	this.plates = plates || [];
}

var Menu = function(plates)
{
	this.plates = plates || [];
}
Menu.prototype.toString = function()
{
	var output = '';
	output += this.plates.map(function(plate)
	{
		return plate.toString();
	}).join('\n');
	return output;
}

var Restaurant = function(name, description, menu)
{
	this.name = name || 'Some Restaurant';
	this.description = description || 'a description';
	this.menu = menu || new Menu();
}
Restaurant.prototype.toString = function()
{
	var out = 'Welcome to ' + this.name + '. \n' +
		this.description + '\n On the menu: \n';
	out += this.menu.toString();
	return out;
}

var Customer = function(dietaryPreferences)
{
	this.dietaryPreferences = dietaryPreferences || 'none';
}

$(document).on('ready', function() {
  // var donut = new FoodItem();
  // var brocolli = new FoodItem('Broccolli',40,true,true,true);
  // var lemonCake = new FoodItem('Lemon Cake',250,true,false,false);
  var foods = [];
  foods.push(new FoodItem());
  foods.push(new FoodItem('Broccolli',40,true,true,true));
  foods.push(new FoodItem('Lemon Cake',250,true,false,false));
  foods.forEach(function(food)
  {
  	console.log("food.toString():", food.toString());
  });

  var burritoIngredients = [];
  burritoIngredients.push(new FoodItem('Chicken', 600,false,true,false));
  burritoIngredients.push(new FoodItem('Cheese', 100, false, true, true));
  burritoIngredients.push(new FoodItem('Rice',6,true,true,true));
  var burrito = new Plate('Burrito','burrito-y', 9.99, burritoIngredients);

  var guacIngredients = [new FoodItem('Avacado',50, true, true, true)];
  guacIngredients.push(new FoodItem('Lemon juice', 10, true, true, false));
  var guac = new Plate('Guacamole','guaqy',18, guacIngredients);

  var margIngredients = [new FoodItem('Tequila', 800, true, true, false)];
  margIngredients.push(new FoodItem('Marg Mix', 67, true, true, false));
  var marg = new Plate('Margarita', 'Tangy', 8, margIngredients);

  var menu = new Menu([guac, burrito, marg]);
  var restaurant = new Restaurant('Mexican Place', 'We sell a burrito.', menu);
  console.log("res:", restaurant.toString());









});