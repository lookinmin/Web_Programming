"use strict";

const fs = require("fs").promises;
const Answer = require("../model/Answer.js");
const DataFile = require("./DataFile");

class MakeNew{
  constructor(body) {
    this.body = body;
  }
  async writeData(){
    console.log('makenew writedata');
    const data = this.body;
    console.log('makenew data', data);
    await DataFile.writeData(data);
  }
}

module.exports = MakeNew;