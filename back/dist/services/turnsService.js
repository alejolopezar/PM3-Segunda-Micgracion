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
exports.cancelTurnService = exports.createTurnService = exports.getTurnbyIdService = exports.getTurnsService = void 0;
const turns = [];
let id = 1;
//Implementar una función que pueda retornar el arreglo completo de turnos.
const getTurnsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return turns;
});
exports.getTurnsService = getTurnsService;
//Implementar una función que pueda obtener el detalle de un turno por ID.
const getTurnbyIdService = (turnId) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = turns.find(u => u.id === turnId);
    if (turn) {
        return turn;
    }
    if (turn) {
        return console.log("No se encontro turno");
    }
});
exports.getTurnbyIdService = getTurnbyIdService;
//Implementar una función que pueda crear un nuevo turno, siempre guardando, además,
//  el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
const createTurnService = (turnData) => __awaiter(void 0, void 0, void 0, function* () {
    const newTurn = {
        id,
        date: turnData.date,
        time: turnData.time,
        userId: turnData.userId,
        status: turnData.status
    };
    turns.push(newTurn);
    id++;
    return console.log("Turno creado con exito");
});
exports.createTurnService = createTurnService;
//Implementar una función que reciba el id de un turno específico y una vez identificado el turno
//  correspondiente, cambiar su estado a “cancelled”.
const cancelTurnService = (turnId) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = turns.find(u => u.id === turnId);
    if (turn) {
        turn.status = false;
        return console.log("Turno cancelado");
    }
    if (turn) {
        return console.log("No se encontro turno");
    }
});
exports.cancelTurnService = cancelTurnService;
