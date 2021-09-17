const fs = require("fs").promises;
const Answer = require("../model/Answer.js");
const mongoose = require("mongoose");

class ReadDB {

  static async loadDB(){
    const arr1 = await this.readDB();
    const arr2 = await this.readDB2();

    const final_str = this.Except_Q(arr1);
    const final_click = this.Except_Zero(arr2);

    const final = [            //배열더하기
      ...final_str,
      ...final_click
    ];

    return final;
  }

  static async Title(){
    const arr1 = await this.readDB();
    var result;
    result = this.Extract_Title(arr1);
  }

  static DBRead(){
    return Answer.findOne({ _id: "6140871c2f51ba0b346aaf9e" }).exec();
  }
  static async readDB(){
    const dataDB = await this.DBRead();
    console.log('dataDB', dataDB);
    var strDB = new Array();

    strDB.push(dataDB.title); //0
    strDB.push(dataDB.Q1);
    strDB.push(dataDB.L1);
    strDB.push(dataDB.R1);
    strDB.push(dataDB.Q2);
    strDB.push(dataDB.L2);
    strDB.push(dataDB.R2);
    strDB.push(dataDB.Q3);
    strDB.push(dataDB.L3);
    strDB.push(dataDB.R3);
    strDB.push(dataDB.Q4);
    strDB.push(dataDB.L4);
    strDB.push(dataDB.R4);
    strDB.push(dataDB.Q5);
    strDB.push(dataDB.L5);
    strDB.push(dataDB.R5);
    strDB.push(dataDB.Q6);
    strDB.push(dataDB.L6);
    strDB.push(dataDB.R6);
    strDB.push(dataDB.Q7);
    strDB.push(dataDB.L7);
    strDB.push(dataDB.R7);
    strDB.push(dataDB.Q8);
    strDB.push(dataDB.L8);
    strDB.push(dataDB.R8);
    strDB.push(dataDB.Q9);
    strDB.push(dataDB.L9);
    strDB.push(dataDB.R9);
    strDB.push(dataDB.Q10);
    strDB.push(dataDB.L10);
    strDB.push(dataDB.R10);
    strDB.push(dataDB.Q11);
    strDB.push(dataDB.L11);
    strDB.push(dataDB.R11);
    strDB.push(dataDB.Q12);
    strDB.push(dataDB.L12);
    strDB.push(dataDB.R12);
  
    return strDB;
  }

  static async readDB2(){
    const dataDB = await this.DBRead();
    console.log('dataDB', dataDB);
    var Click = new Array();

    Click.push(dataDB.a_1);
    Click.push(dataDB.b_1);
    Click.push(dataDB.a_2);
    Click.push(dataDB.b_2);
    Click.push(dataDB.a_3);
    Click.push(dataDB.b_3);
    Click.push(dataDB.a_4);
    Click.push(dataDB.b_4);
    Click.push(dataDB.a_5);
    Click.push(dataDB.b_5);
    Click.push(dataDB.a_6);
    Click.push(dataDB.b_6);
    Click.push(dataDB.a_7);
    Click.push(dataDB.b_7);
    Click.push(dataDB.a_8);
    Click.push(dataDB.b_8);
    Click.push(dataDB.a_9);
    Click.push(dataDB.b_9);
    Click.push(dataDB.a_10);
    Click.push(dataDB.b_10);
    Click.push(dataDB.a_11);
    Click.push(dataDB.b_11);
    Click.push(dataDB.a_12);
    Click.push(dataDB.b_12);

    return Click;
  }

  static Except_Q(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i] != "q"){
        result[i] = arr[i];
      }
    }
    return result;
  }

  static Except_Zero(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i] != "0"){
        result[i] = arr[i];
      }
    }
    return result;
  }

  static Extract_Title(arr){
    let title = arr[0];
    return title;
  }

  static Extract_Main(arr){
    let For_Main = [];

  }
}

module.exports = ReadDB;