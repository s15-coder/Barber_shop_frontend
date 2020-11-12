import "../../css/index.css";
import "../../css/normalize.css";
import "../../css/background.css";
import {isMobile} from "../utils/utils";
if(isMobile){
    window.location.replace("./html/login_movil.html");
    console.log('IsMobile');
}else{
    window.location.replace("./html/login_desktop.html");
        console.log('isDesktop');
}
  