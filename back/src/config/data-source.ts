import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Turn } from "../entities/Turn"
import { Credential } from "../entities/Credential"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "pt24a",
    synchronize: true,
    logging: false,
    entities: [User, Turn, Credential],
    subscribers: [],
    migrations: [],
    dropSchema: false
})