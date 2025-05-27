document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buttons button');
  const boxContainer = document.getElementById('box-container');
  let box = null;
  let animationTimeout = null;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const day = button.getAttribute('data-day');
    });
  });
});

const dayColors = {
  Monday: {
    start: '#FFD700',  
    end:   '#FFF7CC'    
  },
  Tuesday: {
    start: '#FF69B4',   
    end:   '#FFD9E6'    
  },
  Wednesday: {
    start: '#32CD32',   
    end:   '#DBFFDE'    
  },
  Thursday: {
    start: '#FF8C00',   
    end:   '#FFE5CC'    
  },
  Friday: {
    start: '#1E90FF',   
    end:   '#DBE9FF'    
  },
  Saturday: {
    start: '#8A2BE2',   
    end:   '#E6DBFF'    
  },
  Sunday: {
    start: '#FF6347',   
    end:   '#FFD7CC'    
  }
};

button.addEventListener('click', () => {
  const day = button.getAttribute('data-day');
  const colors = dayColors[day];

  if (box) {
    boxContainer.removeChild(box);
    box = null;
    clearTimeout(animationTimeout);
  }

  box = document.createElement('div');
  box.classList.add('animated-box');
  box.style.top = '0px';
  box.style.backgroundColor = colors.start;
  box.style.boxShadow = `0 6px 15px ${colors.start}99`; 
  boxContainer.appendChild(box);

  box.getBoundingClientRect(); // force layout

  animationTimeout = setTimeout(() => {
    box.style.top = '110px';
    box.style.backgroundColor = colors.end;
    box.style.boxShadow = `0 10px 30px ${colors.end}bb`;
  }, 100);
});
