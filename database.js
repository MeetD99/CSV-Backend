import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Database } from 'sqlite';

const initializeDatabase = async () => {
    const db = await open({
      filename: './data.db',
      driver: sqlite3.Database
    });
  
    await db.exec(`
      CREATE TABLE IF NOT EXISTS prices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key TEXT UNIQUE,
        value TEXT
      )
    `);
  
    return db;
  };
  
  export default initializeDatabase;