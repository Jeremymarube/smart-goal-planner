
# 🧠 Smart Goal Planner
A financial goal-tracking app built with React and Tailwind CSS. Users can add, edit, delete, and make deposits toward personal financial goals like travel funds, emergency savings, or education.

---

## Demo
<img width="1351" height="636" alt="2025-07-20 (1)" src="https://github.com/user-attachments/assets/6aa77908-fd02-4921-8d16-b328a69901f2" />


---

### 🚀 Features
- ✅ Add new financial goals with target amounts and deadlines

- 💰 Deposit savings toward specific goals

- ✏️ Edit existing goals inline

- 🗑️ Delete completed or irrelevant goals

-  📊 Dashboard overview showing:

      - Total number of goals

      - Total amount saved

      - Number of completed goals

      - Average deposit amount

      - Urgent goals approaching deadline
 
        ---
        
 ### 🛠️ Tech Stack

  - React (Component-based frontend)

   - Tailwind CSS (Responsive utility-first styling)

   - JSON Server (Mock backend for storing goal data)

     ---

### 📦 Installation
 1. **Clone the repository**
    ```
    git clone https://github.com/your-username/smart-goal-planner.git
    cd smart-goal-planner
    ```
 2. Install dependencies
    ```
    npm install
    ```
 3.Start the JSON Server
   ```
   json-server --watch db.json --port 3001
   ```
 4. Start the React app
     ```
    npm start
     ```
    - 📌 React app runs at http://localhost:3000
    - 📌 JSON Server runs at http://localhost:3001/goals

### 📁 Folder Structure
```
smart-goal-planner/
├── db.json
├── package.json
├── README.md    #This file
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   ├── GoalCard.jsx
│   │   ├── GoalForm.jsx
│   │   ├── DepositForm.jsx
|   |   ├── InlineGoalEditForm.jsx
│   │   └── Overview.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   └── services/
│       └── goalService.js
```

### 🔧 Backend (db.json)
```
{
  "goals": [
    {
      "id": 1,
      "name": "Travel Fund",
      "targetAmount": 1000,
      "savedAmount": 200,
      "deadline": "2025-08-01",
      "category": "Travel"
    }
  ]
}
```

###  Author
   Jeremy Marube

   ---

### License
Copyright (c) 2025 Jeremy Marube


