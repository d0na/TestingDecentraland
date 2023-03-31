import { engine, executeTask, GltfContainer, Material, Transform } from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'

import { createCube } from './factory'
import { bounceScalingSystem, circularSystem, spawnerSystem } from './systems'

import { setupUi } from './ui'

// export all the functions required to make the scene work
export * from '@dcl/sdk'

// Defining behavior. See `src/systems.ts` file.
engine.addSystem(circularSystem)
engine.addSystem(spawnerSystem)
engine.addSystem(bounceScalingSystem)

// Initial function executed when scene is evaluated and after systems are created
executeTask(async function () {
  // Create my main cube and color it.
  const cube = createCube(8, 1, 8)
  Material.setPbrMaterial(cube, { albedoColor: Color4.create(2.0, 0.85, 0.42) })
})

setupUi()


// Testing new model Avocado
let avocado = engine.addEntity()

GltfContainer.create(avocado, {src: ("models/avocado.gltf")})

Transform.create(avocado, {
	  position:  Vector3.create(3, 1, 3),
	  scale: Vector3.create(10, 10, 10)
	})

