const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const speed = 20;
  const update = () => {
    const inc = Math.ceil(target / speed);
    if (count < target) {
      count += inc;
      counter.textContent = count > target ? target : count;
      requestAnimationFrame(update);
    } else {
      counter.textContent = target;
    }
  };
  update();
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));



