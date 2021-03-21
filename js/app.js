let users = [{
        id: 1,
        name: 'Kevin',
        surname: 'Durant',
        age: 30,
        retired: false
    },
    {
        id: 2,
        name: 'Chris',
        surname: 'Paul',
        age: 34,
        retired: true
    },
    {
        id: 3,
        name: 'Tracy',
        surname: 'McGrady',
        age: 40,
        retired: false
    },
    {
        id: 4,
        name: 'Allen',
        surname: 'Iverson',
        age: 44,
        retired: true
    }
];

// Counting the length of users
var countUsers = users.length;

// Creating a tag <table>
var table = document.createElement('table');
// Adding a 'table' and 'table-bordered' classes
table.classList.add('table', 'table-bordered');
// Creating a tag <tbody>
var tbody = document.createElement('tbody');
// Creating a tag <tr>
var tr = document.createElement('tr');
// Placing the header cell inside the <tbody> tag
tr.innerHTML = '<th>#</th><th>Name</th><th>Surname</th><th>Age</th><th>Retired</th>';
tbody.appendChild(tr);

// Creating a new array
let items = ['id', 'name', 'surname', 'age', 'retired'];

// Looping of users length 
for (var i = 0; i < countUsers; i++) {
    // Creating a tag <tr>
    var tr = document.createElement('tr');
    // Setting the individual attribute for each row
    tr.setAttribute('value', 'row-' + (i + 1));
    tr.classList.add('rows');

    // Looping the first four properties
    for (var j = 0; j < 4; j++) {
        var td = document.createElement('td');
        // Setting the attributes for the first four cell
        td.setAttribute('value', 'cell-' + (j + 1));
        var item = users[i][items[j]];
        td.innerHTML = item;
        // Putting the property values in the table
        tr.appendChild(td);
    };
    // Looping the last property 
    for (var j = 4; j < 5; j++) {
        var td = document.createElement('td');
        // Setting the attribute for the last cell 
        td.setAttribute('value', 'cell-' + (j + 1));
        var retired = users[i][items[j]];
        // Checking the 'retired' property values and changing them into Yes/No
        if (retired == true) {
            td.innerHTML = 'Yes';
        } else {
            td.innerHTML = 'No';
        };
        // Putting the property values in the table
        tr.appendChild(td);
    };
    tbody.appendChild(tr);

    // Placing data from the table in the form
    tr.onclick = function () {
        var tdList = this.childNodes;
        var btn = document.querySelector('.btn');

        for (var i = 0; i < tdList.length; i++) {
            var value = tdList[i].innerHTML;
            var id = tdList[i].getAttribute('value');
            var idNodeList = document.querySelectorAll('#' + id);
            for (var j = 0; j < idNodeList.length; j++) {
                idNodeList[j].value = value;
                if ((idNodeList[j].value = value) == 'Yes') {
                    idNodeList[j].checked = true;
                } else {
                    idNodeList[j].checked = false;
                };
            };
        };

        // Updating the data from the from into the table
        btn.onclick = function () {
            var inputs = document.querySelectorAll('input');

            for (var i = 0; i < inputs.length; i++) {
                var newValue = inputs[i].value;
                tdList[(i + 1)].innerHTML = newValue;

                for (var j = 0; j < idNodeList.length; j++) {
                    if (idNodeList[j].checked == true) {
                        tdList[(j + 4)].innerHTML = 'Yes';
                    } else {
                        tdList[(j + 4)].innerHTML = 'No';
                    };
                };
            };
        };
    };
};

table.appendChild(tbody);
// Placing the table into HTML
document.getElementById('table').appendChild(table);