import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity({
    name: "credentials"
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    passqord: string

    @OneToOne(() => User)
        @JoinColumn()
       user : User
}