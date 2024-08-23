const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect(); // Connect to the MongoDB server
        console.log("Connected successfully to MongoDB");

        const database = client.db('myDatabase');
        const collection = database.collection('myCollection');

        // Example operation: Insert a document
        const doc = { name: "Sample", age: 25, city: "New York" };
        const result = await collection.insertOne(doc);
        console.log(`Document inserted with _id: ${result.insertedId}`);
    } finally {
        await client.close(); // Close the connection
    }
}

run().catch(console.dir);
