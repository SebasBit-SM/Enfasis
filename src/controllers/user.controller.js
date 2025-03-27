const User = require("../models/user.model");
const response = require("../helpers/response");

exports.getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        response.success(req, res, users);
    } catch (error) {
        response.error(req, res, "Error al obtener usuarios", 500);
    }
};

exports.getOne = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return response.error(req, res, "Usuario no encontrado", 404);
        response.success(req, res, user);
    } catch (error) {
        response.error(req, res, "Error al obtener usuario", 500);
    }
};

exports.create = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        response.success(req, res, newUser, 201);
    } catch (error) {
        response.error(req, res, "Error al crear usuario", 500);
    }
};

exports.update = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return response.error(req, res, "Usuario no encontrado", 404);
        await user.update(req.body);
        response.success(req, res, user);
    } catch (error) {
        response.error(req, res, "Error al actualizar usuario", 500);
    }
};

exports.delete = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return response.error(req, res, "Usuario no encontrado", 404);
        await user.destroy();
        response.success(req, res, "Usuario eliminado");
    } catch (error) {
        response.error(req, res, "Error al eliminar usuario", 500);
    }
};
