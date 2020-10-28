import { ElectronRecorderApp } from './electron-recorder-app';
import path from 'path';


// ===========================================================================
const recorderApp = new ElectronRecorderApp({
  staticPath: path.join(__dirname, "../wr-ext/replay/")
});

recorderApp.init();