import React, { useState } from 'react';

const GoalCard = ({ goal, onDelete, onEdit }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { id, name, targetAmount, savedAmount, category, deadline } = goal;

  const progress = Math.min((savedAmount / targetAmount) * 100, 100).toFixed(1);
  const remaining = targetAmount - savedAmount;

  return (
    <div className="goal-card card relative bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-purple-700">{name}</h3>

        <div className="relative">
          <button
            className="text-gray-600 text-xl px-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            ⋮
          </button>

          {showMenu && (
            <div className="absolute right-0 top-6 bg-white border rounded shadow-md z-10 w-32">
              <button onClick={() => onEdit(goal.id)} className="text-blue-500 hover:text-blue-700">
  ✏️ Edit
</button>

              <button
                onClick={() => {
                  onDelete(id);
                  setShowMenu(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
              >
                🗑️ Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm">Category: <span className="font-medium">{category}</span></p>
      <p className="text-sm">Target: ${targetAmount}</p>
      <p className="text-sm">Saved: ${savedAmount}</p>
      <p className="text-sm">Remaining: ${remaining}</p>
      <p className="text-sm mb-2">Deadline: {deadline}</p>

      <div className="progress-bar bg-gray-200 h-2 rounded mb-2">
        <div
          style={{ width: `${progress}%` }}
          className="bg-green-500 h-2 rounded"
        ></div>
      </div>
      <small className="block text-gray-600">{progress}% complete</small>
    </div>
  );
};

export default GoalCard;



