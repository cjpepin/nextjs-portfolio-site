import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Unity, {UnityContext} from "react-unity-webgl"
const DoogleJump = () => {

    const unityContextDJ = new UnityContext({
        loaderUrl: "build/DJ/Build/DJ.loader.js",
        dataUrl: "build/DJ/Build/DJ.data",
        frameworkUrl: "build/DJ/Build/DJ.framework.js",
        codeUrl: "build/DJ/Build/DJ.wasm",
    });
    return (
        <div className="games">
            <p>Warning: Sound can be fairly loud. After pressing play, press escape -{'>'} help to lower the volume</p>
            <Unity className="unity" unityContext={unityContextDJ}/>
        </div>
        
    )
}

export default DoogleJump;