//3 THINGS THAT WE NEED: SCENE, CAMERA, AND RENDER

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    75, //Field of View
    window.innerWidth / window.innerHeight, //Aspect Ratio
    0.1, //Near
    1000 //Far
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

//Base
let baseGeometry = new THREE.BoxGeometry( 600, 400, 35 );
let baseMaterial = new THREE.MeshLambertMaterial( {color: "green"} );
let base = new THREE.Mesh( baseGeometry, baseMaterial );
base.castShadow = false;
base.receiveShadow = true;
scene.add( base );

//HomeBaseRoof
let homeBaseGeometry = new THREE.BoxGeometry( 300, 300, 20 );
let homeBaseMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeBase = new THREE.Mesh( homeBaseGeometry, homeBaseMaterial );
homeBase.castShadow = false;
homeBase.receiveShadow = true;
scene.add( homeBase );

let homeRoofGeometry = new THREE.BoxGeometry( 300, 300, 20 );
let homeRoofMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeRoof = new THREE.Mesh( homeRoofGeometry, homeRoofMaterial );
homeRoof.castShadow = true;
homeRoof.receiveShadow = false;
scene.add( homeRoof );

//HomeRoomOne

let homeOneLeftGeometry = new THREE.BoxGeometry( 230, 295, 10 );
let homeOneLeftMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeOneLeft = new THREE.Mesh( homeOneLeftGeometry, homeOneLeftMaterial );
homeOneLeft.castShadow = false;
homeOneLeft.receiveShadow = true;
scene.add( homeOneLeft );

let homeOneRightGeometry = new THREE.BoxGeometry( 230, 295, 10 );
let homeOneRightMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeOneRight = new THREE.Mesh( homeOneRightGeometry, homeOneRightMaterial );
homeOneRight.castShadow = false;
homeOneRight.receiveShadow = true;
scene.add( homeOneRight );

let homeOneBackGeometry = new THREE.BoxGeometry( 245, 295, 10 );
let homeOneBackMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeOneBack = new THREE.Mesh( homeOneBackGeometry, homeOneBackMaterial );
homeOneBack.castShadow = false;
homeOneBack.receiveShadow = true;
scene.add( homeOneBack );

let homeOneFrontSouthGeometry = new THREE.BoxGeometry( 228, 85, 10 );
let homeOneFrontSouthMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeOneFrontSouth = new THREE.Mesh( homeOneFrontSouthGeometry, homeOneFrontSouthMaterial );
homeOneFrontSouth.castShadow = false;
homeOneFrontSouth.receiveShadow = true;
scene.add( homeOneFrontSouth );

let homeOneFrontNorthGeometry = new THREE.BoxGeometry( 228, 100, 10 );
let homeOneFrontNorthMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeOneFrontNorth = new THREE.Mesh( homeOneFrontNorthGeometry, homeOneFrontNorthMaterial );
homeOneFrontNorth.castShadow = false;
homeOneFrontNorth.receiveShadow = true;
scene.add( homeOneFrontNorth );

let homeOneFrontWestGeometry = new THREE.BoxGeometry( 20, 100, 10 );
let homeOneFrontWestMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeOneFrontWest = new THREE.Mesh( homeOneFrontWestGeometry, homeOneFrontWestMaterial );
homeOneFrontWest.castShadow = false;
homeOneFrontWest.receiveShadow = true;
scene.add( homeOneFrontWest );

let homeOneFrontEastGeometry = new THREE.BoxGeometry( 20, 100, 10 );
let homeOneFrontEastMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeOneFrontEast = new THREE.Mesh( homeOneFrontEastGeometry, homeOneFrontEastMaterial );
homeOneFrontEast.castShadow = false;
homeOneFrontEast.receiveShadow = true;
scene.add( homeOneFrontEast );

let homeOneFrontWindowGeometry = new THREE.BoxGeometry( 190, 100, 5 );
let homeOneFrontWindowMaterial = new THREE.MeshPhongMaterial( {color: "black"} );
let homeOneFrontWindow = new THREE.Mesh( homeOneFrontWindowGeometry, homeOneFrontWindowMaterial );
homeOneFrontWindow.castShadow = false;
homeOneFrontWindow.receiveShadow = true;
scene.add( homeOneFrontWindow );

let homeOneFrontCoverGeometry = new THREE.BoxGeometry( 20, 230, 8 );
let homeOneFrontCoverMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let homeOneFrontCover = new THREE.Mesh( homeOneFrontCoverGeometry, homeOneFrontCoverMaterial );
homeOneFrontCover.castShadow = true;
homeOneFrontCover.receiveShadow = true;
scene.add( homeOneFrontCover );

//Main
let mainGeometry = new THREE.BoxGeometry( 260, 220, 150 );
let mainMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let main = new THREE.Mesh( mainGeometry, mainMaterial );
main.castShadow = false;
main.receiveShadow = true;
scene.add( main );

let floorGeometry = new THREE.BoxGeometry( 260, 5, 200 );
let floorMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.castShadow = false;
floor.receiveShadow = true;
scene.add( floor );

//Misc
let doorGeometry = new THREE.BoxGeometry( 60, 150, 5 );
let doorMaterial = new THREE.MeshLambertMaterial( {color: 0x4f2e0b} );
let door = new THREE.Mesh( doorGeometry, doorMaterial );
door.castShadow = false;
door.receiveShadow = true;
scene.add( door );

let doorWallGeometry = new THREE.BoxGeometry( 150, 220, 5 );
let doorWallMaterial = new THREE.MeshLambertMaterial( {color: 0xad1919} );
let doorWall = new THREE.Mesh( doorWallGeometry, doorWallMaterial );
doorWall.castShadow = false;
doorWall.receiveShadow = true;
scene.add( doorWall );

let miscWallGeometry = new THREE.BoxGeometry( 5, 220, 80 );
let miscWallMaterial = new THREE.MeshLambertMaterial( {color: 0xad1919} );
let miscWall = new THREE.Mesh( miscWallGeometry, miscWallMaterial );
miscWall.castShadow = false;
miscWall.receiveShadow = true;
scene.add( miscWall );

let doorCoverGeometry = new THREE.BoxGeometry( 20, 75, 8 );
let doorCoverMaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let doorCover = new THREE.Mesh( doorCoverGeometry, doorCoverMaterial );
doorCover.castShadow = true;
doorCover.receiveShadow = true;
scene.add( doorCover );

let fenceLeftGeometry = new THREE.BoxGeometry( 5, 80, 5 );
let fenceLeftMaterial = new THREE.MeshLambertMaterial( {color: "brown"} );
let fenceLeft = new THREE.Mesh( fenceLeftGeometry, fenceLeftMaterial );
fenceLeft.castShadow = true;
fenceLeft.receiveShadow = true;
scene.add( fenceLeft );

let fenceMidGeometry = new THREE.BoxGeometry( 5, 80, 5 );
let fenceMidMaterial = new THREE.MeshLambertMaterial( {color: "brown"} );
let fenceMid = new THREE.Mesh( fenceMidGeometry, fenceMidMaterial );
fenceMid.castShadow = true;
fenceMid.receiveShadow = true;
scene.add( fenceMid );

let fenceTopGeometry = new THREE.BoxGeometry( 245, 5, 5 );
let fenceTopMaterial = new THREE.MeshLambertMaterial( {color: "brown"} );
let fenceTop = new THREE.Mesh( fenceTopGeometry, fenceTopMaterial );
fenceTop.castShadow = true;
fenceTop.receiveShadow = true;
scene.add( fenceTop );

let fenceOneGeometry = new THREE.BoxGeometry( 245, 2.5, 2.5 );
let fenceOneMaterial = new THREE.MeshLambertMaterial( {color: "brown"} );
let fenceOne = new THREE.Mesh( fenceOneGeometry, fenceOneMaterial );
fenceOne.castShadow = true;
fenceOne.receiveShadow = true;
scene.add( fenceOne );

let fenceTwoGeometry = new THREE.BoxGeometry( 245, 2.5, 2.5 );
let fenceTwoMaterial = new THREE.MeshLambertMaterial( {color: "brown"} );
let fenceTwo = new THREE.Mesh( fenceTwoGeometry, fenceTwoMaterial );
fenceTwo.castShadow = true;
fenceTwo.receiveShadow = true;
scene.add( fenceTwo );

let fenceThreeGeometry = new THREE.BoxGeometry( 245, 2.5, 2.5 );
let fenceThreeMaterial = new THREE.MeshLambertMaterial( {color: "brown"} );
let fenceThree = new THREE.Mesh( fenceThreeGeometry, fenceThreeMaterial );
fenceThree.castShadow = true;
fenceThree.receiveShadow = true;
scene.add( fenceThree );

let fenceFourGeometry = new THREE.BoxGeometry( 245, 2.5, 2.5 );
let fenceFourMaterial = new THREE.MeshLambertMaterial( {color: "brown"} );
let fenceFour = new THREE.Mesh( fenceFourGeometry, fenceFourMaterial );
fenceFour.castShadow = true;
fenceFour.receiveShadow = true;
scene.add( fenceFour );

let fenceFiveGeometry = new THREE.BoxGeometry( 245, 2.5, 2.5 );
let fenceFiveMaterial = new THREE.MeshLambertMaterial( {color: "brown"} );
let fenceFive = new THREE.Mesh( fenceFiveGeometry, fenceFiveMaterial );
fenceFive.castShadow = true;
fenceFive.receiveShadow = true;
scene.add( fenceFive );

camera.position.z = 500;

let spotLightOne = new THREE.SpotLight( 0xffffff, 1.2 );
spotLightOne.position.set( 250, 400, 105 );
spotLightOne.castShadow = true;

let SpotLightOneHelper = new THREE.SpotLightHelper( spotLightOne );
scene.add( SpotLightOneHelper );

spotLightOne.castShadow = true;

spotLightOne.shadow.mapSize.width = 512;
spotLightOne.shadow.mapSize.height = 512;

spotLightOne.shadow.camera.near = 0.5;
spotLightOne.shadow.camera.far = 500;
spotLightOne.shadow.camera.focus = 1;

let helper = new THREE.CameraHelper( spotLightOne.shadow.camera)

scene.add( spotLightOne );

let ambLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.6 );
scene.add( ambLight );

let controls = new THREE.OrbitControls (camera, renderer.domElement);
animate();

function animate(){
    requestAnimationFrame(animate);

    //Base
    base.rotation.x = 4.71;
    base.position.y = -125;
    
    //HomeBase
    homeBase.rotation.y = 29.85;
    homeBase.position.x = -280;
    homeBase.position.y = 42;
    homeBase.position.z = -40;

    homeRoof.rotation.x = 14.1375;
    homeRoof.position.x = -121.5;
    homeRoof.position.y = 182;
    homeRoof.position.z = -40;

    //HomeRoomOne
    homeOneLeft.rotation.y = 29.85;
    homeOneLeft.position.x = -235;
    homeOneLeft.position.y = 30;
    homeOneLeft.position.z = -55;

    homeOneRight.rotation.y = 29.85;
    homeOneRight.position.x = 0;
    homeOneRight.position.y = 30;
    homeOneRight.position.z = -55;

    homeOneBack.position.x = -118.01;
    homeOneBack.position.y = 30;  
    homeOneBack.position.z = -175;

    homeOneFrontSouth.position.x = -118.01;
    homeOneFrontSouth.position.y = -65;
    homeOneFrontSouth.position.z = 55.05;

    homeOneFrontNorth.position.x = -118.01;
    homeOneFrontNorth.position.y = 125;
    homeOneFrontNorth.position.z = 55.05;

    homeOneFrontWest.position.x = -220;
    homeOneFrontWest.position.y = 27;
    homeOneFrontWest.position.z = 55.05;

    homeOneFrontEast.position.x = -10;
    homeOneFrontEast.position.y = 27;
    homeOneFrontEast.position.z = 55.05;

    homeOneFrontWindow.position.x = -115;
    homeOneFrontWindow.position.y = 26;
    homeOneFrontWindow.position.z = 55.05;

    homeOneFrontCover.rotation.x = 20.5;
    homeOneFrontCover.rotation.z = 20.43;
    homeOneFrontCover.position.x = -115;
    homeOneFrontCover.position.y = 80;
    homeOneFrontCover.position.z = 70;

    //Main
    main.position.x = 130;
    main.position.z = -105;

    floor.position.x = 130;
    floor.position.y = -105;
    floor.position.z = -40;

    //Misc
    door.position.x = 45;
    door.position.y = -20;
    door.position.z = -27;

    doorWall.position.x = 80;
    doorWall.position.z = -28.5;

    doorCover.rotation.x = 20.5;
    doorCover.rotation.z = 20.43;
    doorCover.position.x = 45;
    doorCover.position.y = 50;
    doorCover.position.z = -15;

    fenceLeft.position.x = 255;
    fenceLeft.position.y = -65;
    fenceLeft.position.z = 55;

    fenceMid.position.x = 135;
    fenceMid.position.y = -65;
    fenceMid.position.z = 55;

    fenceTop.position.x = 135;
    fenceTop.position.y = -27;
    fenceTop.position.z = 55;

    fenceOne.position.x = 135;
    fenceOne.position.y = -40;
    fenceOne.position.z = 55;

    fenceTwo.position.x = 135;
    fenceTwo.position.y = -53;
    fenceTwo.position.z = 55;

    fenceThree.position.x = 135;
    fenceThree.position.y = -67;
    fenceThree.position.z = 55;

    fenceFour.position.x = 135;
    fenceFour.position.y = -80;
    fenceFour.position.z = 55;

    fenceFive.position.x = 135;
    fenceFive.position.y = -93;
    fenceFive.position.z = 55;

    miscWall.position.x = 262;
    miscWall.position.z = -105;

    renderer.render(scene, camera);
}
animate();