# Social Media Platform Frontend

## 📌 Project Goal
The goal of this project is to apply JavaScript knowledge to implement the front-end functionality of a social media application. The application should be attractive, responsive, and interact seamlessly with the provided Social API.

---

## 📡 API Integration
This project utilizes the **Noroff Social API**, specifically the **Social Endpoints**, to enable social media functionalities. The API requires both a **JWT token** and an **API Key** for authentication.

📌 **API Documentation:** [Noroff API Documentation](https://docs.noroff.dev/docs/v2)

📌 **Authentication:** To access protected routes, users must:
- Register an account and log in to obtain a **JWT token**
- Generate an **API Key** (Refer to API documentation)

**HTTP Methods Used:**
- `GET` - Retrieve posts and user data
- `POST` - Create new posts and user accounts
- `PUT` - Update existing posts and profile data
- `DELETE` - Remove posts or user-generated content

---

## 🚀 Features
### ✅ **Required Features**
- Users with `@noroff.no` or `@stud.noroff.no` email can register
- Users can log in
- Users can view a content feed
- Users can filter and search posts
- Users can view post details by ID
- Users can create, update, and delete posts
- Users can comment on posts
- Users can follow/unfollow profiles
- Users can react to posts

---

## 📂 Installation & Setup
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/AndrewMoisa/Vibely.git
   cd YOUR_REPOSITORY
   ```

2. **Install Dependencies (if any):**
   ```sh
   npm install
   ```

3. **Run the Application:**
   - Open `index.html` in a browser
   - Alternatively, use a local development server such as:
     ```sh
     npx live-server
     ```

4. **Setup API Authentication:**
   - Register an account to get a **JWT token**
   - Generate an **API Key**
   - Store the token securely using `localStorage`

---

## 📑 Usage
- **Register/Login:** Users must sign up with a valid Noroff email.
- **Browsing Posts:** Posts can be viewed in a feed with filtering and search options.
- **Creating Posts:** Users can add new posts with text and media.
- **Editing & Deleting:** Users can modify or remove their own posts.
- **Profile Management:** Users can update profile details and images.

---

## 🛠️ Technologies Used
- **JavaScript (ES6+)** - Core language for front-end logic
- **HTML & CSS** - UI design
- **LocalStorage** - Storing JWT tokens
- **CSS Framework** - For styling with Tailwind CSS

---

## 📢 Contribution Guidelines
Interested in contributing?
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request for review

---

## 📌 Important Notes
- **Original, pure JavaScript** must be used for core functionality.
- **Content posted to the API is public** – maintain appropriate and respectful content.
- `.gitignore` must include `node_modules` to prevent unnecessary tracking.

---

## 📬 Contact
If you have any questions, feel free to reach out!
- **Email:** [andymoisa7@gmail.com](andymoisa7@gmail.com)
- **GitHub:** [@AndrewMoisa](https://github.com/AndrewMoisa)

