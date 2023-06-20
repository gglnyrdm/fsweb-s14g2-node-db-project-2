const db = require('../../data/db-config');

const getAll = () => {
  // HOKUS POKUS
  return db("cars")
}

const getById = (carId) => {
  // HOKUS POKUS
  return db("cars")
    .where("id", carId)
    .first();
}

const getByVin = (vin) => {
  
  return db("cars")
    .where("vin",vin)
    .first();
}

const create = async(car) => {
  // HOKUS POKUS
const [id] = await db("cars").insert(car);
return getById(id);
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin
}