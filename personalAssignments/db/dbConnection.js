async function main(){
    const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
    const dbUsername = encodeURIComponent(process.env.DB_USERNAME);
    const URI = `mongodb+srv://${dbUsername}:${dbPassword}@${process.env.DB_CLUSTER}`;
    const client = new MongoClient(URI);
try{
    await client.connect();
    await listDatabases(client);
}catch(e){
    console.error(e);
}finally {
    await client.close();
}
}

async function listDatabases(client){
    databaseList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databaseList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);
