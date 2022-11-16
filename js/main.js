import { getData } from './api.js';
import { initUpload } from './upload.js';
import { drawPictures } from './picture.js';
import { initScale } from './scale.js';
import { initEffect } from './effect.js';


getData(drawPictures);
initUpload();
initScale();
initEffect();
