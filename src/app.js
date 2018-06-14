import http        from 'http';
import app         from './config/app';
import usersRoutes from  './routes/users';

const port	= '3000';
const server	= http.createServer(app);


app.use('/users', usersRoutes);

server.listen(port);
console.log('server listening on port ' + port);


module.exports = app;
