import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Unity, {UnityContext} from "react-unity-webgl"
import NavBar from "./Navbar";
const MartianDefense = () => {
    console.log("running")
    const unityContextMD = new UnityContext({
        loaderUrl: "./MartianDefenseGame/Build/MartianDefenseWebGL_v1.0.4.loader.js",
        dataUrl: "MartianDefenseGame/Build/MartianDefenseWebGL_v1.0.4.data",
        frameworkUrl: "MartianDefenseGame/Build/MartianDefenseWebGL_v1.0.4.framework.js",
        codeUrl: "MartianDefenseGame/Build/MartianDefenseWebGL_v1.0.4.wasm",
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