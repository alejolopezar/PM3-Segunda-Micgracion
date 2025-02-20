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
exports.createUserService = exports.getUserbyIdService = exports.getUsersService = void 0;
const credentialsService_1 = require("./credentialsService");
const users = [];
let id = 1;
//Implementar una función que pueda retornar el arreglo completo de usuarios.
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUsersService = getUsersService;
//Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
const getUserbyIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = users.find(u => u.id === userId);
    if (user) {
        return user;
    }
    if (user) {
        return console.log("No se encontro usuario");
    }
});
exports.getUserbyIdService = getUserbyIdService;
//Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que
//  al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la
//  función correspondiente del servicio de credenciales. Al recibir de esta función el id de las
//  credenciales, debe guardar el dato en la propiedad credentialsId.
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        id,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId: yield (0, credentialsService_1.createCredentialService)(userData.credentialsId)
    };
    users.push(newUser);
    id++;
    return console.log("Usuario creado con exito");
});
exports.createUserService = createUserService;
