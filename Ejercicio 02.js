
// FUENTES UTILIZADAS PARA CONSULTAR SOBRE EL METODO TRANSLATE 
// * https://threejs.org/docs/#api/en/core/Object3D.translateY
// * https://www.it-swarm-es.com/es/javascript/como-mover-un-objeto-hacia-adelante-en-three.js/1066760183/


// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();
var dim =  x,y,z;
var dim = new dim (10,10,10);
var angulo = Math.PI/2;

function cubo(dim, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(dim);
    var cubeMaterial;
    switch(material){
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // add the cube to the scene
    scene.add(cube);
    return(cube);
}
function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(10);
    scene.add(axes);

    Cubo = [];   // Definir un array unidimensional
    Cubo.push(cubo(dim, 0x000EFF, 'Basic', false)); 
    Cubo.push(cubo(dim, 0x1CFF00, 'Phong', false)); 
    Cubo.push(cubo(dim, 0xFF4B00, 'Lambert', false)); 


    Cubo[0].position.set(0, 0, 0);
    scene.add(Cubo[0]);
    Cubo[0].translateX ( 2.0 ); // movimiento  en el eje X
    Cubo[2].rotationX = angulo;
    scene.add(Cubo[0]);


    Cubo[1].position.set(0, 0, 0);
    scene.add(Cubo[1]);
     Cubo[1].translateY ( 2.0 ); // movimiento e en el eje Y
     Cubo[2].rotationY = angulo;
    scene.add(Cubo[1]);

    Cubo[2].position.set(0, 0, 0);
    scene.add(Cubo[2]);
     Cubo[2].translateZ ( 2.0 ); // movimiento  en el eje Z
     Cubo[2].rotationZ = angulo;
     
    scene.add(Cubo[2]);




    //Luz (requerida para el material MeshLambertMaterial)
    light = new THREE.PointLight(0xFFFF00); //  Luz proveniente de un punto en el espacio, 
                                            //  semejante al sol.
    light.position.set( -30, 70, 80 );      //  Localización de la luz. (x, y, z).
    scene.add( light ); 

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}

