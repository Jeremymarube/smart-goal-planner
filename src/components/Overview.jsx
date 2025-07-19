import React from 'react';
import dayjs from 'dayjs';

const Overview = ({ goals }) => {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completedGoals = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-semibold">Total Goals</p>
          <p>{goals.length}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-semibold">Total Saved</p>
          <p>${totalSaved}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-semibold">Completed Goals</p>
          <p>{completedGoals}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-2">
        {goals.map((goal) => {
          const deadline = dayjs(goal.deadline);
          const daysLeft = deadline.diff(dayjs(), 'day');
          const isComplete = goal.savedAmount >= goal.targetAmount;
          const isOverdue = daysLeft < 0 && !isComplete;
          const isWarning = daysLeft <= 30 && daysLeft >= 0 && !isComplete;

          return (
            <li
              key={goal.id}
              className="p-3 bg-gray-50 rounded shadow-sm border border-gray-200 flex justify-between items-center"
            >
              <span className="font-medium">{goal.name} — {daysLeft} days left</span>
              <span>
                {isWarning && <span className="text-orange-500 font-semibold">⚠️ Approaching</span>}
                {isOverdue && <span className="text-red-600 font-semibold">❌ Overdue</span>}
                {isComplete && <span className="text-green-600 font-semibold">✅ Completed</span>}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Overview;

