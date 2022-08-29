import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Unity, {UnityContext} from "react-unity-webgl"
import NavBar from "./Navbar";
const MartianDefense = () => {

    const unityContextMD = new UnityContext({
        loaderUrl: "./MartianDefenseWebGL_v1.0.0/Build/MartianDefenseWebGL_v1.0.0.loader.js",
        dataUrl: "MartianDefenseWebGL_v1.0.0/Build/MartianDefenseWebGL_v1.0.0.data",
        frameworkUrl: "MartianDefenseWebGL_v1.0.0/Build/MartianDefenseWebGL_v1.0.0.framework.js",
        codeUrl: "MartianDefenseWebGL_v1.0.0/Build/MartianDefenseWebGL_v1.0.0.wasm",
    });
    return (
        <>
            <NavBar />
            <div className="games">
                <p>Warning: Sound can be fairly loud. After pressing play, press escape -{'>'} help to lower the volume</p>
                <Unity className="unity" unityContext={unityContextMD}/>
            </div>
        </>
        
        
    )
}

export default MartianDefense;