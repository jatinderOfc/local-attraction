# How to Guide - New Delhi Tourism Website

Welcome! This guide will help you add new attractions, update existing ones, and customize the website. Don't worry if you're new to coding - we'll explain everything step by step! 😊

## 📁 Understanding the Project Structure

Your website has these important files:

- `index.html` - The main webpage structure
- `styles.css` - All the colors, fonts, and styling
- `script.js` - The interactive features (carousel, filters, modals)
- `assets/scripts/attractions.js` - **This is where all attractions are stored!**
- `assets/images/` - **This is where all images are stored!**

## ✨ How to Add a New Attraction

### Step 1: Add the Image

1. Find a good quality image of the attraction (JPG or PNG format)
2. Save it with a simple name using lowercase letters and hyphens
   - Example: `connaught-place.jpg` or `raj-ghat.jpg`
3. Copy the image file into the `assets/images/` folder
4. Remember the exact filename - you'll need it in the next step!

### Step 2: Add the Attraction Data

1. Open the file `assets/scripts/attractions.js` in a text editor
2. You'll see a list of attractions that looks like this:

```javascript
const attractions = [
  {
    id: 1,
    name: "Red Fort",
    category: "Historical Monument",
    image: "./assets/images/red-fort.jpg",
    description: "A long description here...",
    details: {
      timings: "9:30 AM - 4:30 PM",
      entryFee: "₹35 (Indians), ₹500 (Foreigners)",
      bestTime: "October to March",
      location: "Netaji Subhash Marg, Old Delhi",
    },
  },
  // ... more attractions
];
```

3. To add a new attraction, copy one of the existing attraction blocks (the part between `{` and `},`)
4. Paste it at the end of the list, but **before the closing `];`**
5. Update all the information:

**Example - Adding Connaught Place:**

```javascript
{
  id: 11,  // ⚠️ IMPORTANT: Use the next number (11, 12, 13, etc.)
  name: "Connaught Place",
  category: "Market & Food",  // Choose from the categories below
  image: "./assets/images/connaught-place.jpg",  // Use your image filename
  description: "Connaught Place is a famous shopping and business district in New Delhi. It's known for its circular design, colonial architecture, and vibrant markets.",
  details: {
    timings: "10:00 AM - 9:00 PM",
    entryFee: "Free",
    bestTime: "Evening",
    location: "Connaught Place, Central Delhi",
  },
},
```

6. Make sure to:
   - ✅ Use a unique `id` number (11, 12, 13, etc.)
   - ✅ Match the image filename exactly (case-sensitive!)
   - ✅ Add a comma `,` after the closing `}`

### Step 3: Test Your Changes

1. Save the file
2. Open `index.html` in a web browser
3. Scroll down to see your new attraction in the grid!
4. Click on it to see the full details in the modal

## 🎨 Available Categories

When adding an attraction, you can use these categories:

- `"Historical Monument"` - For forts, monuments, historical sites
- `"War Memorial"` - For memorials and war-related sites
- `"Religious Site"` - For temples, mosques, churches, gurudwaras
- `"Market & Food"` - For markets, shopping areas, food streets
- `"Park & Nature"` - For parks, gardens, nature spots
- `"Museum"` - For museums and galleries

**Note:** The category you choose will determine which filter button shows your attraction!

## 📝 How to Edit an Existing Attraction

1. Open `assets/scripts/attractions.js`
2. Find the attraction you want to edit (use Ctrl+F or Cmd+F to search by name)
3. Change any of the information:
   - `name` - The title
   - `description` - The longer description text
   - `details.timings` - Opening hours
   - `details.entryFee` - Ticket prices
   - `details.bestTime` - Best time to visit
   - `details.location` - Address or location
4. Save the file and refresh your browser to see changes

## 🖼️ How to Change an Image

### Option 1: Replace an Existing Image

1. Find the image file in `assets/images/` folder
2. Replace it with a new image but **keep the same filename**
   - Example: Replace `red-fort.jpg` with a new image, but still name it `red-fort.jpg`
3. Refresh your browser

### Option 2: Use a Different Image File

1. Add your new image to `assets/images/` folder
2. Open `assets/scripts/attractions.js`
3. Find the attraction and change the `image` path:
   ```javascript
   image: "./assets/images/your-new-image.jpg",
   ```
4. Save and refresh

## 🎯 How to Change Which Attractions are Featured

The first 4 attractions in the list automatically appear in the carousel at the top!

1. Open `assets/scripts/attractions.js`
2. Move any attraction to positions 1-4 in the array
3. The order in the file determines the order on the website

## 🎨 How to Change Colors and Styling

1. Open `styles.css`
2. Look for these color variables at the top:
   ```css
   :root {
     --primary: #ff6b35; /* Main orange color */
     --secondary: #004e89; /* Main blue color */
     --accent: #ffa726; /* Accent orange */
   }
   ```
3. Change the color codes (you can use [color pickers online](https://htmlcolorcodes.com/))
4. Save and refresh to see new colors!

## 🐛 Troubleshooting

### My new attraction doesn't show up!

- ✅ Check that you added a comma `,` after the previous attraction
- ✅ Make sure the `id` number is unique
- ✅ Verify the image filename matches exactly (check spelling and case)
- ✅ Make sure the image file exists in `assets/images/` folder

### The image doesn't load!

- ✅ Check the image filename matches exactly (including .jpg or .png)
- ✅ Make sure the image is in the `assets/images/` folder
- ✅ Check for typos in the image path: `./assets/images/filename.jpg`

### The filter doesn't work for my attraction!

- ✅ Make sure you used one of the exact category names (see list above)
- ✅ Check for typos in the category name
- ✅ Make sure it's in quotes: `category: "Historical Monument"`

### The website looks broken!

- ✅ Check that all your commas `,` and brackets `{}` are correct
- ✅ Make sure you didn't accidentally delete any closing brackets `]` or `}`
- ✅ Try copying the format of an existing attraction exactly

## 💡 Tips for Great Attractions

1. **Good Images:**

   - Use high-quality images (at least 800x600 pixels)
   - Make sure images are clear and well-lit
   - Landscape (wide) images work best

2. **Good Descriptions:**

   - Write 2-3 sentences about the attraction
   - Include interesting facts or history
   - Make it engaging and informative

3. **Accurate Information:**
   - Double-check timings and entry fees
   - Use correct location names
   - Update if information changes
