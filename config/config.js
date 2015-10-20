/**
 * Created by arifkhan on 10/10/15.
 */
module.exports = {
    server: {
        host: '127.0.0.1',
        port: 8000
    },
    logging: {
        path: './logs/',
        prefix: 'deenwalk',
        rotate: 'daily'
    },
    database: {
        host: 'dbh63.mongolab.com',
        port: 27637,
        db: 'zaknodedev',
        username: 'zaknode',
        password: 'zakTest123',
    }
};