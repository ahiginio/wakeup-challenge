"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const schema_1 = require("../restaurant/schema");
class StressService {
    products = [];
    restaurants = [];
    generateRestaurant(qty) {
        for (let i = 0; i < qty; i++) {
            this.restaurants.push(new schema_1.Restaurant({
                name: faker_1.faker.company.name(),
                description: faker_1.faker.lorem.text(),
                image: faker_1.faker.image.url(),
            }));
        }
    }
    generateProduct(restaurants) {
        for (const restaurant of restaurants) {
            this.products.push({
                name: 'Spaghetti Carbonara',
                description: 'Italian pasta dish made with spaghetti, eggs, Parmesan cheese, pancetta, and black pepper.',
                price: 15.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chicken Alfredo',
                description: 'Creamy pasta dish with grilled chicken, Alfredo sauce, and garlic bread.',
                price: 17.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Hamburger',
                description: 'Classic beef burger with lettuce, tomato, onion, pickles, and a side of fries.',
                price: 10.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Vegetable Stir-Fry',
                description: 'Colorful mix of fresh vegetables stir-fried with soy sauce and served over steamed rice.',
                price: 12.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Grilled Salmon',
                description: 'Fresh Atlantic salmon fillet grilled to perfection and served with lemon butter sauce.',
                price: 19.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Caesar Salad',
                description: 'Crisp romaine lettuce with garlic croutons, Parmesan cheese, and Caesar dressing.',
                price: 9.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Margherita Pizza',
                description: 'Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.',
                price: 12.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chicken Caesar Wrap',
                description: 'Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a tortilla.',
                price: 8.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Sushi Platter',
                description: 'Assortment of fresh sushi including nigiri, maki rolls, and sashimi slices.',
                price: 24.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Vegetarian Pizza',
                description: 'Pizza topped with assorted vegetables like bell peppers, mushrooms, onions, and olives.',
                price: 11.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chicken Shawarma',
                description: 'Middle Eastern dish with grilled chicken, tahini sauce, lettuce, tomato, and pickles in pita bread.',
                price: 13.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Penne Arrabiata',
                description: 'Spicy Italian pasta dish made with penne pasta and a spicy tomato sauce.',
                price: 14.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'BBQ Ribs',
                description: 'Tender pork ribs slow-cooked and glazed with barbecue sauce, served with coleslaw and cornbread.',
                price: 22.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Mushroom Risotto',
                description: 'Creamy Italian rice dish cooked with mushrooms, onions, white wine, and Parmesan cheese.',
                price: 16.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Taco Platter',
                description: 'Assorted tacos with fillings like beef, chicken, fish, or vegetarian options, served with salsa and guacamole.',
                price: 18.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Pad Thai',
                description: 'Thai stir-fried noodles with tofu, shrimp, bean sprouts, peanuts, and a tangy sauce.',
                price: 13.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Falafel Wrap',
                description: 'Deep-fried chickpea patties with tahini sauce, lettuce, tomato, and pickles wrapped in pita bread.',
                price: 9.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Pho',
                description: 'Vietnamese noodle soup with beef or chicken, fresh herbs, bean sprouts, and lime wedges.',
                price: 11.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Gourmet Burger',
                description: 'Deluxe burger with premium beef, gourmet cheese, bacon, avocado, and truffle aioli.',
                price: 19.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chicken Parmesan',
                description: 'Breaded chicken breast topped with marinara sauce and melted mozzarella cheese, served with spaghetti.',
                price: 16.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Shrimp Scampi',
                description: 'Garlic butter shrimp sautéed with white wine, lemon juice, and parsley, served over linguine.',
                price: 20.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Eggplant Parmesan',
                description: 'Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese, served with garlic bread.',
                price: 14.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chicken Kebab',
                description: 'Grilled chicken skewers marinated in Mediterranean spices, served with rice and tzatziki sauce.',
                price: 15.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Garden Salad',
                description: 'Fresh mixed greens with cucumbers, tomatoes, carrots, and choice of dressing.',
                price: 7.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Beef Stir-Fry',
                description: 'Tender beef strips stir-fried with vegetables in a savory sauce, served over steamed rice.',
                price: 18.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Caprese Sandwich',
                description: 'Sandwich with fresh mozzarella, tomatoes, basil leaves, and balsamic glaze on ciabatta bread.',
                price: 10.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Lobster Bisque',
                description: 'Creamy soup made with lobster, onions, celery, and a hint of sherry.',
                price: 25.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Margarita Cocktail',
                description: 'Classic tequila-based cocktail with lime juice and triple sec, served with salt on the rim.',
                price: 8.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Apple Pie',
                description: 'Traditional American pie made with spiced apples in a flaky crust, served warm with vanilla ice cream.',
                price: 12.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chocolate Brownie',
                description: 'Rich and decadent chocolate brownie topped with vanilla ice cream and hot fudge sauce.',
                price: 6.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chicken Caesar Salad',
                description: 'Grilled chicken breast on a bed of crisp romaine lettuce with Caesar dressing and Parmesan cheese.',
                price: 12.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Beef Burrito',
                description: 'Large flour tortilla stuffed with seasoned beef, rice, beans, cheese, and salsa.',
                price: 10.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Seafood Paella',
                description: 'Spanish rice dish with shrimp, mussels, clams, chorizo, and saffron seasoning.',
                price: 22.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Vegetable Lasagna',
                description: 'Layers of pasta sheets, marinara sauce, ricotta cheese, and assorted vegetables.',
                price: 14.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Fish and Chips',
                description: 'Crispy battered fish fillets served with French fries, tartar sauce, and lemon wedges.',
                price: 16.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Tuna Poke Bowl',
                description: 'Hawaiian dish with marinated raw tuna, rice, avocado, cucumber, and sesame seeds.',
                price: 18.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'BBQ Chicken Wings',
                description: 'Crispy chicken wings coated in barbecue sauce, served with celery sticks and ranch dressing.',
                price: 9.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Cheeseburger',
                description: 'Classic beef burger with American cheese, lettuce, tomato, onion, pickles, and ketchup.',
                price: 11.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Vegetarian Pad Thai',
                description: 'Thai noodles stir-fried with tofu, bean sprouts, peanuts, and a tangy sauce.',
                price: 13.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Shrimp Tempura',
                description: 'Deep-fried shrimp in a light, crispy batter, served with tempura sauce.',
                price: 15.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chicken Fajitas',
                description: 'Sizzling chicken strips with onions, bell peppers, and spices, served with tortillas and toppings.',
                price: 17.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Mango Sticky Rice',
                description: 'Thai dessert made with sweet sticky rice, fresh mango slices, and coconut milk.',
                price: 8.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Mushroom Burger',
                description: 'Vegetarian burger patty made with mushrooms, topped with Swiss cheese, lettuce, and tomato.',
                price: 12.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Lemon Herb Roast Chicken',
                description: 'Tender roast chicken marinated in lemon, garlic, and herbs, served with roasted vegetables.',
                price: 19.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Pancakes with Maple Syrup',
                description: 'Fluffy pancakes served with butter and maple syrup.',
                price: 7.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Beef Stroganoff',
                description: 'Tender beef strips in a creamy mushroom sauce, served over egg noodles.',
                price: 20.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Fruit Salad',
                description: 'Assortment of fresh fruits like strawberries, bananas, grapes, and melon.',
                price: 6.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Stuffed Bell Peppers',
                description: 'Bell peppers filled with a savory mixture of ground beef, rice, tomatoes, and spices.',
                price: 14.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chicken Noodle Soup',
                description: 'Comforting soup with chicken, vegetables, noodles, and herbs in a flavorful broth.',
                price: 8.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Eggplant Rollatini',
                description: 'Thin slices of eggplant rolled up with ricotta cheese and marinara sauce, topped with mozzarella.',
                price: 16.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Tiramisu',
                description: 'Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.',
                price: 9.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Beef Tacos',
                description: 'Tacos filled with seasoned ground beef, lettuce, cheese, salsa, and sour cream.',
                price: 10.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Veggie Burger',
                description: 'Plant-based burger patty made with vegetables and grains, topped with lettuce, tomato, and onion.',
                price: 11.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chicken Parmesan Sandwich',
                description: 'Breaded chicken cutlet with marinara sauce and melted mozzarella on a toasted roll.',
                price: 13.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Ratatouille',
                description: 'French Provencal vegetable stew with tomatoes, zucchini, eggplant, bell peppers, and herbs.',
                price: 12.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Fettuccine Alfredo',
                description: 'Creamy pasta dish with fettuccine noodles tossed in a Parmesan cheese sauce.',
                price: 15.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Greek Salad',
                description: 'Salad with mixed greens, tomatoes, cucumbers, olives, feta cheese, and Greek dressing.',
                price: 10.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Lamb Gyro',
                description: 'Greek sandwich with seasoned lamb, tzatziki sauce, lettuce, tomato, and onions in pita bread.',
                price: 14.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Chocolate Cake',
                description: 'Rich and moist chocolate cake with layers of chocolate ganache and frosting.',
                price: 8.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            }, {
                name: 'Beef Kabobs',
                description: 'Grilled skewers of marinated beef chunks and vegetables, served with rice pilaf.',
                price: 18.99,
                image: 'https://fastly.picsum.photos/id/781/300/150.jpg?hmac=0lcnS1kfk3P-Duwj1D4vFLiN6ydbS41oWwbazon3my8',
                restaurant: restaurant._id,
            });
        }
    }
    async createData() {
        this.generateRestaurant(30);
        this.generateProduct(this.restaurants);
    }
}
exports.default = new StressService();
