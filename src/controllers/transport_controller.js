// transport_controller.js

import { v4 as uuidv4 } from 'uuid';
import transportModel from '../models/transportModel.js';

const getALLtransportController = async (req, res) => {
    try {
        const tours = await transportModel.getALLtransportModel();
        res.status(200).json(tours);
    } catch (error) {
        console.log(error);
    }
};

const createtransportController = async (req, res) => {
    const newtransportData = {
        id: uuidv4(),
        ...req.body
    };
    try {
        const transport = await transportModel.createtransportModel(newtransportData);
        res.status(200).json(transport);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updatedtransportController = async (req, res) => {
    const { id } = req.params;
    try {
        const transport = await transportModel.updatetransportModel(id, req.body);
        res.status(200).json(transport);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deletetransportController = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await transportModel.deletetransportModel(id);
        res.status(200).json({ msg: "transporte eliminado correctamente", message });
    } catch (error) {
        res.status(500).json(error);
    }
};

const getonetransportController = async (req, res) => {
    const { id } = req.params;
    try {
        const transports = await transportModel.getonetransportModel(id);
        res.status(200).json(transports);
    } catch (error) {
        console.log(error);
    }
};

// Exportar las funciones correctamente
export {
    getALLtransportController,
    createtransportController,
    updatedtransportController,
    deletetransportController,
    getonetransportController
};