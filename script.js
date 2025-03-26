// Predefined questions and their answers
const predefinedQuestions = {
    "what are the extra features in your hotel?": "Our hotel offers a variety of extra features to enhance your stay:\n" +
        "- Complimentary breakfast\n" +
        "- Free Wi-Fi throughout the property\n" +
        "- 24-hour fitness center\n" +
        "- Outdoor swimming pool\n" +
        "- On-site restaurant and bar\n" +
        "- Business center with meeting rooms\n" +
        "- Concierge services\n" +
        "- Airport shuttle service",
    
    "how do i book a room at your hotel?": "To book a room at our hotel:\n" +
        "- Visit our website and use the booking form.\n" +
        "- Call our reservation desk at [+91 99098 87521].\n" +
        "- Use a third-party booking site like Booking.com or Expedia.\n" +
        "- Walk-in and book directly at the front desk.",
    
    "what are some unique amenities offered by your hotel?": "Unique amenities at our hotel include:\n" +
        "- Rooftop lounge with panoramic city views\n" +
        "- Spa and wellness center\n" +
        "- Pet-friendly rooms and services\n" +
        "- Kids' play area and babysitting services\n" +
        "- Eco-friendly initiatives and green practices", 
    
    "how can i arrange for a special event at your hotel?": "To arrange a special event at our hotel:\n" +
        "- Contact our events coordinator at [hevanonearth@gmail.com/+91 99098 87521].\n" +
        "- Discuss your requirements and preferences.\n" +
        "- Choose from our range of event spaces and packages.\n" +
        "- Confirm the booking and make necessary arrangements.",
    
    "can i get transportation services from the hotel?": "Yes, we offer transportation services:\n" +
        "- Complimentary airport shuttle service.\n" +
        "- Car rental services available on-site.\n" +
        "- Taxi and ride-sharing services can be arranged by our concierge.\n" +
        "- Shuttle services to popular local attractions.",
    
    "what dining options are available at your hotel?": "Our hotel offers a variety of dining options:\n" +
        "- On-site restaurant serving breakfast, lunch, and dinner\n" +
        "- 24-hour room service\n" +
        "- Bar and lounge with a selection of drinks and snacks\n" +
        "- Coffee shop for quick bites and beverages",
    
    "do you offer any packages or special deals?": "Yes, we offer several packages and special deals:\n" +
        "- Weekend getaway packages\n" +
        "- Honeymoon and romantic packages\n" +
        "- Family vacation packages\n" +
        "- Business travel deals\n" +
        "- Seasonal promotions and discounts",
    
    "what safety measures are in place at your hotel?": "We prioritize the safety of our guests with the following measures:\n" +
        "- 24-hour security personnel\n" +
        "- CCTV surveillance in common areas\n" +
        "- Key card access to rooms and facilities\n" +
        "- Regular sanitization and cleaning protocols\n" +
        "- Emergency response plan and trained staff",
    
    "what is your hotel's cancellation policy?": "Our cancellation policy is as follows:\n" +
        "- Free cancellation up to 24 hours before check-in.\n" +
        "- A fee may apply for cancellations made within 24 hours of check-in.\n" +
        "- No-shows will be charged the full amount of the stay.",
    
    "do you offer loyalty programs or rewards?": "Yes, we offer a loyalty program for our guests:\n" +
        "- Earn points for each stay.\n" +
        "- Redeem points for free nights, upgrades, and other perks.\n" +
        "- Enjoy exclusive member-only offers and discounts.\n" +
        "- Early check-in and late check-out options for members.",
    
    "are there any nearby attractions or activities?": "Our hotel is conveniently located near several attractions and activities:\n" +
        "- [park]\n" +
        "- [beach]\n" +
        "- [temples]\n" +
        "- Guided tours and excursions can be arranged by our concierge.\n" +
        "- Maps and brochures are available at the front desk."
};

// Function to display the answer based on the question
function showAnswer(question) {
    const normalizedQuestion = question.toLowerCase().trim();
    const answer = predefinedQuestions[normalizedQuestion] || "Sorry, Iam Predefined Chatbot How Can I Help You. Please choose from the suggested questions.";
    document.getElementById('answer').innerText = answer;
}

// Function to process user input
function processUserInput() {
    const userInput = document.getElementById('user-question').value;
    showAnswer(userInput);
}
