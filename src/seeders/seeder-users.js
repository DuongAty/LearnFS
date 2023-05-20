'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Duong',
      lastName: 'Aty',
      address: 'Dang Nang',
      phoneNumber: '12345',
      gender: 1,
      image: '123',
      roleId: 'R1',
      positionId: 'P1',

      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
