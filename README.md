# RS Motors

This is a full-stack application built using Next.js and MongoDB for selling second-hand vehicles. The app features both user and admin interfaces, with functionalities such as browsing vehicles, expressing interest, and managing vehicle inventory.

## Features

### User Interface:
- **New Stock Display**: A hero section that showcases new stock with an auto-sliding gallery.
- **Vehicle Feed**: Below the hero section, users can browse all vehicles in a paginated feed with individual cards displaying vehicle details.
- **Express Interest**: Users can click the "Interested" button on any vehicle card to notify the admin. The notification is sent via email with the user's name and mobile number, enabling the admin to contact the user easily.

### Admin Interface:
- **Add New Vehicles**: Admins can add new vehicles to the marketplace through a dedicated page.
- **Dashboard**: Admins can view a list of all vehicles, with the option to mark vehicles as "sold" or "unsold."

## Tech Stack

- **Framework**: Next.js (provides both frontend and backend functionality)
- **Database**: MongoDB
- **Email Service**: NodeMailer (or any service used for sending email notifications)
  
## Live App

You can access the live application here: [Live App](https://rs-motors.vercel.app/)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB database (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/msdian0007/rs_motors.git
   cd rs_motors
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and include the following:

   ```bash
    MONGODB_URI = <Your MongoDB URI>
    AWS_ACCESS_KEY_ID = <aws acc key id>
    AWS_SECRET_ACCESS_KEY = <aws secret key>
    S3_REGION = <region>
    S3_BUCKET = <bucket name>
    
    NEXT_RUNTIME = nodejs
    NODE_ENV = development
    SECRET_KEY = <secret key>
    
    BOT_MAIL = <bot mail>
    ADMIN_EMAIL = <admin mail>
    PASSWORD = <pwd>
    
    CONTACT_NUMBER = <admin contact number>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Admin Panel

1. Navigate to `/admin` to access the admin panel.
2. Admin can add new vehicles through the "Add Vehicle" page.
3. The "Dashboard" allows the admin to view all vehicles and mark them as "sold" or "unsold."
