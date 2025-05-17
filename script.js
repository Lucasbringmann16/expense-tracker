document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obter valores do formulário
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;

    // Adicionar gasto à tabela
    const expenseList = document.getElementById('expense-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${description}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${new Date(date).toLocaleDateString('pt-BR')}</td>
        <td><button class="delete-btn">Excluir</button></td>
    `;

    expenseList.appendChild(row);

    // Atualizar total
    updateTotal();

    // Limpar formulário
    document.getElementById('expense-form').reset();

    // Adicionar evento de exclusão
    row.querySelector('.delete-btn').addEventListener('click', function() {
        row.remove();
        updateTotal();
    });
});

function updateTotal() {
    const rows = document.querySelectorAll('#expense-list tr');
    let total = 0;

    rows.forEach(row => {
        const amount = parseFloat(row.cells[1].textContent);
        total += amount;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}
