import express = require("express")
import bodyParser = require('body-parser');

import { Application } from 'express';
import { EndPointeManager } from './endpointManager';
import { createConnection } from "typeorm";

/**
 * first try of an bootstrap like server implementation
 * It controlls the application life cicle
 */
export class DemoServer {

    expressApp:Application  ;
    port;
    routerManager;
    
    constructor( ) {
        this.expressApp = express();
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(bodyParser.json());
        createConnection().then(async connection => {
                console.log("Starting the database connection");
            }).catch(error => {
                 console.log(error)
            });
        this.routerManager = new EndPointeManager()
                            .app(this.expressApp);

        return this;
    }

    cors() {

       return this;
    }

    controllers( controllers ) {
        this.routerManager.activateAll( controllers );

        return this;
    }

    listen( port ){
        this.port = port;
    
        return this;
    }

    start(){
        this.expressApp.listen( this.port , () => {console.log("server running on port "+this.port)} );
       
        return this;
    }

}