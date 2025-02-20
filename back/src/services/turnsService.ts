import ITurns from "../interfaces/ITurns";
import TurnDto from "../dtos/TurnDto";

const turns: ITurns[] = []

let id: number = 1;

//Implementar una función que pueda retornar el arreglo completo de turnos.
export const getTurnsService = async (): Promise<ITurns[]> => {
    return turns;
}

//Implementar una función que pueda obtener el detalle de un turno por ID.
export const getTurnbyIdService = async (turnId: number) => {
    const turn = turns.find(u => u.id === turnId);
    if(turn) {
        return turn;
    }
    if(turn!) {
        return console.log("No se encontro turno");
    }
}

//Implementar una función que pueda crear un nuevo turno, siempre guardando, además,
//  el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
export const createTurnService = async (turnData: TurnDto) => {
    
    const newTurn: ITurns= {
        id,
        date: turnData.date,
        time: turnData.time,
        userId: turnData.userId,
        status: turnData.status
    }
    turns.push(newTurn)
    id++;
    return console.log("Turno creado con exito");
}

//Implementar una función que reciba el id de un turno específico y una vez identificado el turno
//  correspondiente, cambiar su estado a “cancelled”.
export const cancelTurnService = async (turnId: number) => {
    const turn = turns.find(u => u.id === turnId);
    if(turn) {
        turn.status = false;
        return console.log("Turno cancelado");
    }
    if(turn!) {
        return console.log("No se encontro turno");
    }
}