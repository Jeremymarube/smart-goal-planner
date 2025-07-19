import React, { useState } from 'react';

const DepositForm = ({ goals, onDeposit }) => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedGoal && amount) {
      onDeposit(selectedGoal, parseFloat(amount));
      setAmount('');
      setSelectedGoal('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-lg font-semibold text-purple-700 mb-4">Make a Deposit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          value={selectedGoal}
          onChange={(e) => setSelectedGoal(e.target.value)}
          required
          className="border p-2 rounded"
        >
          <option value="">Select Goal</option>
          {goals.map((goal) => (
            <option key={goal.id} value={goal.id}>
              {goal.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Deposit Amount"
          required
          className="border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
      >
        Deposit
      </button>
    </form>
  );
};

export default DepositForm;

