import React, { useState, useEffect } from 'react';

const GoalForm = ({ onAdd, onUpdate, goalToEdit, clearEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    savedAmount: '',
    category: '',
    deadline: '',
  });

  useEffect(() => {
    if (goalToEdit) {
      setFormData({
        name: goalToEdit.name || '',
        targetAmount: goalToEdit.targetAmount || '',
        savedAmount: goalToEdit.savedAmount || '',
        category: goalToEdit.category || '',
        deadline: goalToEdit.deadline || '',
      });
    } else {
      setFormData({
        name: '',
        targetAmount: '',
        savedAmount: '',
        category: '',
        deadline: '',
      });
    }
  }, [goalToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'targetAmount' || name === 'savedAmount' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEdit = !!goalToEdit;

    const goalData = {
      ...formData,
      id: isEdit ? goalToEdit.id : undefined,
    };

    if (isEdit) {
      onUpdate(goalData);
    } else {
      onAdd({ ...goalData, savedAmount: Number(formData.savedAmount) || 0 });
    }

    // Reset form
    setFormData({
      name: '',
      targetAmount: '',
      savedAmount: '',
      category: '',
      deadline: '',
    });

    clearEdit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-6 py-4 mb-6"
    >
      <h2 className="text-lg font-semibold text-purple-700 mb-4">
        {goalToEdit ? `Editing: ${goalToEdit.name}` : 'Add New Goal'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Goal Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="targetAmount"
          placeholder="Target Amount"
          value={formData.targetAmount}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="savedAmount"
          placeholder="Saved Amount"
          value={formData.savedAmount}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="date"
          name="deadline"
          placeholder="Deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          {goalToEdit ? 'Update Goal' : 'Add Goal'}
        </button>

        {goalToEdit && (
          <button
            type="button"
            onClick={clearEdit}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default GoalForm;




