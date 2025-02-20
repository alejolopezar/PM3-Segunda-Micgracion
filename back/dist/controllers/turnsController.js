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
const turnsService_1 = require("../services/turnsService");
const getAllTurns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield (0, turnsService_1.getTurnsService)();
    res.status(200).json(turns);
});
exports.getAllTurns = getAllTurns;
const getTurnbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield (0, turnsService_1.getTurnbyIdService)(req.body);
    res.status(200).json(turn);
});
exports.getTurnbyId = getTurnbyId;
const createTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield (0, turnsService_1.createTurnService)(req.body);
    res.status(200).json(answer);
});
exports.createTurn = createTurn;
const cancelTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield (0, turnsService_1.cancelTurnService)(req.body);
    res.status(200).json(answer);
});
exports.cancelTurn = cancelTurn;
