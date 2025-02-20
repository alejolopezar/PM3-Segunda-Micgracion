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
const usersService_1 = require("../services/usersService");
const credentialsService_1 = require("../services/credentialsService");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, usersService_1.getUsersService)();
    res.status(200).json(users);
});
exports.getAllUsers = getAllUsers;
const getUserbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, usersService_1.getUserbyIdService)(req.body);
    res.status(200).json(user);
});
exports.getUserbyId = getUserbyId;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield (0, usersService_1.createUserService)(req.body);
    res.status(200).json(answer);
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield (0, credentialsService_1.validateCredentialService)(req.body);
    res.status(200).json(answer);
});
exports.login = login;
