// ESNEK
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//  const defaultCars = [
//     {
//         vin:"123",
//         make:"Toyota",
//         model:"Corolla",
//         mileage:1234
//     },
//     {
//         vin:"1234",
//         make:"Seat",
//         model:"Arona",
//         mileage:1234
//     },
//     {
//         vin:"123445",
//         make:"Ford",
//         model:"Focus",
//         mileage:5674
//     },
//     ];

    exports.seed = async function(knex){
    await knex('Cars').truncate()
    // await knex('Cars').insert(defaultCars);
};
    