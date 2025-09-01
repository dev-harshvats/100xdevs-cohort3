import pg from "pg";
const { Client } = pg;

const pgClient = new Client({
    connectionString: 'postgresql://neondb_owner:npg_2IGSXn9vYOBM@ep-holy-leaf-ade1wvet-pooler.c-2.us-east-1.aws.neon.tech/tutorials',
    ssl: {
        rejectUnauthorized: false
    }
});

async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response.rows);
}

main();
