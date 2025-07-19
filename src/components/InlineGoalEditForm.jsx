import React, { useState, useEffect } from 'react';

const InlineGoalEditForm = ({ goal, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: '',
  });

  useEffect(() => {
    if (goal) {
      setFormData({
        name: goal.name,
        targetAmount: goal.targetAmount,
        category: goal.category,
        deadline: goal.deadline,
      });
    }
  }, [goal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...goal, ...formData, targetAmount: parseFloat(formData.targetAmount) });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-purple-50 p-4 mt-2 rounded-lg shadow">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Goal Name"
          required
          className="border p-2 rounded"
        />
        <input
          name="targetAmount"
          type="number"
          value={formData.targetAmount}
          onChange={handleChange}
          placeholder="Target Amount"
          required
          className="border p-2 rounded"
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
      </div>
      <div className="flex gap-2 mt-4">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default InlineGoalEditForm;
