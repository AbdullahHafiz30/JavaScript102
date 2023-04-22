class vehicle {
    constructor(name, company, ID) {
        this.name = name;
        this.company = company;
        this.ID = ID;
    }
}

class car extends vehicle {
    constructor(name, company, ID, carType) {
        super(name, company, ID)
        this.carType = carType;
    }
}

class plane extends vehicle {
    constructor(name, company, ID, planeType) {
        super(name, company, ID)
        this.planeType = planeType;
    }
}

class employee {
    constructor(name, DOB, ID) {
        this.name = name;
        this.DOB = DOB;
        this.ID = ID;
    }
}

class driver extends employee {
    constructor(name, DOB, ID, licenseID) {
        super(name, DOB, ID);
        this.licenseID = licenseID;
    }
}

class pilot extends employee {
    constructor(name, DOB, ID, licenseID) {
        super(name, DOB, ID);
        this.licenseID = licenseID;
    }
}

class reservations {
    constructor(reservationDate, employeeId, vehiclesId, reservationID) {
        this.reservationDate = '';
        this.employeeId = '';
        this.vehiclesId = '';
        this.reservationID = '';
    }
}

const cars = [
    { name: 'camry', company: 'toyota', ID: 1001, carType: 'gas' },
    { name: 'corella', company: 'toyota', ID: 1002, carType: 'gas' },
    { name: 'crown victoria', company: 'ford', ID: 1003, carType: 'gas' }
]

const drivers = [
    { name: 'ahmed', DOB: '1995/6/7', ID: 101, licenseID: 11111 },
    { name: 'abdullah', DOB: '1986/8/7', ID: 102, licenseID: 22222 },
    { name: 'mohammed', DOB: '1992/4/16', ID: 103, licenseID: 33333 }
]

const planes = [
    { name: 'air123', company: 'boeing', ID: 10001, planesType: 'boeing 737' },
    { name: 'air321', company: 'boeing', ID: 10002, planesType: 'boeing 373' }
]

const pilots = [
    { name: 'mike', DOB: '1985/9/9', ID: 104, licenseID: 44444 },
    { name: 'ahmed', DOB: '1998/4/16', ID: 105, licenseID: 55555 }
]

function findCarByID(ID) {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].ID === ID) {
            return cars[i];
        }
    }
    return null;
}

function findPlanesByID(ID) {
    for (let i = 0; i < planes.length; i++) {
        if (planes[i].ID === ID) {
            return planes[i];
        }
    }
    return null;
}

function findDriverByID(ID) {
    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].ID === ID) {
            return drivers[i];
        }
    }
    return null;
}

function findPilotByID(ID) {
    for (let i = 0; i < pilots.length; i++) {
        if (pilots[i].ID === ID) {
            return pilots[i];
        }
    }
    return null;
}

function isVehicleAssignedToEmployee(vehicleID, employeeID) {
    let assigned = false;
    cars.forEach(car => {
        if (car.ID === vehicleID && drivers.some(driver => driver.ID === employeeID)) {
            assigned = true;
        }
    });
    planes.forEach(plane => {
        if (plane.ID === vehicleID && pilots.some(pilot => pilot.ID === employeeID)) {
            assigned = true;
        }
    });
    return assigned;
}

const reservationss = [];

function makeReservation(vehicleID, employeeID, reservationDate) {
    if (isVehicleAssignedToEmployee(vehicleID, employeeID)) {
        const reservationID = reservationss.length + 1;
        reservationss.push({ reservationID, vehicleID, employeeID, reservationDate });
        return true;
    }
    return false;
}

makeReservation(1002, 102, '2022-10-1') //car with driver
makeReservation(10002, 104, '2022-10-2') //plane with pilot
makeReservation(1001, 101, '2022-10-7') //car with driver
makeReservation(10001, 105, '2022-10-12') //plane with pilot
makeReservation(1003, 103, '2022-10-13') //car with driver
makeReservation(1002, 105, '2022-10-3') //car with pilot
makeReservation(10001, 101, '2022-10-4') //plane with driver

console.log(reservationss);