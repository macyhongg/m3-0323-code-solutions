export default function readItems() {
  return new Promise((resolve, reject) => {
    console.log(
      'Reading items; this should only be called once! (Twice in Strict Mode)'
    );
    setTimeout(() => {
      Math.random() >= 0.2
        ? resolve([
            { id: 8, name: 'Harry Houdini' },
            { id: 12, name: 'Dorothy Dietrich' },
            { id: 3, name: 'Criss Angel' },
            { id: 42, name: 'Dean Gunnarson' },
            { id: 95, name: 'Robert Gallup' },
          ])
        : reject(new Error('What bad luck!'));
    }, 1000);
  });
}
