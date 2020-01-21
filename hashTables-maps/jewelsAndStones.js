const stones = 'wofjez'

const areMyStonesJewels = function(stones) {

  const jewels = 'wpfjefjiwefj'

  const jewelsObj = {};
  const stonesThatAreJewels = [];

  for (let i = 0; i < jewels.length; i++) {
    if (!jewelsObj[jewels[i]]) {
      jewelsObj[jewels[i]] = jewels[i];
    }
  }

  for (let i = 0; i < stones.length; i++) {
    if (jewelsObj[stones[i]]) {
      stonesThatAreJewels.push(stones[i]);
    }
  }

  return stonesThatAreJewels;
}

console.log(areMyStonesJewels(stones));