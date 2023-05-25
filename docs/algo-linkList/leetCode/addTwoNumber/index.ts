


import {glob} from 'glob';


const data = await glob('./**/*.tar.ts')

console.log(data);


export {data};