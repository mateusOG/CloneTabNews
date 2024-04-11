import database from "../../../../infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1+1;");
  console.log(result.rows);
  res.status(200).json({ chave: "A B C D" });
}

export default status;
