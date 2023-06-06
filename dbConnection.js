const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

async function main() {
    //create a constant for the connection URI
    const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${dbPassword}@cluster0.0hvle9u.mongodb.net/`;
    const client = new MongoClient(uri);
    
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

