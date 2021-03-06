const express = require('express');
const apiRouter = express.Router();
const employeesRouter = require('./employees.js');
const timesheetsRouter = require('./timesheets.js');
const menusRouter = require('./menus.js');
const menuitemsRouter = require('./menu-items.js');

apiRouter.use('/employees', employeesRouter);
apiRouter.use('timesheets', timesheetsRouter);
apiRouter.use('/menus', menusRouter);
apiRouter.use('/menu-items', menuitemsRouter);

module.exports = apiRouter;
