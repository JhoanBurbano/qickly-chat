const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const routes = require('./src/routes/index')


require('./db.js')




const server = express()


server.use(express.urlencoded({ extended: false, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use("/images", express.static(path.join(__dirname, "public/images")))
server.use(cors())
server.use(express.json())
server.use(helmet())
server.use(morgan("dev"))


server.use('/', routes);



server.set('port', process.env.PORT || 3001);
server.listen(server.get('port'), () => console.log(`I'm in http://localhost:${server.get('port')}`));


