'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('items', 
    [
        {
            name: "Old Skool", 
            image: "https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p1_i1_w1920.jpeg", 
            description: "Classic cinnamon roll with vanilla frosting", 
            price: 3.99, 
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Cookie Monster", 
            image: "https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p83_i1_w1920.jpeg",
            description: "Cream cheese frosting topped with homemade chocolate chip cookie dough, chocolate chips & chocolate sauce",
            price: 5.99,
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Caramel Apple Pie", 
            image: "https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p130_i1_w1920.jpeg",
            description: "Caramel frosting topped with fresh apples, pecans, homemade pie crumble & caramel sauce",
            price: 5.99,
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Sparkle Berry", 
            image: "https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p133_i1_w1920.jpeg",
            description: "Chocolate frosting topped with fresh strawberries & sprinkles",
            price: 5.99,
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Campfire Smores", 
            image: "https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p131_i1_w1920.jpeg",
            description: "Marshmallow frosting topped with graham cookies, marshmallows & chocolate sauce",
            price: 5.99,
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Original Chocolate", 
            image: "https://cdn1.insomniacookies.com/uploads/products/1200__0000_InsomniaCookies_TraditionalCookies_ChocolateChunk_1610248929.png",
            description: "The Classic Tray bake. Made with smooth dark chocolate.",
            price: 3.99,
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Pecan and Toffee", 
            image: "https://cdn1.insomniacookies.com/uploads/products/Deluxe_Caramel-1200x1200_1611002530.png",
            description: "Chocolate topped with pecan nut halves and sticky toffee pieces.",
            price: 4.99,
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Snickerdoodle", 
            image: "https://cdn1.insomniacookies.com/uploads/products/1200__0007_InsomniaCookies_TraditionalCookies_SnickerDoodle-2_1610250364.png",
            description: "A delightfully buttery base covered in cinnamon sugar goodness.",
            price: 4.99,
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Chocolate Chunk Brownie", 
            image: "https://cdn1.insomniacookies.com/uploads/products/Brownies_ChocolateChipBrownie_1610142714.png",
            description: "A chocolatey delight baked to perfection",
            price: 3.99,
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Loaded Brownie", 
            image: "https://cdn1.insomniacookies.com/uploads/products/CookieButterBrownie_ProductImage_1200x1200_1618229747.png",
            description: "A fudgy, chocolate chip brownie slathered in chocolate cookie butter for the ultimate sweet, rich snack.",
            price: 7.99,
            category: 'bakery',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ])
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
