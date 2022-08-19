const wakeup = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

function doingThing(func) {
  console.log(func);
}

doingThing(sleep());