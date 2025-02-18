import ITurns from "../interfaces/ITurns"

interface TurnDto {
    date: Date,
    time: string,
    userId: number,
    status: boolean
}

export default TurnDto;