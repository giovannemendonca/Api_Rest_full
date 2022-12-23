import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    logger.info("Conectou ao banco de dados");
  } catch (error) {
    logger.error("Não foi Possivel Conectar");
    logger.error(error);
    process.exit(1)
  }
}

export default connect;
