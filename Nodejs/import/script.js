/*require v/s import
import {sum} from "./math.js"
We can't selectively load only the pieces we need with  import, we can selectively load only the pieces we need, which can save memory.

Loading is synchronous for 'require' but can be asynchronous for 'import'.

we when we build project only use import or requires not both because a good apporce is only use one thing*/

//when only import and export write not work it nessacry  to add a json file to node init cmd
import {sum,pI} from "./math.js";
console.log(sum(1,2));
import { generate } from "random-words";
console.log(generate());