const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const items = [];

addItemBtn.addEventListener('click', function() {
    const itemName = itemInput.value.trim(); // Получаем текст из input

    if (itemName !== "") {
        const newItem = {
            name: itemName,
            purchased: false
        };

        items.push(newItem);
        itemInput.value = "";
        showList('all');
    } else {
        alert("Please enter an item name.");
    }
});

const filterAll = document.getElementById('filter-all');
const filterPurchased = document.getElementById('filter-purchased');
const filterUnpurchased = document.getElementById('filter-unpurchased');

function showList(filter) {
    itemList.innerHTML = '';

    items.forEach(function(item) {
        if (filter === 'all') {
            showItem(item);
        } else if (filter === 'purchased' && item.purchased) {
            showItem(item);
        } else if (filter === 'unpurchased' && !item.purchased) {
            showItem(item);
        }
    });
}

function showItem(item) {
    const li = document.createElement('li');
    li.textContent = item.name;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function() {
        itemList.removeChild(li);
    });

    li.appendChild(deleteBtn);

    const purchaseBtn = document.createElement('button');

    if(item.purchased) {
        purchaseBtn.textContent = "Mark as unpurchased";
    }
    else {
        purchaseBtn.textContent = "Mark as purchased";
    }

    purchaseBtn.addEventListener('click', function() {
        item.purchased = !item.purchased;
        showList(filter);
    });

    li.appendChild(purchaseBtn);
    itemList.appendChild(li);
}


filterAll.addEventListener('click', function() {
    showList('all');
});

filterPurchased.addEventListener('click', function() {
    showList('purchased');
});

filterUnpurchased.addEventListener('click', function() {
    showList('unpurchased');
});