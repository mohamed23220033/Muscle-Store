# 💪 Muscle Store

A modern, responsive React e-commerce UI for gym lovers and supplement brands. Designed to showcase products like whey, creatine, and mass gainers with style, clarity, and simplicity.

---

## 🚀 Live Demo

🔗 [Click here to visit the store](https://mohamed23220033.github.io/Muscle-Store)

---

## 🖼️ UI Previews

### 🔥 Hero Section
![Hero Section](Capture.jpg)

### 🏆 Featured Products
![Products Section](./assets/images/products-section.jpg)

### 📬 Subscribe for Offers
![Subscribe Section](./assets/images/subscribe-section.jpg)

---

## 📦 Features

- 🌗 Light & Dark mode toggle
- 🛒 Add to Cart interface
- 🔍 Product filtering & browsing
- 💬 Call to action and newsletter sections
- 🧱 Component-based architecture with React

---

## 🧠 Why Muscle Store?

| Benefit              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| 🚀 Fast Performance  | Optimized layout using functional React components                          |
| 📱 Mobile Friendly   | Responsive design for all devices                                           |
| 🔧 Easy to Maintain  | Clean and modular code for easy expansion                                   |
| 💅 Modern UI         | Uses modern design principles to attract fitness audiences                  |
| 💬 Informative Cards | Each product includes details, rating, and instant order button             |

---

## 🛠 Tech Stack

| Tech          | Description              |
|---------------|--------------------------|
| React JS      | Main UI framework        |
| HTML & CSS    | Structure and styling    |
| JavaScript    | Functionality & logic    |
| GitHub Pages  | Deployment platform      |

---

## 📊 Visual Insights

### 🧩 Component Relationship Diagram

```mermaid
graph TD;
    App --> Header
    App --> Footer
    App -->|Routing| Home
    Home --> HeroSection
    Home --> FeaturedProducts
    Home --> SubscribeSection
    FeaturedProducts --> ProductCard
