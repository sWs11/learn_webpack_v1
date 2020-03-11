import Post from "./Post";
import './styles/style.css';
import logo from './assets/img.png';

const post = new Post('Post title changed', logo);

console.log('post.toString: ', post.toString());