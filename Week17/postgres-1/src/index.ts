import 'dotenv/config'; 
import {Client} from 'pg'


const pgClient = new Client(`${process.env.DB_String}`)

// const pgClient2 = new Client({
//     user: "db-user",
//     password: "secret-password",
//     port: 5432,
//     host: "my.database-server.com",
//     database: "database-name",
//     ssl: true
// })



async function main()
{
    await pgClient.connect()

    await pgClient.query("UPDATE users SET username = 'Bishwa100' WHERE id = 9 ")


    const response = await pgClient.query("SELECT * FROM users")
    
    console.log(response.rows)
}


main()