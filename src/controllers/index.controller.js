const {Pool} = require('pg'); //conjunto de conexiones necesarias para hacer peticiones al servidor

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'firstapi',
    port: '5432'//podemos darle el puerto, si no lo establece por defecto
});

const getUsers = async (req,res) => {
    //res.send('Hello users from index.controller.js file');
    const response = await pool.query('SELECT * FROM users');//esta es una consulta asincrona, es decir que node podría hacer otras cosas mientras termina de ejecutarse la consulta, para eso usamos async y await
    //console.log(response.rows); muestra por consola los resultados
    //res.send('users from index.controllers.js file'); muestra por pantalla los resultados
    res.status(200).json(response.rows);
};

const getUserById = async (req,res) =>{
    //res.send('UserID ' + req.params.id)
    const response = await pool.query('SELECT * FROM users where id=$1',[req.params.id]);
    res.status(200).json(response.rows);
};

const createUser = async (req,res) => {
    //console.log(req.body); //req.body son los datos que una apple envía al servidor

    const {name, email} = req.body; //creamos variables en base al req.body
    const response = await pool.query('INSERT INTO users (name,email) VALUES ($1,$2)',[name,email]); //se reemplazarán $1 por name y $2 por email
    console.log(response);
    //res.send('user created, index.controller createUser');
    res.json({
        message: 'User added succesfully',
        body: {
            user: {name,email}
        }
    })
};

const updateUser = async (req,res) => {
    const id = req.params.id;
    const {name, email} = req.body;
    console.log(id,name,email);
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',[name,email,id]);
    console.log(response);
    res.json('User updated successfully');
};

const deleteUser = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE ID = $1',[id]);
    console.log(response);
    res.json('User ' + id + ' deleted successfully');
};


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
