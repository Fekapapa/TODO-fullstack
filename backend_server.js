'use strict'

var BackendServer = (function() {

    function init() {
        const mysql = require('mysql');
        const express = require('express');
        const bodyParser = require('body-parser');
        const app = express();

        app.use(bodyParser.json());

        app.use('/assets', express.static('assets'))

        var conn = mysql.createConnection({
            host: "localhost",
            user: "'Fekapapa'",
            password: "1q2w3ezv8ta4",
            database: "todo"
        });

        app.get('/', function(req, res) {
            res.sendFile(__dirname + '/TODO.html');
        });

        app.listen(3000, function () {
            console.log('server running');
        });

        conn.connect(function(err){
            if(err){
                console.log("Error connecting to Db");
            };
            console.log("Connection established");
        });

        getTodoData(app, conn);
        postTodoData(app, conn);
        postTodoDataDelete(app, conn);
        putTodoReady(app, conn);
        putTodoReadyUncheck(app, conn);
    }

    function getTodoData(app, conn) {
        app.get('/todo_data_get', function(req, res) {
            conn.query('SELECT * FROM todo_data', function(err,rows){
                if(err){
                    console.log("Error connecting to Db");
                    console.log(err);
                }else {
                    console.log("Data received from Db:\n");
                    console.log(rows);
                };
            res.send(rows);
            });
        });
    }

    function postTodoData(app, conn) {
        app.post ('/todo_data_post', function(req, res) {
            var query = 'INSERT INTO todo_data (title, status) VALUES ('
             + req.body.title + ', ' + 0 + ')';
            console.log(query);
            conn.query(query), function(err,rows){
            };
        });
    }

    function postTodoDataDelete(app, conn) {
        app.post ('/todo_data_delete', function(req, res) {
            var query = 'DELETE FROM todo_data WHERE title = "'
             + req.body.title + '"';
            conn.query(query), function(err,rows){
            };
        });
    }

    function putTodoReady(app, conn) {
        app.put ('/todo_ready_check', function(req, res) {
            var query = 'UPDATE todo_data SET status=1 WHERE title = ' + '"' + req.body.title + '"';
            console.log(query);
            conn.query(query), function(err,rows){
            };
        });
    }

    function putTodoReadyUncheck(app, conn) {
        app.put ('/todo_ready_uncheck', function(req, res) {
            var query = 'UPDATE todo_data SET favorite=0 WHERE title = ' + '"' + req.body.title + '"';
            console.log(query);
            conn.query(query), function(err,rows){
            };
        });
    }

    return {
        init: init
    }

})();

BackendServer.init();
