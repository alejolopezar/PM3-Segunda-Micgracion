import ICredential from "../interfaces/ICredentials";
import CredentialDto from "../dtos/CredentialDto";

const credentials: ICredential[] = []

let id: number = 1;
//Implementar una función que reciba username y password y cree un nuevo par de credenciales 
// con estos datos. Debe retornar el ID del par de credenciales creado.
export const createCredentialService = async (credentialData: CredentialDto): Promise<number> => {
    const newCredential: ICredential = {
        id,
        username: credentialData.username,
        password: credentialData.password
    }
    credentials.push(newCredential)
    id++;
    return id;
}
//Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario 
// existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la 
// validación sea exitosa, deberá retornar el ID de las credenciales. 
export const validateCredentialService = async (credentialData: CredentialDto) => {
    const credential = credentials.find(u => u.username === credentialData.username);
    if( credential && credential.password === credentialData.password) {
        return credential.id;
    }
    return null;
}