let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
let editIndex = -1;

const form = document.getElementById("itemForm");
const nameInput = document.getElementById("itemName");
const qtyInput = document.getElementById("itemQty");
const priceInput = document.getElementById("itemPrice");
const addBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");
const searchInput = document.getElementById("searchInput");
const clearAllBtn = document.getElementById("clearAllBtn");
const tbody = document.getElementById("inventoryBody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const qty = parseInt(qtyInput.value);
    const price = parseFloat(priceInput.value);

    if (!name || qty < 0 || price < 0) return;

    if (editIndex >= 0) {
        inventory[editIndex] = { name, qty, price };
        cancelEdit();
    } else {
        inventory.push({ name, qty, price });
    }

    saveAndRender();
    form.reset();
});

cancelBtn.addEventListener("click", function () {
    cancelEdit();
    form.reset();
});

clearAllBtn.addEventListener("click", function () {
    if (inventory.length === 0) return;
    if (confirm("Delete all items? This cannot be undone.")) {
        inventory = [];
        cancelEdit();
        form.reset();
        saveAndRender();
    }
});

searchInput.addEventListener("input", render);

function cancelEdit() {
    editIndex = -1;
    addBtn.textContent = "Add Item";
    addBtn.classList.remove("editing");
    cancelBtn.style.display = "none";
}

function saveAndRender() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
    render();
}

function render() {
    const filter = searchInput.value.toLowerCase();
    tbody.innerHTML = "";

    let totalItems = 0;
    let totalValue = 0;
    let visibleCount = 0;

    inventory.forEach(function (item, index) {
        if (filter && !item.name.toLowerCase().includes(filter)) return;

        visibleCount++;
        const total = item.qty * item.price;
        totalItems += item.qty;
        totalValue += total;

        const tr = document.createElement("tr");
        if (item.qty <= 5) {
            tr.classList.add("low-stock");
        }

        tr.innerHTML =
            "<td>" + item.name + "</td>" +
            "<td>" + item.qty + (item.qty <= 5 ? ' <span class="low-badge">Low</span>' : '') + "</td>" +
            "<td>$" + item.price.toFixed(2) + "</td>" +
            "<td>$" + total.toFixed(2) + "</td>" +
            "<td>" +
            '<button class="btn-edit" data-index="' + index + '">Edit</button>' +
            '<button class="btn-delete" data-index="' + index + '">Delete</button>' +
            "</td>";
        tbody.appendChild(tr);
    });

    if (visibleCount === 0) {
        var emptyRow = document.createElement("tr");
        emptyRow.innerHTML = '<td colspan="5" class="empty-state">' +
            (filter ? "No items match your search." : "No items yet. Add one above!") +
            "</td>";
        tbody.appendChild(emptyRow);
    }

    document.getElementById("totalItems").textContent = "Items: " + totalItems;
    document.getElementById("totalValue").textContent = "Total Value: $" + totalValue.toFixed(2);

    document.querySelectorAll(".btn-edit").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var i = parseInt(this.dataset.index);
            nameInput.value = inventory[i].name;
            qtyInput.value = inventory[i].qty;
            priceInput.value = inventory[i].price;
            editIndex = i;
            addBtn.textContent = "Update Item";
            addBtn.classList.add("editing");
            cancelBtn.style.display = "inline-block";
            nameInput.focus();
        });
    });

    document.querySelectorAll(".btn-delete").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var i = parseInt(this.dataset.index);
            if (confirm("Delete " + inventory[i].name + "?")) {
                inventory.splice(i, 1);
                if (editIndex === i) {
                    cancelEdit();
                    form.reset();
                }
                saveAndRender();
            }
        });
    });
}

render();
