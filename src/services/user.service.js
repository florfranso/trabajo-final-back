import { userDao } from "../daos/factory.js";
import { UserDTO } from "../daos/dtos/user.dto.js";



const getUsers = async () => {
    const users = await userDao.getAll();
    const newUsersDto = users.map(user => new UserDTO(user));
    return newUsersDto;
};

const getUserById = async (id) => {
    const user = await userDao.getById(id)
    return user;
};

const updateUser = async (id, data) => {
    const userActualizado = await userDao.update(id, data);
    return userActualizado
};

const deleteUserById = async (id) => {
    const deleteUser = await userDao.deleteById(id);
    return deleteUser
};

const deleteUser = async () => {
    const user = await userDao.deleteAll();
    return user
};






export { getUsers, deleteUserById, getUserById, updateUser, deleteUser };