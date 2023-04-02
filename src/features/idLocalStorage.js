export const setIdLocalStorage = (id,tasks) =>
    localStorage.setItem(id, JSON.stringify(tasks));

export const getIdLoaclStorage = (id) =>
    JSON.parse(localStorage.getItem(id)) || [];