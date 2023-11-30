const state1 = { username: 'john', point: 100, loading: true };
const clonedState = { ...state1, loading: false, point: 75, success: true };
const clonedState1 = {...state1, loading:true, point: 50, success: false};
for (let [key, value] of Object.entries(state1)) {
    console.log(key, value);
}
for (let [key, value] of Object.entries(clonedState)) {
    console.log(key, value);
}
for (let [key, value] of Object.entries(clonedState1)) {
    console.log(key, value);
}

// console.log(clonedState);
// console.log(cloneState1);
