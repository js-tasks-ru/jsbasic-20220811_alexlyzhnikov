  function highlight(table) {
    const trCollect = table.children[1].rows;
    for (let tr of trCollect) {
      let availableCell = tr.cells[3];
      if (availableCell.hasAttribute("data-available")) {
            switch (availableCell.dataset.available) {
                case "true":
                    tr.classList.add("available");
                    break;
                case "false":
                    tr.classList.add("unavailable");
            }
        }
        else  {
          tr.hidden = true;
        }
      }
        
    for (let tr of trCollect) {
      let gender = tr.cells[2].textContent;
          if (gender == "m") {
              tr.classList.add("male");
          } else if (gender == "f") {
              tr.classList.add("female");
          }
    
      let age = +tr.cells[1].textContent;
      if (age < 18) tr.style.textDecoration = "line-through";
    }
  }