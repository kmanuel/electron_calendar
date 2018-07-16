const storeEntry = (year, month, day, hours, title, description) => {
    const entries = fetchEntries(year, month, day);

    entries.push({hours, title, description});

    localStorage.setItem(createKey(year, month, day), JSON.stringify(entries));

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

const createKey = (year, month, day) => `${year}-${month}-${day}`;


export {storeEntry, fetchEntries};