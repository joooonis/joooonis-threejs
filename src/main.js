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
  const material = new THREE.MeshStandardMaterial({
    // color: new THREE.Color('skyblue'),
    // transparent: true, // 투명하게
    // opacity: 0.5, // 투명도
    // visible: false, // 보이지 않게
    // wireframe: true, // 선만 보이게
    // side: THREE.DoubleSide, // 양면 보이게
  });

  material.color = new THREE.Color('0xff0000');
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
  camera.position.set(3, 4, 5);
  camera.lookAt(cube.position);

  // 조명 생성
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(-1, 2, 3);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  ambientLight.position.set(3, 2, 1);
  scene.add(ambientLight);

  const clock = new THREE.Clock();

  // 렌더링
  function render() {
    cube.rotation.x += clock.getDelta();
    renderer.render(scene, camera);
    requestAnimationFrame(render); // 반복 호출
  }

  render();

  function handleResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight; // 카메라의 비율을 다시 설정
    camera.updateProjectionMatrix(); // 카메라의 속성이 변경되었음을 알려줌
    renderer.render(scene, camera);
  }
  window.addEventListener('resize', handleResize);
}
