import mongoose from 'mongoose';

const connection = {};

// CONNECTING TO MONGODB
async function connect() {
  if (connection.isConnected) {
    console.log('Already Connected!');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('Use Previous Connection!');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log('New Connection');
  connection.isConnected = db.connections[0].readyState;
}

//DISCONNECTING TO MONGODB
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('Not Disconnected!');
    }
  }
}

//CONVERTING DOC ID IN EACH COLLECTIONS TO OBJECT
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;
