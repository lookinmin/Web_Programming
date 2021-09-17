"use strict";

const fs = require("fs").promises;
const Answer = require("../model/Answer.js");
const mongoose = require("mongoose");

// Answer = new mongoose.Model("newdata1", answerSchema);

class DataFile {
  static async SaveData(ans) {
    const ansValue = Object.values(ans); //클릭한 값
    const KeyArr1 = this.keyArray1();
    const keyArr2 = this.KeyArray2(); //Answer.js key값 저장 -> 이름 맞춰서 개수 증가
    const readDB = await this.ReadDB(); //몽고db 데이터 리턴
    // console.log("readDb: ",readDB);
    const final = this.SaveToArray(readDB); //db에서 받은 value값 배열에 저장
    const String_Arr = this.StringDB(final[0]);
    const Number_Arr = this.NumberDB(final[1]);
    // console.log('numArr', Number_Arr);

    const calDB = this.CalDB(keyArr2, Number_Arr, ansValue); //클릭한 값과 db값 저장한 배열 비교
    this.writeDB(calDB); //db에 새로운 데이터 업데이트           //calDB + stringDB해야함
    // console.log('calDb', calDB);
    const final_arr = this.calc_percent(calDB);       //계산한 값중에 0 제거
    this.writeFile(final_arr);
  }

  static keyArray1() {
    var keyArr1 = ["title", "Q1", "L1", "R1", "Q2", "L2", "R2", "Q3", "L3", "R3", "Q4", "L4", "R4",
      "Q5", "L5", "R5", "Q6", "L6", "R6", "Q7", "L7", "R7", "Q8", "L8", "R8", "Q9", "L9", "R9", "Q10", "L10", "R10",
      "Q11", "L11", "R11", "Q12", "L12", "R12"];
    return keyArr1;

  }

  static KeyArray2() {      //클릭한 number만
    var keyArr2 = ["a_1", "b_1", "a_2", "b_2", "a_3", "b_3", "a_4", "b_4",
      "a_5", "b_5", "a_6", "b_6", "a_7", "b_7", "a_8", "b_8", "a_9",
      "b_9", "a_10", "b_10", "a_11", "b_11", "a_12", "b_12"];
    return keyArr2;
  }

  static ReadDB() {        //클릭한 횟수 리턴
    return Answer.findOne({ _id: "611d106587787a37e1d17ec6" }).exec();
    //몽고db 데이터 리턴
  }

  static SaveToArray(dataDB) {
    var arrDB = new Array();
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

    arrDB.push(dataDB.a_1); //37
    arrDB.push(dataDB.b_1);
    arrDB.push(dataDB.a_2);
    arrDB.push(dataDB.b_2);
    arrDB.push(dataDB.a_3);
    arrDB.push(dataDB.b_3);
    arrDB.push(dataDB.a_4);
    arrDB.push(dataDB.b_4);
    arrDB.push(dataDB.a_5);
    arrDB.push(dataDB.b_5);
    arrDB.push(dataDB.a_6);
    arrDB.push(dataDB.b_6);
    arrDB.push(dataDB.a_7);
    arrDB.push(dataDB.b_7);
    arrDB.push(dataDB.a_8);
    arrDB.push(dataDB.b_8);
    arrDB.push(dataDB.a_9);
    arrDB.push(dataDB.b_9);
    arrDB.push(dataDB.a_10);
    arrDB.push(dataDB.b_10);
    arrDB.push(dataDB.a_11);
    arrDB.push(dataDB.b_11);
    arrDB.push(dataDB.a_12);
    arrDB.push(dataDB.b_12);

    var final_arr = new Array();
    final_arr[0] = strDB;
    final_arr[1] = arrDB;
    return final_arr;
  }

  static CalDB(keyArr2, arrDB, ansValue) {
    for (let i = 0; i < keyArr2.length; i++) {
      for (let j = 0; j < ansValue.length; j++) {
        if (keyArr2[i] == ansValue[j]) { //Answer.js 키값과 클릭한 값이 일치하면
          console.log("key, ans: ", keyArr2[i], ansValue[j]);
          arrDB[i] += 1; //해당 값 증가
        }
      }
    }
    return arrDB;
  }

  static StringDB(arrDB) {              //title이랑 문제로만 이뤄진 배열을 만들어서 return
    var arr = new Array();

    arr.push(arrDB[0]);  //num
    arr.push(arrDB[1]);  //title
    arr.push(arrDB[2]);  //Q1
    arr.push(arrDB[3]);  //L1
    arr.push(arrDB[4]);  //R1
    arr.push(arrDB[5]);
    arr.push(arrDB[6]);
    arr.push(arrDB[7]);
    arr.push(arrDB[8]);
    arr.push(arrDB[9]);
    arr.push(arrDB[10]);
    arr.push(arrDB[11]);
    arr.push(arrDB[12]);
    arr.push(arrDB[13]);
    arr.push(arrDB[14]);
    arr.push(arrDB[15]);
    arr.push(arrDB[16]);
    arr.push(arrDB[17]);
    arr.push(arrDB[18]);
    arr.push(arrDB[19]);
    arr.push(arrDB[20]);
    arr.push(arrDB[21]);
    arr.push(arrDB[22]);
    arr.push(arrDB[23]);
    arr.push(arrDB[24]);
    arr.push(arrDB[25]);
    arr.push(arrDB[26]);
    arr.push(arrDB[27]);
    arr.push(arrDB[28]);
    arr.push(arrDB[29]);
    arr.push(arrDB[30]);
    arr.push(arrDB[31]);
    arr.push(arrDB[32]);
    arr.push(arrDB[33]);
    arr.push(arrDB[34]);
    arr.push(arrDB[35]);
    arr.push(arrDB[36]);

    return arr;
  }

  static NumberDB(arrDB) {
    var arr = new Array();
    arr.push(arrDB[0]);  //a_1
    arr.push(arrDB[1]);
    arr.push(arrDB[2]);
    arr.push(arrDB[3]);
    arr.push(arrDB[4]);
    arr.push(arrDB[5]);
    arr.push(arrDB[6]);
    arr.push(arrDB[7]);
    arr.push(arrDB[8]);
    arr.push(arrDB[9]);
    arr.push(arrDB[10]);
    arr.push(arrDB[11]);
    arr.push(arrDB[12]);
    arr.push(arrDB[13]);
    arr.push(arrDB[14]);
    arr.push(arrDB[15]);
    arr.push(arrDB[16]);
    arr.push(arrDB[17]);
    arr.push(arrDB[18]);
    arr.push(arrDB[19]);
    arr.push(arrDB[20]);
    arr.push(arrDB[21]);
    arr.push(arrDB[22]);
    arr.push(arrDB[23]);

    return arr;
  }

  static writeDB(calDB) {
    console.log('writeDB calDB', calDB);
    Answer.updateOne({
      _id: "611d106587787a37e1d17ec6"
    }, {
      // title: strDB[0],
      // Q1: strDB[1],
      // L1: strDB[2],
      // R1: strDB[3],
      // Q2: strDB[4],
      // L2: strDB[5],
      // R2: strDB[6],
      // Q3: strDB[7],
      // L3: strDB[8],
      // R3: strDB[9],
      // Q4: strDB[10],
      // L4: strDB[11],
      // R4: strDB[12],
      // Q5: strDB[13],
      // L5: strDB[14],
      // R5: strDB[15],
      // Q6: strDB[16],
      // L6: strDB[17],
      // R6: strDB[18],
      // Q7: strDB[19],
      // L7: strDB[20],
      // R7: strDB[21],
      // Q8: strDB[22],
      // L8: strDB[23],
      // R8: strDB[24],
      // Q9: strDB[25],
      // L9: strDB[26],
      // R9: strDB[27],
      // Q10: strDB[28],
      // L10: strDB[29],
      // R10: strDB[30],
      // Q11: strDB[31],
      // L11: strDB[32],
      // R11: strDB[33],
      // Q12: strDB[34],
      // L12: strDB[35],
      // R12: strDB[36],

      a_1: calDB[0],
      b_1: calDB[1],
      a_2: calDB[2],
      b_2: calDB[3],
      a_3: calDB[4],
      b_3: calDB[5],
      a_4: calDB[6],
      b_4: calDB[7],
      a_5: calDB[8],
      b_5: calDB[9],
      a_6: calDB[10],
      b_6: calDB[11],
      a_7: calDB[12],
      b_7: calDB[13],
      a_8: calDB[14],
      b_8: calDB[15],
      a_9: calDB[16],
      b_9: calDB[17],
      a_10: calDB[18],
      b_10: calDB[19],
      a_11: calDB[20],
      b_11: calDB[21],
      a_12: calDB[22],
      b_12: calDB[23]
    },
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully updated the document");
        }
      });
  }

  static #getPerData(data) {
    const ansData = JSON.parse(data);
    return ansData;
  }

  static getPerData() {
    return fs.readFile("./src/database/per_array.json")
      .then((data) => {
        return this.#getPerData(data);
      })
      .catch((err) => console.log('ansdata', err));
  }

  static calc_percent(arr) {
    var result = new Array();
    var p = new Array();
    //여기까진 무조건

    for (var k = 0; k < 12; k++) {
      p[k] = (((arr[k * 2] / (arr[k * 2] + arr[(k * 2) + 1])) * 100).toFixed(0));
    }

    for (var i = 0; i < 12; i++) {
      if (isNaN(p[i]) == false) {         //0이 아닌값(NaN)이 아닌 값만 result배열에 저장
        result[i] = p[i];
      }
    }
    return result;
  }

  static async writeFile(final) {          //리턴받은 final 배열을 per_array에 작성
    const perData = await this.getPerData();

    for (var i = 0; i < final.length; i++) {
      perData["per" + (i + 1)] = final[i];
    }

    await fs.writeFile("./src/database/per_array.json", JSON.stringify(perData));
  }

  static async per_arrayRead() {
    return this.getPerData();
  }

  static Make(arrDB) {
    var x = require('mongodb').ObjectID();
   
    const me = new Answer({
      title: arrDB[0],
      Q1: arrDB[1],
      L1: arrDB[2],
      R1: arrDB[3],
      Q2: arrDB[4],
      L2: arrDB[5],
      R2: arrDB[6],
      Q3: arrDB[7],
      L3: arrDB[8],
      R3: arrDB[9],
      Q4: arrDB[10],
      L4: arrDB[11],
      R4: arrDB[12],
      Q5: arrDB[13],
      L5: arrDB[14],
      R5: arrDB[15],
      Q6: arrDB[16],
      L6: arrDB[17],
      R6: arrDB[18],
      Q7: arrDB[19],
      L7: arrDB[20],
      R7: arrDB[21],
      Q8: arrDB[22],
      L8: arrDB[23],
      R8: arrDB[24],
      Q9: arrDB[25],
      L9: arrDB[26],
      R9: arrDB[27],
      Q10: arrDB[28],
      L10: arrDB[29],
      R10: arrDB[30],
      Q11: arrDB[31],
      L11: arrDB[32],
      R11: arrDB[33],
      Q12: arrDB[34],
      L12: arrDB[35],
      R12: arrDB[36],
      a_1: arrDB[37],
      b_1: arrDB[38],
      a_2: arrDB[39],
      b_2: arrDB[40],
      a_3: arrDB[41],
      b_3: arrDB[42],
      a_4: arrDB[43],
      b_4: arrDB[44],
      a_5: arrDB[45],
      b_5: arrDB[46],
      a_6: arrDB[47],
      b_6: arrDB[48],
      a_7: arrDB[49],
      b_7: arrDB[50],
      a_8: arrDB[51],
      b_8: arrDB[52],
      a_9: arrDB[53],
      b_9: arrDB[54],
      a_10: arrDB[55],
      b_10: arrDB[56],
      a_11: arrDB[57],
      b_11: arrDB[58],
      a_12: arrDB[59],
      b_12: arrDB[60]
    });
    me.save()
    .then(() => {
      console.log(me);
    })
    .catch((err) => {
      console.log("Error : " + err);
    });
  }

  static async writeData(arrDB) {
    console.log('datafile write');
    await this.Make(arrDB);
  }

  static MainMake(arr){          //main화면에서 띄울 db 만들기
    
  }

}
module.exports = DataFile;