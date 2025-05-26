import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Buttendorf"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut id quam ut veniam vitae nostrum eos modi? Sint tenetur expedita fugit consectetur delectus voluptatem, ut, aut odio, quis omnis totam."
          />
          <Post
            author="Ana Buttendorf"
            content="Esse é o parágrafo escrito pela Ana Luisa."
          />
        </main>
      </div>
    </div>
  );
}
