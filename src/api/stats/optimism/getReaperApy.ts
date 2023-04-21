const pools = require('../../../data/optimism/reaperPools.json');

async function getReaperApy() {
  const output = pools.reduce((acc, pool) => {
    return { ...acc, [pool.id]: 0.1 };
  }, {});

  return Promise.resolve(output);
}

export { getReaperApy };
