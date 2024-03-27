// Array of event objects
const events = [
    {
      title: "Event 1",
      date: "January 1, 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "images/12.jpeg"
    },
    {
      title: "Event 2",
      date: "February 15, 2024",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "images/12.jpeg"
    },
    // Add more events as needed
  ];
  
  // Function to generate event cards
  function generateEventCards() {
    const container = document.getElementById("event-container");
  
    events.forEach(event => {
      // Create card element
      const card = document.createElement("div");
      card.classList.add("card");
  
      // Create image element
      const img = document.createElement("img");
      img.src = event.image;
      img.alt = event.title;
  
      // Create title element
      const title = document.createElement("h2");
      title.textContent = event.title;
  
      // Create date element
      const date = document.createElement("p");
      date.textContent = `Date: ${event.date}`;
  
      // Create description element
      const description = document.createElement("p");
      description.textContent = event.description;
  
      // Append elements to card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(date);
      card.appendChild(description);
  
      // Append card to container
      container.appendChild(card);
    });
  }
  
  // Generate event cards when the page loads
  window.addEventListener("DOMContentLoaded", generateEventCards);
  