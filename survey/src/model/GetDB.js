"use strict"

const ReadDB = require("./ReadDB");

class GetDB{
  constructor(body){
    this.body = body;
  }
  async getDB(){
    console.log('GetDB -> getDB');
    await ReadDB.readDB();
    await ReadDB.readDB2();
    const value = ReadDB.loadDB();
    const title = ReadDB.Title();
  }
}

module.exports = GetDB;