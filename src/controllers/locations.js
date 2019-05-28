const { Location } = require('../models');
const helper = require('../helper');

class LocationController {
    static async create(req, res) {
        try {
            const { name, male, female } = req.body;

            const data = {
                name,
                male: Number(male),
                female: Number(female)
            };

            const newLocation = await Location.create(data);

            return res.status(201).json({
                success: true,
                message: 'Location created',
                data: newLocation
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }

    static async getAll(req, res) {
        try {
            const locations = await Location.find();

            return res.status(200).json({
                success: true,
                message: 'Locations retrived',
                data: locations
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }

    static async getOne(req, res) {
        try {
            const query = { _id: req.params.id };
            const doc = await Location.find(query);

            if (doc.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Location not found'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Location retrived',
                data: doc[0]
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }

    static async update(req, res) {
        try {
            const query = { _id: req.params.id };
            const { name, male, female } = req.body;
            const foundLocation = await Location.find(query);
            if (!foundLocation.length) {
                return res.status(404).json({
                    success: false,
                    message: 'Location not found',
                });
            }

            const data = {
                name: name || foundLocation.name,
                male: Number(male) || foundLocation.male,
                female: Number(female) || foundLocation.female,
            };

            const updatedLocation = await Location.findOneAndUpdate(query, data);

            return res.status(200).json({
                success: true,
                message: 'Location updated',
                data: updatedLocation
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }

    static async delete(req, res) {
        try {
            const query = { _id: req.params.id };
            const doc = await Location.findByIdAndRemove(query);

            return res.status(200).json({
                success: true,
                message: 'Location deleted'
            });
        } catch (error) {
            helper.handleError(error, res);
        }
    }
}

module.exports = LocationController;
