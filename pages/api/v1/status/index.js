import database from "infra/database.js";
import { Connection } from "pg";
import { version } from "react";

async function status(req, res) {
  const databesename = process.env.POSTGRES_DB;

  const updatedAt = new Date().toISOString();

  const databaseVersion = await database.query("SHOW server_version;");
  const versionDatabase = databaseVersion.rows[0].server_version;

  const openedConnections = await database.query({
    text: "SELECT COUNT(*) ::INT FROM pg_stat_activity WHERE datname = $1;",
    values: [databesename],
  });
  const connections = openedConnections.rows[0].count;

  const maxConnectionsResult = await database.query("SHOW max_connections ;");
  const maxConnections = maxConnectionsResult.rows[0].max_connections;

  res.status(200).json({
    updated_at: updatedAt,
    depedencies: {
      database: {
        version: versionDatabase,
        opened_connections: connections,
        max_connections: parseInt(maxConnections),
      },
    },
  });
}
export default status;
