const iterations = 500;

for (let i = 1; i < iterations; i++) {
  setTimeout(() => {
    fetch('http://localhost:3000').catch(() => {});
    console.log(i);
  }, 0);
}
