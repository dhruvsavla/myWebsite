import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CanvasJS = CanvasJSReact.CanvasJS;

const Skills = () => {

  const addSymbols = (e) => {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  };

  const options = {
    theme: "dark2",
    title: {
      text: "SkillSet",
    },
    axisX: {
      title: "Skills",
      reversed: true,
    },
    axisY: {
      title: "Rating out of 10",
      includeZero: true,
      labelFormatter: addSymbols,
    },
    data: [
      {
        type: "bar",
        dataPoints: [
          { y: 9.5, label: "Java" },
          { y: 7.5, label: "Javascript" },
          { y: 8, label: "Python" },
          { y: 9, label: "React" },
          { y: 8, label: "HTML" },
          { y: 6, label: "GraphQL" },
          { y: 8, label: "CSS" },
          { y: 7, label: "ExpressJS" },
          { y: 9, label: "SQL" },
          { y: 8, label: "NodeJS" },
          { y: 7, label: "Testing" },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options}/>
    </div>
  );
};

export default Skills;
