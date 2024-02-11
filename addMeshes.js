import {
    BoxGeometry,
    MeshBasicMaterial,
    MeshStandardMaterial,
    Mesh,
    SphereGeometry,
    TorusKnotGeometry,
    ConeGeometry,
    MeshDepthMaterial,
    MeshNormalMaterial,
    MeshMatcapMaterial,
    MeshLambertMaterial,
    MeshPhongMaterial,
    TextureLoader,
    MeshPhysicalMaterial
} from 'three'

const loader = new TextureLoader()

// export const addBoilerPlateMeshes = () => {
//     const box = new BoxGeometry(1, 1, 1)
//     const boxMaterial = new MeshBasicMaterial({ color: 0xff0000 })
//     const boxMesh = new Mesh(box, boxMaterial)
//     boxMesh.position.set(-2, 0, 0)
//     return boxMesh
// }

// export const addStandardMesh = () => {
//     const box = new BoxGeometry(1, 1, 1)
//     const boxMaterial = new MeshStandardMaterial({ color: 0x800080 })
//     const boxMesh = new Mesh(box, boxMaterial)
//     boxMesh.position.set(2, 0, 0)
//     return boxMesh
// }

// export const brickHouse = () => {    
//     const box = new BoxGeometry(12, 8, 8)
//     const boxMaterial = new MeshStandardMaterial({ color: 0x800080 })
//     const boxMesh = new Mesh(box, boxMaterial)
//     boxMesh.position.set(0, 0, 0)
//     return boxMesh
// }


// export const brickHouse = () => {
    
//     const color = loader.load('textures/Building_Facade_001_basecolor.jpg')
//     const displace = loader.load('textures/Building_Facade_001_basecolor.png')
//     const normal = loader.load('textures/Building_Facade_001_normal.jpg')
//     const roughness = loader.load('textures/Building_Facade_001_roughness.jpg')

//     const brickHouseGeometry = new BoxGeometry(0, 0, 0)
//     const brickHouseMaterial = new MeshPhysicalMaterial({
//         map:color,
//         displacementMap: displace,
//         normalMap: normal,
//         roughness: roughness,
//     })
//     const brickHouseMesh = new Mesh(brickHouseGeometry, brickHouseMaterial)
//     return brickHouseMesh
// }



export const star = () => {
    const color = loader.load('textures/Snow_002_COLOR.jpg')
    const displace = loader.load('textures/Snow_002_DISP.png')
    const normal = loader.load('textures/Snow_002_NORM.jpg')
    const roughness = loader.load('textures/Snow_002_ROUGH.jpg')

    const starShape = new TorusKnotGeometry (3.1932, 3.9204, 37, 10, 19, 5)
    const starMaterial = new MeshStandardMaterial( {
        map: color, 
        displacementMap: displace,
        normalMap: normal,
        roughnessMap: roughness,
    })
    const starMesh = new Mesh (starShape, starMaterial)
    starMesh.position.set(0, 11, 0)
    return starMesh
}

export const tree = () => {
    const treeShape = new ConeGeometry(9,18,9,22)
    const treeMaterial = new MeshStandardMaterial({ color: 0x800080 })
    const treeMesh = new Mesh(treeShape, treeMaterial)
    treeMesh.position.set(0, 0, 0)
    return treeMesh
}