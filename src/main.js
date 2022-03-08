import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

function run() {
    loadData();
    //  main loop
}

run();


function loadData() {
    let gltfLoader = new GLTFLoader();

    let url = new URL( "../assets/models/cubeFish.glb", import.meta.url );
    let str = "" + url;
// console.log( "url:  " + str );

    gltfLoader.load( str, gltfFishReader, null, null );
}


function gltfFishReader( gltf ) {
    let fishModel = null;

    fishModel = gltf.scene;

    if( fishModel != null ) {
        console.log("fish loaded:  " + fishModel );
    } else {
        console.log("Load FAILED.  " ); 
    }
}
