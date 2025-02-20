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
exports.validateCredentialService = exports.createCredentialService = void 0;
const credentials = [];
let id = 1;
//Implementar una función que reciba username y password y cree un nuevo par de credenciales 
// con estos datos. Debe retornar el ID del par de credenciales creado.
const createCredentialService = (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = {
        id,
        username: credentialData.username,
        password: credentialData.password
    };
    credentials.push(newCredential);
    id++;
    return id;
});
exports.createCredentialService = createCredentialService;
//Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario 
// existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la 
// validación sea exitosa, deberá retornar el ID de las credenciales. 
const validateCredentialService = (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = credentials.find(u => u.username === credentialData.username);
    if (credential && credential.password === credentialData.password) {
        return credential.id;
    }
    return null;
});
exports.validateCredentialService = validateCredentialService;
