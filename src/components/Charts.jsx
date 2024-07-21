import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const chartInstance = useRef(null);

  // Custom hook for Intersection Observer logic
  useEffect(() => {
    const observerCallback = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Custom hook for Chart initialization and cleanup
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