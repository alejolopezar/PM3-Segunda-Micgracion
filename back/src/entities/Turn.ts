import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({
    name: "turns"
})
export class Turn {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    time: string

    @Column()
    userId: number

    @Column()
    status: boolean

    @ManyToOne(() => User, (user) => user.turn)
    user: User
}
