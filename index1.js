const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3002;

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

let posts = [
  {
    id: 1,
    title: 'Exploring Beautiful Beaches',
    description: 'Discover the hidden gems of serene beaches around the world.',
    picture: 'https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg',
    content: 'This blog post takes you on a virtual tour of some of the most beautiful and tranquil beaches on Earth.',
  },
  {
    id: 2,
    title: 'A Culinary Journey: Local Delicacies',
    description: 'Embark on a culinary adventure and savor the flavors of local delicacies.',
    picture: 'https://www.packaging-gateway.com/wp-content/uploads/sites/16/2021/10/Unique.jpg',
    content: 'Indulge your taste buds as we explore the rich and diverse world of local cuisines, from street food to gourmet delights.',
  },
  {
    id: 3,
    title: 'Hiking in Majestic Mountains',
    description: 'Experience the thrill of hiking in breathtaking mountain landscapes.',
    picture: 'https://www.realsimple.com/thmb/oVzxWXKptXhpjxXWz5k2QOK654s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg',
    content: 'Join us on a virtual journey through majestic mountain ranges, sharing tips on hiking trails and enjoying spectacular views.',
  },
  {
    id: 4,
    title: 'Artistic Wonders: Street Murals',
    description: 'Dive into the world of street art and discover the stories behind vibrant murals.',
    picture: 'https://streetartutopia.com/wp-content/uploads/2023/05/kidd-with-bigg-eyes-in-by-Dequete-in-Uberlandia-Brazil.jpg',
    content: 'Explore the streets adorned with colorful murals, each telling a unique story and adding character to the cityscape.',
  },
];

// Get all blog posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Get a specific blog post
app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }

  res.json(post);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
