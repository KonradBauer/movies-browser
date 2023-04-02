export const setIdLocalStorage = (id,tasks) =>
    localStorage.setItem(id, JSON.stringify(tasks));

export const getIdLocalStorage = (id) =>
    JSON.parse(localStorage.getItem(id)) || [];