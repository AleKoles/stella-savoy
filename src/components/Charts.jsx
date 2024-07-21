import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const chartInstance = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !chartRef.current) return;

    const chartElement = chartRef.current;

    chartInstance.current = new Chart(chartElement, {
      type: 'doughnut',
      data: data,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [isVisible, data]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
