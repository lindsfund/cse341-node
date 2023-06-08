const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

async function main() {
    //create a constant for the connection URI
    const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
    const dbUsername = encodeURIComponent(process.env.DB_USERNAME);
    const URI = `mongodb+srv://${dbUsername}:${dbPassword}@${process.env.DB_CLUSTER}`;
    const client = new MongoClient(URI);
    
    try{
        //connect to cluster
        await client.connect();

        //make the DB calls
        await listDatabases(client);
    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }
};

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);

