
function findMaxId(employees) {
    let maxId = -Infinity;
    for (const employee of employees) {
        const id = parseInt(employee.id);
        if (id > maxId) {
            maxId = id;
        }
    }
    return maxId;
}

module.exports = {
    findMaxId: findMaxId
};