import { getAllUsersRepository } from "../../Repositories/User.repository"

export const getAllUsersService = async () => {
   return await getAllUsersRepository()
}