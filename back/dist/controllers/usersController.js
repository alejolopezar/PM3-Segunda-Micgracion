"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createUser = exports.getUserbyId = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Listado de ususarios");
});
exports.getAllUsers = getAllUsers;
const getUserbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Usuario por Id");
});
exports.getUserbyId = getUserbyId;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("registro de un nuevo usuario");
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Login del usuario a la aplicacion");
});
exports.login = login;
