import * as THREE from 'three';
window.addEventListener('load', function () {
  init();
});

function init() {
  const renderer = new THREE.WebGLRenderer({
    // alpha: true,
    antialias: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
  camera.position.set(3, 4, 5);
  camera.lookAt(cube.position);

  renderer.render(scene, camera);
}
