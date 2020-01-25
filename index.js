import jsartoolkit5 from "./jsartoolkit5/build/artoolkit.min.js";


console.log('we are here !');
console.log(jsartoolkit5());
const camera_para = jsartoolkit5.ARCameraParam('./jsartoolkit5/examples/Data/camera_para.dat');
var ar = new jsartoolkit5.ARController(320, 240, camera_para);
