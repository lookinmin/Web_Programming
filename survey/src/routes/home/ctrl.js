"use strict";

console.log("routes ctrl start");

const fs = require("fs").promises;
const { response } = require("express");
const Data = require("../../model/Data");
const MakeNew = require("../../model/MakeNew");
const GetDB = require("../../model/GetDB");

const output = {
  main: async (req, res) => {
    const init = new GetDB();
    const data = await init.getDB();
    console.log('main data', data);
    res.render("home/main", { data });
  },
  game: async (req, res) => {
    const init = new GetDB();
    const data = await init.getDB();
    console.log('main data', data);
    res.render("home/game", { data });
  },
  start: (req, res) => {
    res.render("home/start");
  },
  end: async (req, res) => {
    const init = new Data(req.body);
    const data = await init.per_arrayRead();
    const val = Object.values(data);
    res.render("home/end", { val });
  },
  make: (req, res) => {
    res.render("home/make");
  }
}

const process = {
  main: (req, res) => {
    console.log('main', req.body);
  },
  game: (req, res) => {
    console.log('game', req.body);
  },
  start: (req, res) => {
    console.log('start', req.body);
  },
  end: async (req, res) => {
    console.log('end', req.body);
    // const arr = Object.values(req.body);
    // console.log('arr: ', arr);
    const data = new Data(req.body);
    await data.AddData(req.body);
  },
  make: async (req, res) => {
    console.log('req.body', typeof(req.body));
    var value = Object.values(req.body);
    const data = new MakeNew(value);
    await data.writeData();
  },
};

module.exports = {
  output,
  process,
}