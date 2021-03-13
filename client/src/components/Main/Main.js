import style from './Main.module.css';
import Post from './../Post';

const Main = ({
    posts
}) => {
    return (
        <main className={style.main}>
            <h1 className={style.heading}>Sooooome heading</h1>

            <div className={style.posts}>
                {posts.map(x =>
                    <Post
                        key={x.id}
                        content={x.content}
                        author={x.author}
                    />
                )}
            </div>
        </main>
    );
}

export default Main;
