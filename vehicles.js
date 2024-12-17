// vehicles management

if (location.pathname.slice(location.pathname.lastIndexOf('/') + 1) === "Vehicles") {

    // variables
    const vehicles_data = [
        {
            image: './../img/car1.jpg',
            model: "sedan",
            year: "2002",
            status: "AVAILABLE",
            lsInspectionDate: "2024/5"
        } , 
        {
            image: './../img/coupe.jpg',
            model: "Coupe",
            year: "2011",
            status: "AVAILABLE",
            lsInspectionDate: "2024/2"
        } , 
        {
            image: './../img/sedan.jpg',
            model: "Sedan",
            year: "2003",
            status: "UN-AVAILABLE",
            lsInspectionDate: "2024/3"
        } , 
        {
            image: './../img/sportsCar.jpg',
            model: "Sports Car",
            year: "2012",
            status: "AVAILABLE",
            lsInspectionDate: "2024/1"
        } , 
        {
            image: './../img/suv.jpg',
            model: "SUV",
            year: "2020",
            status: "UN-AVAILABLE",
            lsInspectionDate: "2024/6"
        } , 
        {
            image: './../img/pickupTruck.jpg',
            model: "Pickup Truck",
            year: "2017",
            status: "UN-AVAILABLE",
            lsInspectionDate: "2024/12"
        } , 
        {
            image: './../img/minivan.jpg',
            model: "Minivan",
            year: "2010",
            status: "AVAILABLE",
            lsInspectionDate: "2024/4"
        } , 
        {
            image: './../img/crossover.jpg',
            model: "Cross Over",
            year: "2018",
            status: "AVAILABLE",
            lsInspectionDate: "2024/2"
        },
        {
            image: './../img/car1.jpg',
            model: "sedan",
            year: "2002",
            status: "AVAILABLE",
            lsInspectionDate: "2024/5"
        },
        {
            image: './../img/coupe.jpg',
            model: "Coupe",
            year: "2011",
            status: "AVAILABLE",
            lsInspectionDate: "2024/2"
        },
        {
            image: './../img/sedan.jpg',
            model: "Sedan",
            year: "2003",
            status: "UN-AVAILABLE",
            lsInspectionDate: "2024/3"
        },
        {
            image: './../img/sportsCar.jpg',
            model: "Sports Car",
            year: "2012",
            status: "AVAILABLE",
            lsInspectionDate: "2024/1"
        },
        {
            image: './../img/suv.jpg',
            model: "SUV",
            year: "2020",
            status: "UN-AVAILABLE",
            lsInspectionDate: "2024/6"
        }
    ];
    const vehicles_table_body = document.querySelector("#vehicles_table tbody");
    const editVehiclesModal = document.querySelector('.vehicles-management .modal.edit');
    const addVehiclesModal = document.querySelector('.vehicles-management .modal.add');

    // to get access to the element that I updated because can't but it's id as argument in saveChanges function
    var editedVehicleId = null; 

    function addAllElements() {
        for (let i = 0; i < vehicles_data.length; i++) {

            vehicles_table_body.innerHTML += `
                <tr id = "vehicle_id${i + 1}">
                    <td class="id">${i + 1}</td>
                    <td class="img-cell">
                        <img src= "${vehicles_data[i].image}" alt="Vehicle Image" />
                    </td>
                    <td class = "model">${vehicles_data[i].model}</td>
                    <td class = "year">${vehicles_data[i].year}</td>
                    <td class = "status">${vehicles_data[i].status}</td>
                    <td class = "lsInspectionDate">${vehicles_data[i].lsInspectionDate}</td>
                    <td> 
		         		<button class="edit">
		         			<i onclick = "edit('${i + 1}', '${vehicles_data[i].image}', '${vehicles_data[i].model}', '${vehicles_data[i].year}', '${vehicles_data[i].status}', '${vehicles_data[i].lsInspectionDate}' )" 
                             class="fa-regular fa-pen-to-square"></i> 
		         		</button> 
		         		<button>
		         			<i onclick = "deleteEle(${i + 1})" class="fa-regular fa-trash-can"></i> 
		         		</button> 
		         	</td> 
                </tr>
            `;
        }

    }

    addAllElements(); 

    function showAddModal() {
        addVehiclesModal.style.display = "block"; 
    }
    function addVehicle() {
        const modelValue = document.querySelector('.vehicles-management .modal.add #modelInput').value
        const yearValue = document.querySelector('.vehicles-management .modal.add #yearInput').value
        const statusValue = document.querySelector('.vehicles-management .modal.add #statusInput').value
        const lsInspectionDateValue = document.querySelector('.vehicles-management .modal.add #lsInspectionDateInput').value; 

        vehicles_table_body.innerHTML += `
                <tr id = "vehicle_id${vehicles_data.length + 1}">
                    <td class="id">${vehicles_data.length + 1}</td>
                    <td class="img-cell">
                        <img src= "./../img/pickupTruck.jpg" alt="Vehicle Image" />
                    </td>
                    <td class = "model">${modelValue}</td>
                    <td class = "year">${yearValue}</td>
                    <td class = "status">${statusValue}</td>
                    <td class = "lsInspectionDate">${lsInspectionDateValue}</td>
                    <td> 
		         		<button class="edit">
		         			<i onclick = "edit('${vehicles_data.length + 1}', './../img/pickupTruck.jpg', '${modelValue}', '${yearValue}', '${statusValue}', '${lsInspectionDateValue}' )" 
                             class="fa-regular fa-pen-to-square"></i> 
		         		</button> 
		         		<button>
		         			<i onclick = "deleteEle(${vehicles_data.length + 1})" class="fa-regular fa-trash-can"></i> 
		         		</button> 
		         	</td> 
                </tr>
            `;
        cancelForm('add'); 
    }
    function edit(id , image , model , year , status , lsInspectionDate) {
        editVehiclesModal.style.display = "block";
        editVehiclesModal.querySelector('.modal-body').innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <form>
                            <div>
                                <label for = "modelInput">Model</lable>
                                <input id = "modelInput" type = "text" value = "${model}"/>
                            </div>
                            <div>
                                <label for = "yearInput">Year</lable>
                                <input id = "yearInput" type = "text" value = "${year}"/>
                            </div>
                            <div>
                                <label for = "statusInput">Status</lable>
                                <select id = "statusInput" >
                                    <option ${status === 'AVAILABLE' && 'selected'} value = "AVAILABLE">AVAILABLE</option>
                                    <option ${status === 'UN-AVAILABLE' && 'selected'} value = "UN-AVAILABLE">UN-AVAILABLE</option>
                                </select>
                            </div>
                            <div>
                                <label for = "lsInspectionDateInput">Last Inspection Date</lable>
                                <input id = "lsInspectionDateInput" type = "text" value = "${lsInspectionDate}"/>
                            </div>
                        </form>
                        <p class="card-text"><small class="text-body-secondary">Vehicle ID : ${id}</small></p>
                      </div>
                    </div>
                </div>
            </div>
        ` ; 

        editedVehicleId = id; 
    }

    // vehicles management functions

    function search(type) {
        const searchBar = document.querySelector('.vehicles-management #search').value;
        const filterOption = document.querySelector('.vehicles-management .search-and-add select').value;
        vehicles_table_body.innerHTML = ''

        if (type == 'all') {
            addAllElements();
        }
        else {
            for (let i = 0; i < vehicles_data.length; i++) {
                if (
                    (filterOption === 'model' && vehicles_data[i].model === searchBar) ||
                    (filterOption === 'year' && vehicles_data[i].year === searchBar) ||
                    (filterOption === 'status' && vehicles_data[i].status === searchBar)
                ) {
                    
                    vehicles_table_body.innerHTML += `
                        <tr id = "vehicle_id${i + 1}">
                            <td class="id">${i + 1}</td>
                            <td class="img-cell">
                                <img src= "${vehicles_data[i].image}" alt="Vehicle Image" />
                            </td>
                            <td class = "model">${vehicles_data[i].model}</td>
                            <td class = "year">${vehicles_data[i].year}</td>
                            <td class = "status">${vehicles_data[i].status}</td>
                            <td class = "lsInspectionDate">${vehicles_data[i].lsInspectionDate}</td>
                            <td> 
		         		        <button class="edit">
		         			        <i onclick = "edit('${i + 1}', '${vehicles_data[i].image}', '${vehicles_data[i].model}', '${vehicles_data[i].year}', '${vehicles_data[i].status}', '${vehicles_data[i].lsInspectionDate}' )" 
                                     class="fa-regular fa-pen-to-square"></i> 
		         		        </button> 
		         		        <button>
		         			        <i onclick = "deleteEle(${i + 1})" class="fa-regular fa-trash-can"></i> 
		         		        </button> 
		         	        </td> 
                        </tr>`

                }
            }
        }
    }
    function saveChanges() {
        const editedTr = document.getElementById(`vehicle_id${editedVehicleId}`);

        editedTr.querySelector('.model').innerHTML = document.getElementById("modelInput").value; 
        editedTr.querySelector('.year').innerHTML = document.getElementById("yearInput").value; 
        editedTr.querySelector('.status').innerHTML = document.getElementById("statusInput").value; 
        editedTr.querySelector('.lsInspectionDate').innerHTML = document.getElementById("lsInspectionDateInput").value; 

        cancelForm('edit'); 
    }
    function cancelForm(modal) {
        if (modal == 'edit') {
            editVehiclesModal.style.display = "none";;
        }
        else {
            addVehiclesModal.style.display = "none"; 
        }
    }
    function deleteEle(id) {
        const tr = document.getElementById(`vehicle_id${id}`)
        tr.remove(); 
    }
}
// end vehicles management