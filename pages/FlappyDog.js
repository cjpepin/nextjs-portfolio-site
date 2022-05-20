import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Unity, {UnityContext} from "react-unity-webgl"

const FlappyDog = () => {

    const unityContextFD = new UnityContext({
        loaderUrl: "build/FD/Build/FD.loader.js",
        dataUrl: "build/FD/Build/FD.data",
        frameworkUrl: "build/FD/Build/FD.framework.js",
        codeUrl: "build/FD/Build/FD.wasm",
    });
    return (
        <div className="games">
            <Unity className="unity" unityContext={unityContextFD}/>
        </div>
    )
}
export default FlappyDog;