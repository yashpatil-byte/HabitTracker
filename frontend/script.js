const habitForm = document.getElementById('habit-form');
const habitName = document.getElementById('habit-name');
const habitFrequency = document.getElementById('habit-frequency');
const habitList = document.getElementById('habit-list');

const API_URL = "http://localhost:3000/habits";

// Fetch and render habits
async function fetchHabits() {
    const res = await fetch(API_URL);
    const habits = await res.json();
    habitList.innerHTML = "";
    habits.forEach(renderHabit);
}

// Render a single habit
function renderHabit(habit) {
    const li = document.createElement('li');
    li.className = 'habit-item';
    if (habit.completed) li.classList.add('completed');

    li.innerHTML = `
        <span>${habit.name} (${habit.frequency})</span>
        <div class="habit-actions">
            <button class="toggle">Toggle</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Toggle button
    li.querySelector('.toggle').addEventListener('click', async () => {
        await fetch(`${API_URL}/${habit._id}/complete`, { method: 'PUT' });
        fetchHabits();
    });

    // Delete button
    li.querySelector('.delete').addEventListener('click', async () => {
        await fetch(`${API_URL}/${habit._id}`, { method: 'DELETE' });
        fetchHabits();
    });

    habitList.appendChild(li);
}

// Add new habit
habitForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!habitName.value || !habitFrequency.value) return;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: habitName.value,
            frequency: habitFrequency.value
        })
    });

    habitName.value = '';
    habitFrequency.value = '';
    fetchHabits();
});

// Initial fetch
fetchHabits();
