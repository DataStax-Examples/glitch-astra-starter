const { createAstraClient } = require("@astrajs/client");

let astraClient = null;
let collectionName = "colors";

const getAstraClient = async () => {
  if (astraClient === null) {
    astraClient = await createAstraClient(
      {
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
      },
      30000
    );
  }
  return astraClient;
};

const getColorsCollection = async () => {
  const client = await getAstraClient();
  return client.collections
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collectionName);
};

const getNamespace = async () => {
  const client = await getAstraClient();
  return client.collections.namespace(process.env.ASTRA_DB_KEYSPACE);
};

module.exports = {
  addColorHistory: async (color) => {
    const colors = await getColorsCollection();
    await colors.create({
      colorName: color.name,
      colorValue: color.value,
      timestamp: Date.now(),
    });
  },

  getColorHistory: async () => {
    const colors = await getColorsCollection();
    try {
      const res = await colors.find();
      return Object.keys(res).map((itemId) => ({
        id: itemId,
        name: res[itemId].colorName,
        value: res[itemId].colorValue,
        timestamp: new Date(res[itemId].timestamp).toString(),
      }));
    } catch (e) {
      return [];
    }
  },

  deleteColorHistory: async () => {
    const namespace = await getNamespace();
    return await namespace.deleteCollection(collectionName);
  },
};
