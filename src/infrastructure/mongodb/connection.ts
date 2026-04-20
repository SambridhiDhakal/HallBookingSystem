import { connect as connection } from 'mongoose';
import {config} from "../../config/config"

const mongoDb = config.mongo.url;

try {
  connection(mongoDb).then(() => {
    console.log('Connected to database successfully');
  })
} catch (err) {
  console.log('Disconnect');
}

