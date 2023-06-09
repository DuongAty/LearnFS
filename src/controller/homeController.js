import db from '../models/index'
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.creatNewUser(req.body);
    console.log(message)
    return res.send('Post CRUD from server')
}
let displaygetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log(data)
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displaygetCRUD: displaygetCRUD,
}