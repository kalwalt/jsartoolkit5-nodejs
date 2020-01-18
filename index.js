const jsartoolkit5 = require("./jsartoolkit5/js/artoolkit.api.js");


console.log('we are here !');
console.log(jsartoolkit5);
var camera_para = new jsartoolkit5.ARCameraParam('./jsartoolkit5/examples/Data/camera_para.dat');
var ar = new jsartoolkit5.ARController(320, 240, camera_para);
