// HOKUS POKUS
const carsRouter = require('express').Router();
const carsModel = require('./cars-model');
const mw =require('./cars-middleware');


carsRouter.get('/', async(req,res,next) =>{
    try {
        const allCars = await carsModel.getAll();
        res.json(allCars);
    } catch (error) {
        next(error);
    }
})

carsRouter.get('/:id', mw.checkCarId, (req,res,next) =>{
    try {
        res.json(req.existCar);
    } catch (error) {
        next(error);
    }
})

carsRouter.post('/', mw.checkCarPayload, mw.checkVinNumberValid, mw.checkVinNumberUnique, async (req,res,next) =>{
    try {
        const insertCarModel = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            title: req.body.title,
            transmission: req.body.transmission
        }
        const insertedCar = await carsModel.create(insertCarModel);
        res.status(201).json(insertedCar);
    } catch (error) {
        next(error);
    }
})

module.exports = carsRouter;