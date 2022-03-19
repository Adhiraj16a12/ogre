
AFRAME.registerComponent("enemy-fireballs", {
    init: function () {        
        setInterval(this.shootEnemyMonster, 2000)
    },
    shootEnemyMonster: function () {
        var scene = document.querySelector("#scene");

        var enemyMonster = document.querySelectorAll(".enemy");   
            
        for (var i = 0; i < enemyMonster.length; i++) {

       
        var bullet = document.createElement("a-entity");

        bullet.setAttribute("class","bullet")
        bullet.setAttribute("gltf-model", "./models/bullet_set/scene.gltf");
        bullet.setAttribute("dynamic-body", { mass: 0 });
     
        var pos=enemyMonster[i].getAttribute("position")

        bullet.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
        });
        bullet.setAttribute("scale", {
            x: 0.05,
            y: 0.05,
            z: 0.05,
        });

        scene.appendChild(bullet);      

        var position1 = new THREE.Vector3();
        var position2 = new THREE.Vector3();

};
