import ArticleListItem from "../articles/ArticleListItem";
import NoImageArticleListItem from "../Articles/NoImageArticleListItem";
import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";

const EssayPreview = ({ article }) => {
    const { title, author, publishedAt, excerpt, slug, imageURL } = article;
    return (
      


        <li>
                  <div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-preamble">
                      <span class="c-txt c-txt_catMeta2">Essay</span>
                    </div>
                    {/* <Link href={`/articles/${slug}`}>
            {imageURL && (
              <img
                className={styles["img-responsive"]}
                class="img-responsive o-card-media_bookAspect_img"
                src={imageURL}
                alt={title}
              />
            )}
          </Link> */}
                    <div class="c-feature-hd">
                      <h2 class="c-hdgSerif c-hdgSerif_3">
                      <Link href={`/articles/${slug}`}>{title}</Link>
                      </h2>
                    </div>
                    <div>
<p className="cormorant-garamond">{excerpt.split(" ")
  .slice(0, 27)
  .join(" ") }</p>
</div>
                    <div class="c-feature-sub">
                      <span class="c-txt c-txt_attribution">
                        By {author}
                      </span>
                    </div>
                  </div>
                </li>




    );
  };
  
  export default EssayPreview;