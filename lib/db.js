import mysql from "mysql2/promise"

export async function query({ query, values = [] }) {
    const dbconnection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        // port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        // socketPath: "/var/run/mysqld/mysqld.sock"
        dateStrings: true
    });
    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results;
    } catch (error) {
        throw Error(error.message);
        return { error };
    }
}
