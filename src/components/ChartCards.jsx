import React from 'react';
import ChartComponent from './Charts';

const chartData1 = {
  datasets: [{
    data: [50, 50],
    backgroundColor: [
      'rgb(243, 153, 63)',
      'rgb(233, 244, 245)'
      
    ],
    hoverOffset: 4
  }]
};

const chartData2 = {
  datasets: [{
    data: [30, 70],
    backgroundColor: [
       'rgb(243, 153, 63)',
       'rgb(233, 244, 245)'  
    ],
    hoverOffset: 4
  }]
};

const chartData3 = {
  datasets: [{
    data: [40, 60],
    backgroundColor: [
      'rgb(233, 244, 245)',
      'rgb(243, 153, 63)'       
    ],
    hoverOffset: 4
  }]
};

const ChartCards = () => {
  return (
    <div class="mx-auto max-w-7xl flex flex-col gap-12 ">
        <h2 class="text-center text-3xl lg:text-4xl font-bold ">Чи знаєте ви, що..?</h2>
        <div class="grid grif-cols-1 lg:grid-cols-3 gap-8 items-start  justify-center text-lg">
            <div className=" px-4 card relative flex flex-col sm:flex-row lg:flex-col items-center gap-6 lg:gap-12">
                <ChartComponent  data={chartData1} />
                <div className="lg:text-lg">
                    <span className="font-bold text-orange-700 playfair">50% </span>
                    <p className="inline">малих підприємств зазнають краху протягом перших п’яти років через погане фінансове управління на етапі запуску.</p>
                </div>              
            </div>
            <div className="px-4 card relative flex flex-col sm:flex-row-reverse sm:-mt-24 lg:mt-0 lg:flex-col items-center gap-4 lg:gap-6">
                <ChartComponent data={chartData2} />
                <div className="lg:text-lg">
                    <span className="font-bold text-orange-700 playfair">70% </span>
                    <p className="inline">підприємств, які зазнають краху мають власну бухгалтерію.</p>
                </div>              
            </div>
            <div className=" px-4 card relative flex flex-col sm:flex-row lg:flex-col sm:-mt-24 lg:mt-0 items-center gap-4 lg:gap-6">
                <ChartComponent  data={chartData3} />
                <div className="lg:text-lg">
                    <p className="inline ">
                    Підприємства, які передають бухгалтерію на аутсорсинг, знижують операційні витрати на <span class="font-bold  text-emerald-700 playfair">40% </span> і підвищують прибутковість на <span class="font-bold playfair text-emerald-700 ">4% </span>.</p>
                </div>              
            </div>
        </div>
      
    </div>
  );
};

export default ChartCards;
