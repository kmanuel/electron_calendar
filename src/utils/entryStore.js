const uniqid = require('uniqid');

const storeEntry = (year, month, day, hours, title, description) => {
    const entries = fetchEntries(year, month, day);

    const newEntry = {
        id: uniqid(),
        hours,
        title,
        description
    };
    entries.push(newEntry);

    localStorage.setItem(createKey(year, month, day), JSON.stringify(entries));

    return newEntry.id;

};

const fetchEntries = (year, month, day) => {
    const key = createKey(year, month, day);
    const entries = JSON.parse(localStorage.getItem(key));
    if (entries) {
        return entries;
    } else {
        return [];
    }
};

const fetchAppointment = (year, month, day, id) => {
    return fetchEntries(year, month, day).filter(e => e.id === id)[0];
};

const createKey = (year, month, day) => `${year}-${month}-${day}`;


export {storeEntry, fetchEntries, fetchAppointment};