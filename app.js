let app = {
    name: 'Ye Min Aung',
    age: 19,
    uni: 'MIIT',
};

for (const key in app) {
    console.log(`${key} => ${app[key]}`);
}
