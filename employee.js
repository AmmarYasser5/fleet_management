if (location.pathname.slice(location.pathname.lastIndexOf('/') + 1) === "Employee") {
    const employeeData = [
        {
            name: 'Quinn Flynn',
            vehicle_id: '10',
            status: 'available',
            price: '$50.00'
        },
        {
            name: 'Rhona Davidson',
            vehicle_id: '19',
            status: 'available',
            price: '$54.00'
        },
        {
            name: 'Sakura Yamamoto',
            vehicle_id: '2',
            status: 'un-available',
            price: '$40.00'
        },
        {
            name: 'Serge Baldwin',
            vehicle_id: '11',
            status: 'available',
            price: '$120.00'
        },
        {
            name: 'Shad Decker',
            vehicle_id: '13',
            status: 'available',
            price: '$50.00'
        },
        {
            name: 'Shou Itou',
            vehicle_id: '14',
            status: 'available',
            price: '$60.00'
        },
        {
            name: 'Sonya Frost',
            vehicle_id: '4',
            status: 'available',
            price: '$53.00'
        },
        {
            name: 'Suki Burks',
            vehicle_id: '5',
            status: 'un-available',
            price: '$63.00'
        },
        {
            name: 'Tatyana Fitzpatrick',
            vehicle_id: '1',
            status: 'un-available',
            price: '$70.00'
        },
        {
            name: 'Thor Walton',
            vehicle_id: '12',
            status: 'available',
            price: '$56.00'
        },
        {
            name: 'Gavin Joyce',
            vehicle_id: '6',
            status: 'available',
            price: '$74.00'
        }
    ]; 
    const employee_table_body = document.querySelector(".employee-management tbody");
    const editEmployeeModal = document.querySelector('.employee-management .modal.edit');
    const addEmployeeModal = document.querySelector('.employee-management .modal.add');

    // to get access to the element that I updated because can't but it's id as argument in saveChanges function
    var editedEmployeeeId = null;

    function addAllElements() {
        for (let i = 0; i < employeeData.length; i++) {

            employee_table_body.innerHTML += `
                <tr id = "employee_id${i + 1}">
                    <td class="employee-name">${employeeData[i].name}</td>
					<td class="employee-vehicle">${employeeData[i].vehicle_id}</td>
					<td class="employee-status ${employeeData[i].status == 'available' ? 'available' : 'un-available'}">${employeeData[i].status}</td>
					<td class="employee-price">${employeeData[i].price}</td>
					<td>
						<button class="edit">
							<i onclick= "edit('${i + 1}', '${employeeData[i].name}', '${employeeData[i].vehicle_id}', '${employeeData[i].status}', '${employeeData[i].price}' )" class="fa-regular fa-pen-to-square"></i>
						</button>
						<button>
							<i onclick= "deleteEle(${i + 1})" class="fa-regular fa-trash-can"></i>
						</button>
					</td>
                </tr>
            `;
        }

    }

    addAllElements(); 

    function showAddModal() {
        addEmployeeModal.style.display = "block";
    }

    function addEmployee() {
        const nameValue = document.querySelector('.employee-management .modal.add #nameInput').value
        const vehicleIDValue = document.querySelector('.employee-management .modal.add #vehicleInput').value
        const statusValue = document.querySelector('.employee-management .modal.add #statusInput').value
        const priceValue = document.querySelector('.employee-management .modal.add #priceInput').value;

        employee_table_body.innerHTML += `
                 <tr id = "employee_id${employeeData.length + 1}">
                    <td class="employee-name">${nameValue}</td>
					<td class="employee-vehicle">${vehicleIDValue}</td>
					<td class="employee-status ${statusValue == 'available' ? 'available' : 'un-available'}">${statusValue}</td>
					<td class="employee-price">${priceValue}</td>
					<td>
						<button class="edit">
							<i onclick= "edit('${employeeData.length + 1}', '${nameValue}', '${vehicleIDValue}', '${statusValue}', '${priceValue}' )" 
                            class="fa-regular fa-pen-to-square"></i>
						</button>
						<button>
							<i onclick= "deleteEle(${employeeData.length + 1})" class="fa-regular fa-trash-can"></i>
						</button>
					</td>
                </tr>
            `;
        cancelForm('add');
    }

    function edit(id, name, vehicleID, status, price) {
        editEmployeeModal.style.display = "block";
        editEmployeeModal.querySelector('.modal-body').innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    
                    <div class="col-md-8">
                      <div class="card-body">
                        <form>
                            <div>
                                <label for = "nameInput">Name</label>
                                <input id = "nameInput" type = "text" value = "${name}"/>
                            </div>
                            <div>
                                <label for = "vehicleInput">Vehicle</label>
                                <input id = "vehicleInput" type = "text" value = "${vehicleID}"/>
                            </div>
                            <div>
                                <label for = "statusInput">Status</label>
                                <select id = "statusInput" >
                                    <option ${status === 'available' && 'selected'} value = "available">available</option>
                                    <option ${status === 'un-available' && 'selected'} value = "un-available">un-available</option>
                                </select>
                            </div>
                            <div>
                                <label for = "priceInput">Price</label>
                                <input id = "priceInput" type = "text" value = "${price}"/>
                            </div>
                        </form>
                        <p class="card-text"><small class="text-body-secondary">Employee ID : ${id}</small></p>
                      </div>
                    </div>
                </div>
            </div>
        ` ;

        editedEmployeeeId = id;
    }

    function search(type) {
        const searchBar = document.querySelector('.employee-management #search').value;
        const filterOption = document.querySelector('.employee-management .search-and-show select').value;
        employee_table_body.innerHTML = ''

        if (type == 'all') {
            addAllElements();
        }
        else {
            for (let i = 0; i < employeeData.length; i++) {
                if (
                    (filterOption === 'name' && employeeData[i].name === searchBar) ||
                    (filterOption === 'price' && employeeData[i].price === searchBar) ||
                    (filterOption === 'status' && employeeData[i].status === searchBar)
                ) {

                    employee_table_body.innerHTML += `
                        <tr id = "employee_id${i + 1}">
                            <td class="employee-name">${employeeData[i].name}</td>
					        <td class="employee-vehicle">${employeeData[i].vehicle_id}</td>
					        <td class="employee-status ${employeeData[i].status == 'available' ? 'available' : 'un-available'}">${employeeData[i].status}</td>
					        <td class="employee-price">${employeeData[i].price}</td>
					        <td>
						        <button class="edit">
							        <i onclick= "edit('${i + 1}', '${employeeData[i].name}', '${employeeData[i].vehicle_id}', '${employeeData[i].status}', '${employeeData[i].price}' )" class="fa-regular fa-pen-to-square"></i>
						        </button>
						        <button>
							        <i onclick= "deleteEle(${i + 1})" class="fa-regular fa-trash-can"></i>
						        </button>
					        </td>
                        </tr>`
                }
            }
        }
    }

    function saveChanges() {
        const editedTr = document.getElementById(`employee_id${editedEmployeeeId}`);

        editedTr.querySelector('.employee-name').innerHTML = document.getElementById("nameInput").value;
        editedTr.querySelector('.employee-vehicle').innerHTML = document.getElementById("vehicleInput").value;
        editedTr.querySelector('.employee-status').innerHTML = document.getElementById("statusInput").value;
        editedTr.querySelector('.employee-price').innerHTML = document.getElementById("priceInput").value;

        if (document.getElementById("statusInput").value === 'available') {
            editedTr.querySelector('.employee-status').classList.remove("un-available");
            editedTr.querySelector('.employee-status').classList.add("available");
        }
        else {
            editedTr.querySelector('.employee-status').classList.remove("available");
            editedTr.querySelector('.employee-status').classList.add("un-available");
        }

        cancelForm('edit');
    }

    function cancelForm(modal) {
        if (modal == 'edit') {
            editEmployeeModal.style.display = "none";;
        }
        else {
            addEmployeeModal.style.display = "none";
        }
    }

    function deleteEle(id) {
        const tr = document.getElementById(`employee_id${id}`)
        tr.remove();
    }

}