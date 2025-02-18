import ICredential from "../interfaces/ICredentials"

interface UserDto {
    name: string,
    email: string,
    birthdate: Date,
    nDni: number,
    credentialsId: ICredential
}

export default UserDto;