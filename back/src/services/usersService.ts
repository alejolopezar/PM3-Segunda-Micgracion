import IUser from "../interfaces/IUser";
import UserDto from "../dtos/UserDto";
import { createCredentialService } from "./credentialsService";

const users: IUser[] = []

let id: number = 1;

//Implementar una función que pueda retornar el arreglo completo de usuarios.
export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}

//Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
export const getUserbyIdService = async (userId: number) => {
    const user = users.find(u => u.id === userId);
    if(user) {
        return user;
    }
    if(user!) {
        return alert("No se encontro usuario");
    }
}

//Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que
//  al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la
//  función correspondiente del servicio de credenciales. Al recibir de esta función el id de las
//  credenciales, debe guardar el dato en la propiedad credentialsId.
export const createUserService = async (userData: UserDto) => {
    
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId: await createCredentialService(userData.credentialsId)
    }
    users.push(newUser)
    id++;
    return alert("Usuario creado con exito");
}