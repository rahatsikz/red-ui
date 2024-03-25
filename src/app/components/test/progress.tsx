import React from "react";

type ProgressBarProps = {
  label: string;
  percentage: number;
};

const ProgressBarComponent = ({ label, percentage }: ProgressBarProps) => {
  return (
    <div className='space-y-1'>
      <div className='flex items-center justify-between font-medium'>
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className='w-full h-4 rounded-full bg-slate-200 overflow-hidden'>
        <div
          className='h-full rounded-full bg-emerald-400'
          style={{ width: percentage + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
