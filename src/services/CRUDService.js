import bcrypt from 'bcrypt';
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);
let creatNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBC = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBC,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })

            resolve(data)
        } catch (e) {
            reject(e);
        }
    })
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);

        }
    })

}
module.exports = {
    creatNewUser: creatNewUser
}