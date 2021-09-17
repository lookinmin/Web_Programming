"use strict"

const DataFile = require("./DataFile");

class Data {
  constructor(body) {
    this.body = body;
  }
  async per_arrayRead(){
    const data =  await DataFile.per_arrayRead();
    return data;
  }
  async AddData() {
    const data = this.body;
    await DataFile.SaveData(data);
  }

}
module.exports = Data;