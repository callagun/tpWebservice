import { DemoServer } from "./server/common/server";
import { controllers } from "./controllers";

 new DemoServer( )
     .cors()
    //  .bootstrap(bootstrap)
     .controllers(controllers)
     .listen( 3333 )
     .start();
