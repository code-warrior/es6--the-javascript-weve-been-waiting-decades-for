// Array destructuring: Destructured parameters

// function getVeganBurger (type = "Vegetable", options) {
//     options = options || {};
//
//     let bread = options.bread || "Romaine",
//         lettuce = options.lettuce || "whole wheat";
//
//     console.log(`${type}-based vegan burger on ${bread} bread with ${lettuce} lettuce ordered.`);
// }

function getVeganBurger (type = "Vegan", { bread, lettuce }) {
    console.log(`${type}-based vegan burger on ${bread} bread with ${lettuce} lettuce ordered.`);
}

getVeganBurger("Vegan", { bread: "white", lettuce: "iceberg"});
