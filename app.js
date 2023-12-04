import persons from "./mock.json" assert { type: "json" };

const tickerContainer = document.querySelector(".ticker-list");

persons.forEach((person) => {
  const ticker = document.createElement("div");
  ticker.className = "ticker";
  ticker.innerHTML = `
    <div>
      <img src="${person.avatar}" class="avatar">
    </div>
    <div class="content">
      <span class="name">${person.fullName}</span> <br />
      <span class="date">${person.date} ${person.time}</span>
      <p class="text">${person.content}</p>
    </div>
  `;

  tickerContainer.appendChild(ticker);
});

let createKeyFrame = document.createElement('style')

let percentage = 100 / (persons.length - 2)

let heightItem = 143 * (persons.length - 3)


createKeyFrame.innerHTML = `
  @keyframes ticker {
    0% { margin-top: -${heightItem}px}
    ${Array.from({ length: persons.length }, (_, i) => {
        const index = i + 1;
        const translateYValue = heightItem - 143 * index;
        const marginValue = -translateYValue;
        return `${percentage * index}% { margin-top: ${marginValue}px}`;
    }).join('\n')}
    100% { margin-top: -${heightItem}px}
  }

  .ticker-list { margin-top : -${heightItem}px }
  `;


tickerContainer.appendChild(createKeyFrame)
