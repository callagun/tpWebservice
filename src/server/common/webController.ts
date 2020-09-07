import { EndPoint } from "./endpoint";

export class WebController {
    private baseUrl = '';
    private routes: EndPoint[] = [];
    
    allRoutes( ){  return this.routes;  }

    get( path:string , handler:Function ): WebController { 
        this.addRoute( 'get' , path , handler); 
        
        return this;
    }
    
    post( path:string , handler:Function ): WebController { 
        this.addRoute( 'post' , path , handler); 
        
        return this;
    }
    
    put( path:string , handler:Function ): WebController { 
        this.addRoute( 'put' , path , handler); 
        
        return this;
    }
    
    onDelete( route:EndPoint ): WebController { 
        //this.addRoute( 'delete' , route);
          
        return this;
     }

    listen( path:string, handler: Function): WebController {
        this.baseUrl = path;
        this.get( path , handler);
        
        return this;
    }
    

    addRoute( method:string , path: string, handler:Function ): EndPoint {
        const route = {
            method: method,
            path: this.baseUrl + path,
            handler:handler
        } as EndPoint;
        
        console.log(" adding a new route for "+method+" on url "+route.path+" - "+JSON.stringify(route) );

        this.routes.push(route);

        return route;
    }

}
