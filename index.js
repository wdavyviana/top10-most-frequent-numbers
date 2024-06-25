const input = document.getElementById('input');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

submit.addEventListener('click', () => {
  const numbers = input.value.trim().split(/[,\s]+/).map(Number);
  const frequency = {};
  numbers.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  const sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
  const top10 = sortedFrequency.slice(0, 10);

  result.innerHTML = `
    <h2>Top 10 Most Frequent Numbers:</h2>
    <ul>
      ${top10.map(([num, freq]) => `<li>${num} ( frequency: ${freq} )</li>`).join('')}
    </ul>
  `;
});