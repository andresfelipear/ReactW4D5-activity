// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 2 – Interfaces
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈
// Objectives:
// • Demonstrate structural typing (duck typing)
// • Create an interface and implement it on a class
// • Differentiate type aliases from interfaces
var Exercise2 = function () {
    // ======== Exercise 2.1 ========
    // Instructions:
    // • Create an interface `CartItem` and replace the param's type with it
    // • Make variantId optional
    function addToCart(item) {
        console.log('[Exercise 2.1]', "Adding \"".concat(item.title, "\" to cart."));
    }
    addToCart({ id: 1, title: 'Concrete shoes' });
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var jane = new Person('Jane', 31);
    console.log('[Exercise 2.2]', "".concat(jane.name, " is ").concat(jane.age, " years old."));
    var montreal = {
        coords: {
            latitude: 42.332,
            longitude: -73.324
        },
        name: 'Montréal'
    };
    var tampa = {
        coords: {
            latitude: 27.9478,
            longitude: -82.4584
        },
        name: 'Tampa'
    };
    // (string | number) // union
    // (string & number) //intersection
    function getCityInfo(city) {
        var coords = "(".concat(city.coords.latitude.toFixed(3), ", ").concat(city.coords.longitude.toFixed(3), ")");
        return "".concat(city.name.toUpperCase(), " is located at ").concat(coords, ".");
    }
    console.log('[Exercise 2.3]', "".concat(getCityInfo(montreal), " \n\n ").concat(getCityInfo(tampa)));
};
Exercise2();
