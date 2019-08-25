const fs = require('fs');
import {decode, encode} from 'ini';
import {DEFAULT, RC} from './contants';
import { exist, writeFile, readFile } from './util';
export async function set(key, value) {
  let isExist = await exist(RC);
  let opt;
  if (isExist) {
    const buffer = await readFile(RC);
    const data = decode(buffer);
    opt = Object.assign(data, {[key]: value});
  }else {
    const {alias} = DEFAULT;
    opt = Object.assign({[alias]: DEFAULT}, {[key]: value});
  }
  await writeFile(RC, encode(opt));
}
export async function getAll() {

  let isExist = await exist(RC);
  let opt = {};
  if(isExist) {
    const buffer = await readFile(RC);
    opt = decode(buffer);
  }else {
    const {alias} = DEFAULT;
    opt = {
      [alias]: DEFAULT
    }
  }
  return opt;
};
export async function remove(key) {
  let isExist = await exist(RC);
  if (isExist) {
    const buffer = await readFile(RC);
    let data = decode(buffer);
    if(data[key]) {
      delete data[key];
    }
    await writeFile(RC, encode(data));
  }

};