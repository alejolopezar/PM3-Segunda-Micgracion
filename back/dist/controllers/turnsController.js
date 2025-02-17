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
exports.cancelTurn = exports.createTurn = exports.getTurnbyId = exports.getAllTurns = void 0;
const getAllTurns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Listado de todos los turno de todos los ususarios");
});
exports.getAllTurns = getAllTurns;
const getTurnbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("obtenre el detalle de un turno por Id");
});
exports.getTurnbyId = getTurnbyId;
const createTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("registro de un nuevo turno");
});
exports.createTurn = createTurn;
const cancelTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Cancelar un turno");
});
exports.cancelTurn = cancelTurn;
