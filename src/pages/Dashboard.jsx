import React, { useEffect, useState } from 'react';
import GoalCard from '../components/GoalCard';
import InlineGoalEditForm from '../components/InlineGoalEditForm';
import GoalForm from '../components/GoalForm';
import DepositForm from '../components/DepositForm';
import Overview from '../components/Overview';
import { getGoals, createGoal, updateGoal, deleteGoal } from '../services/goalService';

const Dashboard = () => {
  const [goals, setGoals] = useState([]);
  const [goalToEditId, setGoalToEditId] = useState(null);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    const data = await getGoals();
    setGoals(data);
  };

  const handleAddGoal = async (newGoal) => {
    const addedGoal = await createGoal(newGoal);
    setGoals([...goals, addedGoal]);
  };

  const handleDeposit = async (goalId, amount) => {
    const goal = goals.find((g) => g.id === goalId);
    const updatedGoal = {
      ...goal,
      savedAmount: goal.savedAmount + amount,
    };
    await updateGoal(goalId, { savedAmount: updatedGoal.savedAmount });
    setGoals(goals.map((g) => (g.id === goalId ? updatedGoal : g)));
  };

  const handleEditGoal = (id) => {
    setGoalToEditId(id);
  };

  const handleUpdateGoal = async (updatedGoal) => {
    await updateGoal(updatedGoal.id, updatedGoal);
    setGoals(goals.map((g) => (g.id === updatedGoal.id ? updatedGoal : g)));
    setGoalToEditId(null);
  };

  const handleDeleteGoal = async (id) => {
    await deleteGoal(id);
    setGoals(goals.filter((g) => g.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Smart Goal Planner</h1>

      <Overview goals={goals} />

      <GoalForm onAdd={handleAddGoal} />

      <DepositForm goals={goals} onDeposit={handleDeposit} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {goals.map((goal) => (
          <div key={goal.id} className="col-span-1">
            <GoalCard
              goal={goal}
              onEdit={() => handleEditGoal(goal.id)}
              onDelete={handleDeleteGoal}
            />
            {goalToEditId === goal.id && (
              <InlineGoalEditForm
                goal={goal}
                onUpdate={handleUpdateGoal}
                onCancel={() => setGoalToEditId(null)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;




