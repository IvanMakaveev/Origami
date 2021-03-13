import style from './Post.module.css';

const Post = ({
    content,
    author
}) => {
    return (
        <div className={style.post}>
            <img src="blue-origami-bird.png" alt="Original" className={style.image}/>
            <p className={style.description}>
                {content}
            </p>
            <div className={style.footer}>
                <span className={style.footerText}>
                    <small>Author: </small>
                    {author}
                </span>
            </div>
        </div>
    );
}

export default Post;
