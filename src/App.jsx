import PostsList from './features/posts/postsList';
import AddPostForm from './features/posts/AddPostForm';
function App() {
  return (
    <main className="app">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
