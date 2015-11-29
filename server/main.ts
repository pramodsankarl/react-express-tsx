/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
import {IRoute, Express} from 'express';

let express:Express = require('express');
let app = express();
app.get('/', 
	(req, res) => res.render('./../app/index.ejs', {}))
	.use((<any>express).static(__dirname + '/../.tmp'))
	.listen(7777);