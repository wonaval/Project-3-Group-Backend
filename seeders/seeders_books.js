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


     const items = [
      {
          name: 'Coding Book Package',
          description: '2 beginner friendly code books for the price of one!',
          price: 12.49,
          image: 'https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
          category: 'books',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      {
          name: 'Local Cookbook',
          description: 'A Local favorite. Enjoy thousands of locally inspired recipes.',
          price: 11.29,
          image: 'https://images.unsplash.com/photo-1598284443786-ffc0ba52786f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          category: 'books',
          createdAt: new Date(),
          updatedAt: new Date()

        },
      {
          name: 'Pasta Book',
          description: 'Learn great recipes about pasta!',
          price: 3.50,
          image: 'https://images.unsplash.com/photo-1541528772347-b2e90f1dbe71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          category: 'books',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        { 
          name: 'Javascript and CSS3 Bundle',
          description: 'Learn Javascript and CSS 3 for a valued price!',
          price: 15.50,
          image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          category: 'books',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          name: 'Javascript Book',
          description: 'Never miss a Javascript Lesson again.',
          price: 12.50,
          image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          category: 'books',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          name: 'Django Book',
          description: 'Learn the arts of django framework powered by Python.',
          price: 12.50,
          image: 'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
          category: 'books',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          name: 'Movie Poster Book',
          description: 'Get movie poster inspirations for your next artwork.',
          price: 8.50,
          image: 'https://images.unsplash.com/photo-1619164816991-22d393238d8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          category: 'books',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          name: 'Foreign Art Book',
          description: 'Art work inspired by Vietnamese culture.',
          price: 13.50,
          image: 'https://images.unsplash.com/photo-1581489994855-a810a964c13d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
          category: 'books',
          createdAt: new Date(),
          updatedAt: new Date()
        }
  ]
  
      await queryInterface.bulkInsert('items', items, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('items', null, {});
  }
};