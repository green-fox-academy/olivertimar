const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number = 0;
let y: number = 0;

let nrOfSteps = 5;

let origox: number = x + 300;
let origoy: number = y + 300;


function sRight (startPoint, stepsNr) {
  function steppinRight (startPoint, stepsNr) {
    let fy: number = startPoint; //=0
    origox = 300; //? miért kell újra definiálni? mert újra innen indul a következő lépés, elmozdul az utolsó sor miatt 25tel.
    for (let i: number = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.moveTo(origox, origoy); //=(300,300)
      ctx.lineTo(x + 300, fy = fy + stepsNr); //=(0+300, fy<új>=0+25)=25->25-ig megy fel a vonal x,y=300,25;325,50
      ctx.stroke();
      origox = origox + nrOfSteps; //=300+25=325
      };

    }
  ctx.strokeStyle = "purple";
  steppinRight (x, nrOfSteps);
  ctx.strokeStyle = "blue";
  steppinRight (600, -nrOfSteps); //=0+300, 600 +-25=575-ig megy le a vonal utána 550 stb
};

sRight(0, 0);

function sLeft (startPoint, stepsNr) {
    function steppinLeft (startPoint, stepsNr) {
      let fy: number = startPoint;
      origox = 300;
      for (let i: number = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.moveTo(origox, origoy);
        ctx.lineTo(x + 300, fy = fy + stepsNr);
        ctx.stroke();
        origox = origox - nrOfSteps;
        };
      };
    ctx.strokeStyle = "red";
    steppinLeft (x, nrOfSteps);
    
    ctx.strokeStyle = "yellow";
    steppinLeft (600, -nrOfSteps);
  };
};

sLeft(0, 0);
