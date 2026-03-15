import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;

                // Change clothing colors to match site theme
                if (mesh.material) {
                  if (mesh.name === "BODY.SHIRT") { // The shirt mesh
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#8B4513");
                    mesh.material = newMat;
                  } else if (mesh.name === "Pant") {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#000000");
                    mesh.material = newMat;
                  } else if (mesh.name === "cap" || mesh.name === "Cap" || (mesh.name.toLowerCase().includes("cap") || mesh.name.toLowerCase().includes("hat"))) {
                     // Google Noogler hat colors (Blue, Red, Yellow, Green)
                     const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                     
                     if (mesh.name.toLowerCase().includes("brim") || mesh.name.toLowerCase().includes("visor")) {
                        newMat.color = new THREE.Color("#0F9D58"); // Green brim
                     } else if (mesh.name.toLowerCase().includes("top") || mesh.name.toLowerCase().includes("propeller")) {
                        newMat.color = new THREE.Color("#DB4437"); // Red
                     } else if (mesh.name.toLowerCase().includes("button") || mesh.name.toLowerCase().includes("base")) {
                        newMat.color = new THREE.Color("#F4B400"); // Yellow
                     } else {
                        // Default hat body
                        newMat.color = new THREE.Color("#4285F4"); // Blue base (Google Blue)
                     }
                     mesh.material = newMat;
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            // Monitor scale is handled by GsapScroll.ts animations

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
