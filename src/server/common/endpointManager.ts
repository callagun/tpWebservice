import { Application } from 'express';

import { EndPoint } from "./endpoint";
import { WebController } from "./webController";


export class EndPointeManager {
    expressApp:Application ;
    
    app( _expressApp:Application ) {
        this.expressApp = _expressApp;

        return this;
    }

    activate( route:EndPoint ){
        console.log(" registering the route "+JSON.stringify(route));
        if(route.method === 'get')    return this.expressApp.get(route.path , route.handler);
        if(route.method === 'put')    return this.expressApp.put(route.path , route.handler);
        if(route.method === 'post')   return this.expressApp.post(route.path , route.handler);
        if(route.method === 'delete') return this.expressApp.delete(route.path , route.handler);   
    }

    activateAll( controllers:WebController[] ){
        controllers.forEach( controller => {
            controller.allRoutes().forEach( 
                route => { this.activate( route ) });
        });
    }
}

exports.routeManager = () => {return new EndPointeManager()};