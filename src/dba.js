const { MongoClient, ServerApiVersion } = require('mongodb');
const user = require('./credentials.json')

const uri = `mongodb+srv://${user.user}:${user.password}@cluster0.4tfrhjm.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Exporting the function instead of calling it
async function getTemplates() {
    const topics = [];
    try {
        // Connect the client to the server
        await client.connect();
        // Create a client with preset db and collection
        const coordinateCollection = client
            .db("srdb")
            .collection("templates")

        const cursor = coordinateCollection.find({}, options = {
            
        });
        console.log("async");
        for await (const doc of cursor) {
            topics.push(doc)
        }

        console.log("\tReading Templates: \n")
        topics.forEach(t => { t.topics.forEach(to => console.log(" - ", to.name)) })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();

    }
    
    // return topics;
}

getTemplates().catch(console.dir)
module.exports = getTemplates;
