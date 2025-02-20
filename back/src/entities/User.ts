import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, OneToOne, OneToMany } from "typeorm"
import { Credential } from "./Credential"
import { Turn } from "./Turn"

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    birthdate: Date

    @Column()
    nDni: number

    @Column()
    credentialsID: number

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Turn, (turn => turn.user))
    turn: Turn[]
}

