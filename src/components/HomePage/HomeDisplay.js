import ArticleListItem from "../articles/ArticleListItem";
import NoImageArticleListItem from "../Articles/NoImageArticleListItem";
import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";

const HomeDisplay = ({ articles }) => {
    if (!articles || articles.length === 0) {
      return <div>No articles available.</div>;
    }
  
    return (
//       <ul style={{ listStyleType: 'none' }}>
//     {articles.map((article) => (
//       <li key={article.id}>
//         <ArticleListItem article={article} />
//       </li>
//     ))}
//   </ul>
<div role="main" id="mainContent" class="o-site-bd  o-site-bd_flush">
            
    
        
<div class="o-wrapper">
            <div class="c-tier c-mix-tier_distant">
        <div class="o-grid o-grid_flexy o-grid_flexy_nonsequential">
                                    <div class="o-grid-col o-grid-col_9of12">
                        
<ul class="contentBlock">
                            <li class="contentBlock-item">
            

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                            
                                
                                            

    

                                                    
                    

                    
                
                        
            
        
    


                                    
                                            
                            
        

        
                










<div class="c-hero c-hero_flexy mix-hero_offsetForce">
<div class="c-hero-mantle">
    <div class="c-feature">
                            <div class="c-feature-preamble c-feature-preamble_proximate">
                <span class="c-txt c-txt_catMeta c-txt_catMeta_illuminated">Prose from <i>Poetry</i> Magazine</span>
            </div>
        
                            <div class="c-feature-hd c-feature-hd_distant">
                <h2 class="c-hdgSans c-hdgSans_1 mix-c-hdg_inverted"><a href="https://www.inverbreplae.org/poetrymagazine/articles/160085/eleven-legends">Eleven Legends</a>
                                            </h2>
            </div>
        
                        
                                            <div class="c-feature-sub c-feature-sub_distant">
                <span class="c-txt c-txt_attribution c-mix-txt_inverted">                                
        
By The Editors

        </span>
            </div>
        
                            <div class="c-feature-abstract">
                <div class="c-txt_abstract c-mix-txt_inverted"><p>Tributes to the winners of the 2022 Ruth Lilly Poetry Prize.</p></div>
            </div>
                    </div>
                    {/* <!-- end .feature --> */}
</div>
            <div class="c-hero-media c-hero-media_primary c-hero-media_secondary@small">
                            <a href="https://www.inverbreplae.org/poetrymagazine/articles/160085/eleven-legends" aria-hidden="true" tabindex="-1">
                            <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 667px) 100vw, (max-width: 1170px) calc(100vw - (15px * 2) - (22.478632478vw - 2.564102564vw)), 870px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/27/4d4335e813837df825635f99ee5cae6745d93fde.jpg?w=750&amp;h=&amp;fit=max&amp;key=2&amp;sig=a960f61369f8ba179b0ca417c83a5f4f3eff2951a2d71e627fa5d6c84418a75b&amp;750 750w, https://media.inverbreplae.org/uploads/media/default/0001/27/4d4335e813837df825635f99ee5cae6745d93fde.jpg?w=870&amp;h=&amp;fit=max&amp;key=2&amp;sig=5c857f6c200fdeafb42a9c41efc3bd939e0ee8e0d9a5326cf25887efa7dbfde2&amp;870 870w, https://media.inverbreplae.org/uploads/media/default/0001/27/4d4335e813837df825635f99ee5cae6745d93fde.jpg?w=1096&amp;h=&amp;fit=max&amp;key=2&amp;sig=7b26fa25af1633ee4582ab74ab8ed2794e21f6b16811d740c1651eab44a7899e&amp;1096 1096w, https://media.inverbreplae.org/uploads/media/default/0001/27/4d4335e813837df825635f99ee5cae6745d93fde.jpg?w=1478&amp;h=&amp;fit=max&amp;key=2&amp;sig=8eeff7f8f737c68d02fdcbb98ac47c21c3a6259d16c8df9b1ecc903aa95590ab&amp;1478 1478w, https://media.inverbreplae.org/uploads/media/default/0001/27/4d4335e813837df825635f99ee5cae6745d93fde.jpg?w=1740&amp;h=&amp;fit=max&amp;key=2&amp;sig=ed98ddde94b2d75e958fecfd89c8ccf6c5ca8ff3a077113cd647fcd95908dae0&amp;1740 1740w"
            alt="A composite of eleven black-and-white headshots of the 11 Ruth Lilly Prize winners, all against a blue background."
            class=""
            
        />
                            </a>
                    </div>
    </div>
    {/* <!-- end .hero --> */}




                

        
            

        </li>
                </ul>

                </div>
                                                        <div class="o-grid-col o-grid-col_aspectMatch o-mix-grid_col_primary@small o-grid-col_3of12">
                    <ul class="c-vList c-vList_bordered">
                                    
    
        

                
            

                            
                    


                
                        
                                                        
        
    


                    
                        
        

        
                









<li>
<div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-preamble">
            <span class="c-txt c-txt_catMeta">Poem of the Day</span>
        </div>
    
                    <div class="c-feature-hd">
            <h2 class="c-hdgSerif c-hdgSerif_3"><a href="https://www.inverbreplae.org/poetrymagazine/poems/159803/so-many-books-so-little-time">So Many Books, So Little Time</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution">                            
        
By Haki R. Madhubuti

    </span>
        </div>
            </div>
</li>







    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                            
                                
                                            

    

                                                    
                    

                    
                
                        
            
        
    


                                    
                                            
                            
        

        
                









<li>
<div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-preamble">
            <span class="c-txt c-txt_catMeta">Essay</span>
        </div>
    
                    <div class="c-feature-hd">
            <h2 class="c-hdgSerif c-hdgSerif_3"><a href="https://www.inverbreplae.org/articles/159954/icon-or-manhole">Icon or Manhole</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution">                            
        
By Eric Sneathen

    </span>
        </div>
            </div>
</li>




                

        
            

    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                            
                                
                                            

    

                                                    
                    

                    
                
                        
                                                        
        
    


                    
        
        

        
    









<li>
<div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-preamble">
            <span class="c-txt c-txt_catMeta">Featured Blogger</span>
        </div>
    
                    <div class="c-feature-hd">
            <h2 class="c-hdgSerif c-hdgSerif_3"><a href="https://www.inverbreplae.org/harriet-books/2023/04/murmurations">Murmurations</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution">                            
        
By Nilufar Karimi

    </span>
        </div>
            </div>
</li>




                

        
            

    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                            
                                
                                            

    

                                                    
                    

                    
                
                        
            
        
    


                    
        
        

        
    









<li>
<div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-preamble">
            <span class="c-txt c-txt_catMeta">Archive Editor's Note</span>
        </div>
    
                    <div class="c-feature-hd">
            <h2 class="c-hdgSerif c-hdgSerif_3"><a href="https://www.inverbreplae.org/harriet-books/2023/04/-editors-discussion-april-2023">Opening the Field: Editor’s Discussion, Spring 2023</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution">                            
        
By Robert Eric Shoemaker

    </span>
        </div>
            </div>
</li>




                

        
            

            
                    </ul>
                </div>
                            </div>
    </div>





                
                
        

        
                                                                                                
    
                

<div class="c-tier c-tier_weighted c-mix-tier_offsetDistant">
    <div class="c-tier-label">
    <span class="c-txt c-txt_herald"><p>Latest Book Reviews</p></span>
</div>

            <div class="c-tier-content">
    <ul class="o-sectionList">
        
                                                
                                
                                                    
                                    <li>
                    <ul class="o-graphBlocks o-graphBlocks_2up@xsmall o-graphBlocks_3up@medium">
                                    
    
        

                
            



                            
                    


                
                        
                                                        
        
    


                                    
        
        
        

        
    









<li>
<div class="
    o-card
    o-card_stretch
    
">
                                                            
            <a href="https://www.inverbreplae.org/harriet-books/reviews/160079/good-grief-the-ground" class="o-card-media o-card-media_bookAspect">
                <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 567px) calc(100vw - (15px * 2)), (max-width: 768px) calc((100vw - (15px * 2) - 90px) / 2), (max-width: 1170px) calc((100vw - (15px * 2) - 150px) / 3), 340px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/27/5312a0b29f87cd38725be53bc8cafeef22904a66.jpg?w=392&amp;h=566&amp;fit=crop&amp;key=2&amp;sig=59390e0da8b6c0ec48e04e6c1a904f25841eb82af55eb36201d098e76fd3bd86&amp;392 392w, https://media.inverbreplae.org/uploads/media/default/0001/27/5312a0b29f87cd38725be53bc8cafeef22904a66.jpg?w=562&amp;h=812&amp;fit=crop&amp;key=2&amp;sig=90a28634173ad260bba9dc34be2a38c86b79e191d69202974aaf56b774ecd14a&amp;562 562w, https://media.inverbreplae.org/uploads/media/default/0001/27/5312a0b29f87cd38725be53bc8cafeef22904a66.jpg?w=690&amp;h=997&amp;fit=crop&amp;key=2&amp;sig=7b903c18576f82ae5cdabb8a051ca686c54e8ed4ca3eb554a07c0c3aad8450db&amp;690 690w"
            alt="Cover of Good Grief, the Ground by Margaret Ray"
            class=""
            
        />
            </a>
                                <div class="o-card-bd o-card-bd_constrained">
        <div class="c-feature">
                                                        <div class="c-feature-preamble">
                    <span class="c-txt c-txt_catMeta">Book Review</span>
                </div>
            
                <div class="c-feature-hd">
                    <h2 class="c-hdgSans c-hdgSans_2">
                                                            <a href="https://www.inverbreplae.org/harriet-books/reviews/160079/good-grief-the-ground">
                                Good Grief, the Ground
                                                                    </a>
                                                    </h2>
                </div>

                                
                                                        <div class="c-feature-sub
                c-feature-sub_flat
                ">
                    <span class="c-txt c-txt_attribution">                                    
        
By Margaret Ray

            </span>
                </div>
            
            
                                <div class="c-feature-sub
                ">
                <span class="c-txt c-txt_attribution">
                    Reviewed By Christopher Spaide
                </span>
            </div>
            
                                                </div>
    </div>
</div>
</li>







    
        

                
            



                            
                    


                
                        
                                                        
        
    


                                    
        
        
        

        
    









<li>
<div class="
    o-card
    o-card_stretch
    
">
                                                            
            <a href="https://www.inverbreplae.org/harriet-books/reviews/160082/something-evergreen-called-life" class="o-card-media o-card-media_bookAspect">
                <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 567px) calc(100vw - (15px * 2)), (max-width: 768px) calc((100vw - (15px * 2) - 90px) / 2), (max-width: 1170px) calc((100vw - (15px * 2) - 150px) / 3), 340px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/27/62a226ad53a326fa3720004b280a55c4224d92a9.jpg?w=392&amp;h=566&amp;fit=crop&amp;key=2&amp;sig=d102ed8796716f2a9b8c6dc0e9fb652f7b18209506733e4dfb246ebc2893dd8f&amp;392 392w, https://media.inverbreplae.org/uploads/media/default/0001/27/62a226ad53a326fa3720004b280a55c4224d92a9.jpg?w=562&amp;h=812&amp;fit=crop&amp;key=2&amp;sig=f063058ca2339400df7d42e320e50af0241c807074cd9e36cc8702d21b146807&amp;562 562w, https://media.inverbreplae.org/uploads/media/default/0001/27/62a226ad53a326fa3720004b280a55c4224d92a9.jpg?w=690&amp;h=997&amp;fit=crop&amp;key=2&amp;sig=3c2386b97f62f550efa2932b7e544117584854a5bd41709e75552447decab5db&amp;690 690w"
            alt="Cover of Something Evergreen Called Life by Rania Mamoun"
            class=""
            
        />
            </a>
                                <div class="o-card-bd o-card-bd_constrained">
        <div class="c-feature">
                                                        <div class="c-feature-preamble">
                    <span class="c-txt c-txt_catMeta">Book Review</span>
                </div>
            
                <div class="c-feature-hd">
                    <h2 class="c-hdgSans c-hdgSans_2">
                                                            <a href="https://www.inverbreplae.org/harriet-books/reviews/160082/something-evergreen-called-life">
                                Something Evergreen Called Life
                                                                    </a>
                                                    </h2>
                </div>

                                
                                                        <div class="c-feature-sub
                c-feature-sub_flat
                ">
                    <span class="c-txt c-txt_attribution">                                    
        
By Rania Mamoun

            </span>
                </div>
            
                                    <div class="c-feature-sub
                c-feature-sub_flat
                ">
                    <span class="c-txt c-txt_attribution">Translated By Yasmine Seale</span>
                </div>
            
                                <div class="c-feature-sub
                ">
                <span class="c-txt c-txt_attribution">
                    Reviewed By Sylee Gore
                </span>
            </div>
            
                                                </div>
    </div>
</div>
</li>







    
        

                
            



                            
                    


                
                        
                                                        
        
    


                                    
        
        
        

        
    









<li>
<div class="
    o-card
    o-card_stretch
    
">
                                                            
            <a href="https://www.inverbreplae.org/harriet-books/reviews/160076/saltwater-demands-a-psalm" class="o-card-media o-card-media_bookAspect">
                <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 567px) calc(100vw - (15px * 2)), (max-width: 768px) calc((100vw - (15px * 2) - 90px) / 2), (max-width: 1170px) calc((100vw - (15px * 2) - 150px) / 3), 340px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/27/0f3384daa7f2032cd54b6fb1ade74650e1a38d91.jpg?w=392&amp;h=566&amp;fit=crop&amp;key=2&amp;sig=a36e3f095d3957741deb28cd7017651d64427d289b36cb683da54204493f7ed6&amp;392 392w, https://media.inverbreplae.org/uploads/media/default/0001/27/0f3384daa7f2032cd54b6fb1ade74650e1a38d91.jpg?w=562&amp;h=812&amp;fit=crop&amp;key=2&amp;sig=630606302a5d095ae5d5680eda30044eba41c94ffee48dfb175b9f85c598ce5b&amp;562 562w, https://media.inverbreplae.org/uploads/media/default/0001/27/0f3384daa7f2032cd54b6fb1ade74650e1a38d91.jpg?w=690&amp;h=997&amp;fit=crop&amp;key=2&amp;sig=bd06d1f90968ea5e8d640b532e83f89ef4e88e0e6cc94678a15baf0d462a0f5b&amp;690 690w"
            alt="Cover of Saltwater Demands a Psalm by Kweku Abimola"
            class=""
            
        />
            </a>
                                <div class="o-card-bd o-card-bd_constrained">
        <div class="c-feature">
                                                        <div class="c-feature-preamble">
                    <span class="c-txt c-txt_catMeta">Book Review</span>
                </div>
            
                <div class="c-feature-hd">
                    <h2 class="c-hdgSans c-hdgSans_2">
                                                            <a href="https://www.inverbreplae.org/harriet-books/reviews/160076/saltwater-demands-a-psalm">
                                Saltwater Demands a Psalm
                                                                    </a>
                                                    </h2>
                </div>

                                
                                                        <div class="c-feature-sub
                c-feature-sub_flat
                ">
                    <span class="c-txt c-txt_attribution">                                    
        
By Kweku Abimbola

            </span>
                </div>
            
            
                                <div class="c-feature-sub
                ">
                <span class="c-txt c-txt_attribution">
                    Reviewed By Rebecca Morgan Frank
                </span>
            </div>
            
                                                </div>
    </div>
</div>
</li>







            
                    </ul>
                </li>
                                        </ul>
                                        {/* <!-- end .sectionList --> */}
</div>

</div>


                                                                                                
    
                






                                                                        


<div class="o-vr o-vr_6x">
<div class="c-tier c-tier_minimal">
                                <a href="https://w1.buysub.com/pubs/P3/PET/sub_digital.jsp?cds_page_id=268200&amp;cds_mag_code=PET&amp;id=1679428564828&amp;lsid=30801455448010397&amp;vid=2&amp;cds_response_key=L23NPMHP" target="_blank">    <picture>
<source
    srcset="https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_1170xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Banner-2340x376px.png 1170w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_1334xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Banner-2340x376px.png 1334w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_1476xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Banner-2340x376px.png 1476w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_1988xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Banner-2340x376px.png 1988w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_2340xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Banner-2340x376px.png 2340w"
    media="(min-width: 376px)"
    sizes="
        (max-width: 1170px) calc(100vw - (15px * 2)),
        1170px
    "
/>
<img
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    srcset="https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_750xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Banner-2340x376px.png"
    alt=""
    class=""
    
/>
</picture>
</a>
            </div>
</div>


                                                                                                
    
                




        
                

<div class="c-tier c-mix-tier_offset">
<div class="c-tier-mantle">
<div class="c-banner c-banner_split">
    <div class="c-banner-hd">
        <h2 class="c-hdgSans c-hdgSans_3 mix-c-hdg_inverted">
            <span class="c-txt c-txt_origin c-mix-txt_inverted">From the current issue of</span>
            <i class="c-txt c-txt_emphatic c-mix-txt_inverted">Poetry</i>
        </h2>
    </div>
    <div class="c-banner-mark">
        <svg class="icon icon_p1 mix-icon_bannerOffset" role="img" aria-label="Current Issue">
            {/* <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_p1"></use> */}
        </svg>
    </div>
</div>
</div>
<div class="o-grid">
<div class="o-grid-col o-grid-col_4of12">
                
    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                            
                                
                                            

    

                                                    
                    

                    



                    
                            
                            
        

        
    









        <div class="c-cover">
    <div class="c-cover-media">
                            <a href="https://www.inverbreplae.org/poetrymagazine/issue/159768/april-2023">
                        <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 667px) 153px, (max-width: 1170px) calc(100vw - (15px * 2) - (2.564102564vw + 65.811965812vw)), 370px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/27/763675b611e13417c9e34cdb49acbc698deb6121.jpg?w=153&amp;h=&amp;fit=max&amp;key=2&amp;sig=c829a355e477806e0da659bf3f5ecbbb40a5e842de769cc086ce3d5c6b8c2fbd&amp;153 153w, https://media.inverbreplae.org/uploads/media/default/0001/27/763675b611e13417c9e34cdb49acbc698deb6121.jpg?w=306&amp;h=&amp;fit=max&amp;key=2&amp;sig=e013cd765c37974e2f2f60f3eb0f7e5404313e8be81553b6add826f1cf3a5d98&amp;306 306w, https://media.inverbreplae.org/uploads/media/default/0001/27/763675b611e13417c9e34cdb49acbc698deb6121.jpg?w=370&amp;h=&amp;fit=max&amp;key=2&amp;sig=fd94bddb28a82bc4d70a7c586db1a09511b6655b30e4b5adb0de18fca438c7f9&amp;370 370w, https://media.inverbreplae.org/uploads/media/default/0001/27/763675b611e13417c9e34cdb49acbc698deb6121.jpg?w=740&amp;h=&amp;fit=max&amp;key=2&amp;sig=fa7ca827bb9519b16785f8afbb009ca64789db04ec9c7afcb5e9d758d2e73e13&amp;740 740w"
            alt=""
            class="c-cover-art"
            
        />
                            </a>
                    </div>
                    <div class="c-cover-ft">
            <a href="https://www.inverbreplae.org/poetrymagazine/issue/159768/april-2023" class="c-txt c-txt_minimalCta">View Issue</a>
        </div>
            </div>




                

        
            

            
</div>
<div class="o-grid-col o-grid-col_8of12">
    <div class="c-index">
        <div class="c-index-label">
            <span class="c-txt c-txt_serialMeta"><strong>From This Issue</strong> April 2023</span>
        </div>
        <div class="c-index-list">
            <ul class="c-vList c-vList_bordered">
                            
    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                                                                                
                                
                                            

    

                                                    
                    


                
                        
                                                        
        
    


                                    
                                            
                            
        

        
    












<li>
<div class="c-feature c-mix-feature_shrinkwrap" >
                    <div class="c-feature-preamble">
            <span class="c-txt c-txt_catMeta ">Prose from <i>Poetry</i> Magazine</span>
        </div>
                                <div class="c-feature-hd">
            <h2 class="c-hdgSans c-hdgSans_2"><a href="https://www.inverbreplae.org/poetrymagazine/articles/159820/eleven-legends">Eleven Legends</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution">                            
        
By Adrian Matejka

    </span>
        </div>
    
                    <div class="c-feature-bd">
            <p>The art of poetry is, at its heart, about elevating—language, sound, heroes, and myths—and the issue you are holding celebrates the 2022 Ruth Lilly Poetry Prize recipients’ many different legacies...</p>
        </div>
                        </div>
</li>




                

        
            

    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                                                                                
                                
                                            

    

                                                    
                    


                
                        
                                                        
        
    


                                    
                                            
                            
        

        
    












<li>
<div class="c-feature c-mix-feature_shrinkwrap" >
                    <div class="c-feature-preamble">
            <span class="c-txt c-txt_catMeta ">Prose from <i>Poetry</i> Magazine</span>
        </div>
                                <div class="c-feature-hd">
            <h2 class="c-hdgSans c-hdgSans_2"><a href="https://www.inverbreplae.org/poetrymagazine/articles/159821/on-caconrad-pan-dimensional-change-agent-in-vibratory-communion">On CAConrad: Pan-Dimensional Change Agent in Vibratory Communion</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution">                            
        
By Hoa Nguyen

    </span>
        </div>
    
                    <div class="c-feature-bd">
            <p>CAConrad’s poetics is a form of presencing that insists on multiple ways to inhabit experience. A queer activist, a diviner, and a visionary from beyond the veil, Conrad brings shape...</p>
        </div>
                        </div>
</li>




                

        
            

    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                                                                                
                                
                                            

    

                                                    
                    


                
                        
                                                        
        
    


                    
                        
        

        
    












<li>
<div class="c-feature c-mix-feature_shrinkwrap" >
                    <div class="c-feature-preamble">
            <span class="c-txt c-txt_catMeta ">poem</span>
        </div>
                                <div class="c-feature-hd">
            <h2 class="c-hdgSans c-hdgSans_2"><a href="https://www.inverbreplae.org/poetrymagazine/poems/159775/7-poems-from-listen-to-the-golden-boomerang-return">From &ldquo;Listen to the Golden Boomerang Return&rdquo;</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution">                            
        
By CAConrad

    </span>
        </div>
    
                    <div class="c-feature-bd">
            <p>a potato
born by
shovel
I am a
bride of
poetry in
my orange
and purple
gown an
unequaled
extinction
</p>
        </div>
                        </div>
</li>




                

        
            

            
            </ul>
        </div>
                    </div>
                    {/* <!-- end .index --> */}
</div>
</div>
{/* <!-- end .grid --> */}
</div>


                                                                                                
    
                


<div class="o-vr o-vr_12x">
<div class="c-tier c-tier_tabbed c-mix-tier_offsetDistant">
    <div class="c-tier-tab">
        <span class="c-txt c-txt_labelMaker">Recent Issues</span>
    </div>
    <div class="c-tier-assets">
        <ul class="o-blocks o-blocks_compressed o-blocks_expanded@sm o-blocks_2up o-blocks_4up@sm">
                                                                <li>
                        <a href="https://www.inverbreplae.org/poetrymagazine/issue/159596/march-2023">
                            <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 667px) calc((100vw - (15px * 2) - (17px * 2) - 17px) / 2), (max-width: 1170px) calc((100vw - (15px * 2) - (30px * 2) - 90px) / 4), 255px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/26/b9c276afb28941aa9e1ad0118e3ee3a48653931e.jpg?w=255&amp;h=&amp;fit=max&amp;key=2&amp;sig=c658c05f67600f22c860f5ba7e4a6c5c50a3b5d080636a9a2464152b68875b35&amp;255 255w, https://media.inverbreplae.org/uploads/media/default/0001/26/b9c276afb28941aa9e1ad0118e3ee3a48653931e.jpg?w=294&amp;h=&amp;fit=max&amp;key=2&amp;sig=293e04bfdd555280d284a70d9e0761388be39bae55e51da9e376ed807754c6bd&amp;294 294w, https://media.inverbreplae.org/uploads/media/default/0001/26/b9c276afb28941aa9e1ad0118e3ee3a48653931e.jpg?w=422&amp;h=&amp;fit=max&amp;key=2&amp;sig=040b4e3a8612ab7c0ee31090ad46a589e63f638d8121be08ada671a40d89fbfe&amp;422 422w, https://media.inverbreplae.org/uploads/media/default/0001/26/b9c276afb28941aa9e1ad0118e3ee3a48653931e.jpg?w=510&amp;h=&amp;fit=max&amp;key=2&amp;sig=07c4079a31770a966d77d934bbc061815b4018970e2c6cb57d706e36dc729c35&amp;510 510w, https://media.inverbreplae.org/uploads/media/default/0001/26/b9c276afb28941aa9e1ad0118e3ee3a48653931e.jpg?w=586&amp;h=&amp;fit=max&amp;key=2&amp;sig=9c030e6c630f5d23cdd0578500821d97dc98d67515f360732dd2fc750d318833&amp;586 586w"
            alt=""
            class="c-cover-art"
            
        />
                        </a>
                    </li>
                                                                                        <li>
                        <a href="https://www.inverbreplae.org/poetrymagazine/issue/159406/february-2023">
                            <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 667px) calc((100vw - (15px * 2) - (17px * 2) - 17px) / 2), (max-width: 1170px) calc((100vw - (15px * 2) - (30px * 2) - 90px) / 4), 255px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/26/c2dfe6a2cbe87a7e66e54877389cdb5377853789.jpg?w=255&amp;h=&amp;fit=max&amp;key=2&amp;sig=cdab7e07dcd98064c826275dbbae16374b403df54e00e5e44d70a072dda3de2f&amp;255 255w, https://media.inverbreplae.org/uploads/media/default/0001/26/c2dfe6a2cbe87a7e66e54877389cdb5377853789.jpg?w=294&amp;h=&amp;fit=max&amp;key=2&amp;sig=6a7ece7e27c3b544d23b7d64b9c331402c227d2f1818a7e72a102a71459cb1f5&amp;294 294w, https://media.inverbreplae.org/uploads/media/default/0001/26/c2dfe6a2cbe87a7e66e54877389cdb5377853789.jpg?w=422&amp;h=&amp;fit=max&amp;key=2&amp;sig=464b7c342fa3d54540f79fc8c0b11f33ecfe62b24df2c8f9a4bdd1d45f2ff6f4&amp;422 422w, https://media.inverbreplae.org/uploads/media/default/0001/26/c2dfe6a2cbe87a7e66e54877389cdb5377853789.jpg?w=510&amp;h=&amp;fit=max&amp;key=2&amp;sig=1e02fe2fa4d8506a63211d7cfc9406fc8fdb9302df8551e2d7b822468b9f7166&amp;510 510w, https://media.inverbreplae.org/uploads/media/default/0001/26/c2dfe6a2cbe87a7e66e54877389cdb5377853789.jpg?w=586&amp;h=&amp;fit=max&amp;key=2&amp;sig=dd5376ed8b5146f7b01f102cf5b80092e67bda2b39621c8a75d116908edaa599&amp;586 586w"
            alt="cover of poetry with celestial looking pink pegasuses against a black starry background"
            class="c-cover-art"
            
        />
                        </a>
                    </li>
                                                                                        <li>
                        <a href="https://www.inverbreplae.org/poetrymagazine/issue/159207/january-2023">
                            <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 667px) calc((100vw - (15px * 2) - (17px * 2) - 17px) / 2), (max-width: 1170px) calc((100vw - (15px * 2) - (30px * 2) - 90px) / 4), 255px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/26/7d734c28c75d38118102f3193042537b4d0dc60f.jpg?w=255&amp;h=&amp;fit=max&amp;key=2&amp;sig=113820c4f605b5d953bc874420bf0a42ae85c2c38040fb6934c6c78dab378cda&amp;255 255w, https://media.inverbreplae.org/uploads/media/default/0001/26/7d734c28c75d38118102f3193042537b4d0dc60f.jpg?w=294&amp;h=&amp;fit=max&amp;key=2&amp;sig=62ea96d6b5ca2d59884676bdac2f8dc330087b26afecc59fa3d9273907338542&amp;294 294w, https://media.inverbreplae.org/uploads/media/default/0001/26/7d734c28c75d38118102f3193042537b4d0dc60f.jpg?w=422&amp;h=&amp;fit=max&amp;key=2&amp;sig=c6f824f654a93feac8cf6a265a3c06afd14820ec0c29e1e674bf5b912eb233a4&amp;422 422w, https://media.inverbreplae.org/uploads/media/default/0001/26/7d734c28c75d38118102f3193042537b4d0dc60f.jpg?w=510&amp;h=&amp;fit=max&amp;key=2&amp;sig=0d266397843918b338af990538c00b1319f8f590f93beeaa8ca5e5a044010114&amp;510 510w, https://media.inverbreplae.org/uploads/media/default/0001/26/7d734c28c75d38118102f3193042537b4d0dc60f.jpg?w=586&amp;h=&amp;fit=max&amp;key=2&amp;sig=9cffc06aa82698632a9f61727ee64aa881d2fe83c7bd524b58c14c7cdd55e8a6&amp;586 586w"
            alt=""
            class="c-cover-art"
            
        />
                        </a>
                    </li>
                                                                                        <li>
                        <a href="https://www.inverbreplae.org/poetrymagazine/issue/159018/december-2022">
                            <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 667px) calc((100vw - (15px * 2) - (17px * 2) - 17px) / 2), (max-width: 1170px) calc((100vw - (15px * 2) - (30px * 2) - 90px) / 4), 255px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/26/20b15d35112b0ce903181cda9b62b98f20141e4f.jpg?w=255&amp;h=&amp;fit=max&amp;key=2&amp;sig=2a52face33860ec45188522a24bf56d30d61a8f3f06bd77db1c0135da84e7f4a&amp;255 255w, https://media.inverbreplae.org/uploads/media/default/0001/26/20b15d35112b0ce903181cda9b62b98f20141e4f.jpg?w=294&amp;h=&amp;fit=max&amp;key=2&amp;sig=c7f4ef0e3a520ccd2651d8e8e294cc5e3bc0dafdd0f7d331dff0173343bb9def&amp;294 294w, https://media.inverbreplae.org/uploads/media/default/0001/26/20b15d35112b0ce903181cda9b62b98f20141e4f.jpg?w=422&amp;h=&amp;fit=max&amp;key=2&amp;sig=88a18f51743d3c2ce9c650e7ff22a80367040a192548cad6b2820dc35a4d68cb&amp;422 422w, https://media.inverbreplae.org/uploads/media/default/0001/26/20b15d35112b0ce903181cda9b62b98f20141e4f.jpg?w=510&amp;h=&amp;fit=max&amp;key=2&amp;sig=df3a3c4bc97408b4f2ca6358c1fe3fd01ccbe1f8d8c227aab8fa966493e7c6f3&amp;510 510w, https://media.inverbreplae.org/uploads/media/default/0001/26/20b15d35112b0ce903181cda9b62b98f20141e4f.jpg?w=586&amp;h=&amp;fit=max&amp;key=2&amp;sig=d5b871d853737a2508851cc597d29c4846923e9abcdb7d7130c04732696042b5&amp;586 586w"
            alt=""
            class="c-cover-art"
            
        />
                        </a>
                    </li>
                                                    </ul>
    </div>
                                <div class="c-tier-ft">
            <a href="https://www.inverbreplae.org/poetrymagazine/archive" class="c-btn c-btn_inverted">Browse More Issues</a>
        </div>
            </div>
</div>


                                                                                                
    
                

<div class="c-tier c-tier_weighted c-tier_weighted_light c-mix-tier_offsetDistant">
    <div class="c-tier-label">
    <span class="c-txt c-txt_herald c-txt_herald_neutral"><p>Featured Podcasts &amp; Videos</p></span>
</div>

            <div class="c-tier-content">
    <ul class="o-sectionList">
                                                                                                                                                                                                
            
                                                <li>
                <ul class="o-blocks o-blocks_2up@x-small o-blocks_expanded@sm">
                                
    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                                                                                
                                
                                            

    

                                                    
                    



        


    

                    
        

        
    








    <li>
<div class="
    o-card
    o-card_stretch
    
    
">
                                        <div class="o-card-media o-mix-card-media_aspectForce"><a href="https://www.inverbreplae.org/podcasts/159720/toi-derricotte-vs-stillness" class="c-vignette c-theme-vignette_vs">
                        <span class="u-isVisuallyHidden">VS</span>
                    </a>
                                    </div>
                                <div class="o-card-bd o-card-bd_constrained">
        <div class="c-feature">
                                                        <div class="c-feature-preamble c-feature-preamble_split">
                                                    <div>
                            <span class="c-txt c-txt_catMeta">Audio</span>
                        </div>
                                                <button class="c-assetAction c-assetAction_triggered" data-view="AudioPopupView" data-popupview-url="https://www.inverbreplae.org/play/159720" data-popupview-title="Toi Derricotte vs. Stillness">
                        Play Episode
                        <span class="c-assetAction-trigger"></span>
                    </button>
                </div>
            
                                    <div class="c-feature-hd">
                    <h2 class="c-hdgSans c-hdgSans_2">
                        
                                                            <a href="https://www.inverbreplae.org/podcasts/159720/toi-derricotte-vs-stillness">Toi Derricotte vs. Stillness</a>
                                                    </h2>
                </div>
            
                                
                                                        <div class="c-feature-sub ">
                    <span class="c-txt c-txt_attribution c-txt_attribution_piped">                                    
        
From VS

            </span><span class="c-txt c-txt_attribution c-txt_attribution_normal">March 2023</span>
                </div>
            
                                    <div class="c-feature-bd">
                    <p>This week, Ajanae and Brittany have the honor of interviewing Toi Derricotte. The trio speak candidly about preparing for death, the complexity of being a Black women poet, and the...</p>
                </div>
                            </div>
    </div><div class="o-card-ft">
            <a href="https://www.inverbreplae.org/podcasts/159720/toi-derricotte-vs-stillness" class="c-txt c-txt_minimalCta ">
                Listen Here
            </a>
        </div>
            </div>
</li>



                

        
            

    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                                                                                
                                
                                            

    

                                                    
                    

                    

        


    

                    
        
        

        
                








    <li>
<div class="
    o-card
    o-card_stretch
    
    
">
                                                            
            <a href="https://www.inverbreplae.org/video/157361/springcatcher" class="o-card-media o-card-media_withIcon ">
                <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 667px) calc(100vw - (15px * 2)), (max-width: 1170px) calc((100vw - (15px * 2) - 30px) / 2), 575px"
            srcset="https://media.inverbreplae.org/uploads/media/default/0001/25/9418fef0156e42593ad60d545eddd91125a8bb91.png?w=575&amp;h=&amp;fit=max&amp;key=2&amp;sig=ced24276430da1d9e73a3f5f42419c277fc6adc5da36788637bd1eae90d194a1&amp;575 575w, https://media.inverbreplae.org/uploads/media/default/0001/25/9418fef0156e42593ad60d545eddd91125a8bb91.png?w=708&amp;h=&amp;fit=max&amp;key=2&amp;sig=dbbcb12580784434d8391fed38e4a49cf849be95ae39154e0cde9c143dc7ad00&amp;708 708w, https://media.inverbreplae.org/uploads/media/default/0001/25/9418fef0156e42593ad60d545eddd91125a8bb91.png?w=964&amp;h=&amp;fit=max&amp;key=2&amp;sig=ab837154f4f24b7535237ec0bec68078c4cac2b97522c0ad394d56c0f1263f76&amp;964 964w, https://media.inverbreplae.org/uploads/media/default/0001/25/9418fef0156e42593ad60d545eddd91125a8bb91.png?w=1150&amp;h=&amp;fit=max&amp;key=2&amp;sig=ecb7a0d8144d3e5892ef21fc36f426263d07f53f64a6452762034e5c2dad37c6&amp;1150 1150w, https://media.inverbreplae.org/uploads/media/default/0001/25/9418fef0156e42593ad60d545eddd91125a8bb91.png?w=1274&amp;h=&amp;fit=max&amp;key=2&amp;sig=6f3c741f0dbe2f203552b8aa7e994e37d77454bb3d77bbc257a51a5527e06bce&amp;1274 1274w"
            alt=""
            class=""
            
        />
            </a>
                                <div class="o-card-bd o-card-bd_constrained">
        <div class="c-feature">
                                                                                    <div class="c-feature-preamble">
                        <span class="c-txt c-txt_catMeta ">Video</span>
                    </div>
                                    
                                    <div class="c-feature-hd">
                    <h2 class="c-hdgSans c-hdgSans_2">
                        
                                                            <a href="https://www.inverbreplae.org/video/157361/springcatcher">Springcatcher</a>
                                                    </h2>
                </div>
            
                                
                                                        <div class="c-feature-sub ">
                    <span class="c-txt c-txt_attribution">                                    
        
From Poetry Explorers

            </span>
                </div>
            
                                    <div class="c-feature-bd">
                    <p>Spring has sprung, Poetry Explorers! Let’s pick flowers and make sweet memories. In today’s episode we will make a suncatcher and reflect on how we have grown with the seasons.
</p>
                </div>
                            </div>
    </div><div class="o-card-ft">
            <a href="https://www.inverbreplae.org/video/157361/springcatcher" class="c-txt c-txt_minimalCta ">
                Watch the Video
            </a>
        </div>
            </div>
</li>



                

        
            

            
                </ul>
            </li>
                    </ul>
                    {/* <!-- end .sectionList --> */}
</div>

</div>


                                                                                                
    
                

<div class="c-tier c-tier_weighted c-mix-tier_offsetDistant">

    <div class="c-tier-label">
    <span class="c-txt c-txt_herald"><p>Podcasts</p></span>
</div>

<div class="o-grid o-grid_borderSplit">
<div class="o-grid-col o-grid-col_6of12">
                
    
                
    
        

                
                        
        
                                            
        
        
                                                                                                                                                                                                                                                                                                                                                                                                
                                
                                            

    

                                                    
                    



        


    

                    
        

        
    








<div class="c-feature">
                    <div class="c-feature-media c-mix-feature-media_aspectForce"><a href="https://www.inverbreplae.org/podcasts/160065/arthur-sze-and-forrest-gander-on-the-importance-of-blank-pages-silence-and-how-each-poem-written-shines-a-light-on-every-other-poem" class="c-vignette c-theme-vignette_poetryMagazine">
                <span class="u-isVisuallyHidden">The &lt;em&gt;Poetry&lt;/em&gt; Magazine Podcast</span>
            </a>
                    </div>



                    <div class="c-feature-hd c-feature-hd_distant">
        <h3 class="c-hdgSans c-hdgSans_5 c-hdgSans_4@sm mix-c-hdg_sans_flow"><a href="https://www.inverbreplae.org/podcasts/160065/arthur-sze-and-forrest-gander-on-the-importance-of-blank-pages-silence-and-how-each-poem-written-shines-a-light-on-every-other-poem">Arthur Sze and Forrest Gander on Silence, the Importance of Blank Pages, and How Every Poem Written Shines a Light on Every Other Poem</a>
                            </h3>
        <button class="c-assetAction c-assetAction_triggered c-assetAction_triggered_inverted c-mix-assetAction_flow" data-view="AudioPopupView" data-popupview-url="https://www.inverbreplae.org/play/160065" data-popupview-title="Arthur Sze and Forrest Gander on Silence, the Importance of Blank Pages, and How Every Poem Written Shines a Light on Every Other Poem">
            Listen
            <span class="c-assetAction-trigger"></span>
        </button>
    </div>

        
                    <div class="c-feature-sub">
        <span class="c-txt c-txt_attribution c-txt_attribution_piped">                        
        
From The <em>Poetry</em> Magazine Podcast

</span><span class="c-txt c-txt_attribution c-txt_attribution_normal">April 2023</span>
    </div>

            <div class="c-feature-bd">
        <p>Arthur Sze is a poet, a translator, an editor, and one of this year’s Ruth Lilly Poetry Prize recipients. Sze talks with his friend, Pulitzer Prize winning writer Forrest Gander, about how he became a poet, which included encouragement from poets and teachers Denise Levertov and Josephine Miles. The two recall how their friendship began, and then they lead us into the cosmos.</p>
    </div>

    </div>



                

        
            

            
</div>

                        
                                                                                            
            
        <div class="o-grid-col o-grid-col_6of12 o-mix-grid_col_minorOffset">
                                    <ul class="c-vList c-vList_bordered c-vList_bordered_anomaly">
                                





                
                    



        


    

                    
        


    








<li>
<div class="c-feature c-mix-feature_shrinkwrap">
                
                    <div class="c-feature-hd">
            <h2 class="c-hdgSans c-hdgSans_5"><a href="https://www.inverbreplae.org/podcasts/160068/center-stage">Center Stage</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution c-txt_attribution_piped">                            
        
From Poetry Off the Shelf

    </span><span class="c-txt c-txt_attribution c-txt_attribution_normal">April 2023</span>
        </div>
    
                                <div class="c-feature-bd">
            <p>Jennifer Jean on foster care, finding her voice, and loving her father as he was.
</p>
        </div>
            </div>
</li>



                
                    



        


    

                    
        


    








<li>
<div class="c-feature c-mix-feature_shrinkwrap">
                
                    <div class="c-feature-hd">
            <h2 class="c-hdgSans c-hdgSans_5"><a href="https://www.inverbreplae.org/podcasts/159853/golden-vs-the-self-portrait">Golden vs. The Self Portrait</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution c-txt_attribution_piped">                            
        
From VS

    </span><span class="c-txt c-txt_attribution c-txt_attribution_normal">March 2023</span>
        </div>
    
                                <div class="c-feature-bd">
            <p>In this episode, Ajanae and Brittany spend time in conversation with their guest, Golden; listen as they discuss creating a living archive, their space in the lineage of Black Formalist...</p>
        </div>
            </div>
</li>



                
                    



        


    

                    
        


    








<li>
<div class="c-feature c-mix-feature_shrinkwrap">
                
                    <div class="c-feature-hd">
            <h2 class="c-hdgSans c-hdgSans_5"><a href="https://www.inverbreplae.org/podcasts/159891/mom-i-love-you">Mom, I Love You</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution c-txt_attribution_piped">                            
        
From Poetry Off the Shelf

    </span><span class="c-txt c-txt_attribution c-txt_attribution_normal">March 2023</span>
        </div>
    
                                <div class="c-feature-bd">
            <p>Mahogany L. Browne on her first kiss, family secrets, and having your book banned.
</p>
        </div>
            </div>
</li>



                
                    



        


    

                    
        


    








<li>
<div class="c-feature c-mix-feature_shrinkwrap">
                
                    <div class="c-feature-hd">
            <h2 class="c-hdgSans c-hdgSans_5"><a href="https://www.inverbreplae.org/podcasts/159893/nam-le-and-lindsay-garbutt-on-language-as-an-ecology-of-violence-and-corruption-the-pain-of-being-a-writer-and-the-value-of-uncertainty">Nam Le and Lindsay Garbutt on Language as an Ecology of Violence and Corruption, the Pain of Being a Writer, and the Value of Uncertainty</a>
                                    </h2>
        </div>
    
                
                                <div class="c-feature-sub">
            <span class="c-txt c-txt_attribution c-txt_attribution_piped">                            
        
From The <em>Poetry</em> Magazine Podcast

    </span><span class="c-txt c-txt_attribution c-txt_attribution_normal">March 2023</span>
        </div>
    
                                <div class="c-feature-bd">
            <p>On this episode, Lindsay Garbutt speaks with Nam Le, whose debut book, the short story collection <em>The Boat</em>, was translated into fourteen languages and received over a dozen major awards....</p>
        </div>
            </div>
</li>



            </ul>
    
            </div>
</div>
</div>


                                                                                                
    
                


<div class="c-tier c-mix-tier_offset c-mix-tier_noOffsetTop">
<div class="o-grid o-grid_flexy">
            <div class="o-grid-col o-grid-col_4of12">
                                            {/* <a href="https://w1.buysub.com/pubs/P3/PET/sub_digital.jsp?cds_page_id=268200&amp;cds_mag_code=PET&amp;id=1679428564828&amp;lsid=30801455448010397&amp;vid=2&amp;cds_response_key=L23NPMHP"> */}
                        {/* <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            sizes="(max-width: 667px) calc(100vw - (15px * 2)), (max-width: 1170px) calc(100vw - (15px * 2) - (64.102564102vw + 2.478632478vw)), 370px"
            srcset="https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_370xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Square-1080x1080px.png?370 370w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_466xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Square-1080x1080px.png?466 466w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_628xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Square-1080x1080px.png?628 628w, https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_740xAUTO_fit_top-center_none/Mag-NPM-2023-Homepage-Square-1080x1080px.png?740 740w"
            alt=""
            class="u-blockCtr"
            
        /> */}
                            {/* </a> */}
                    </div>
                    <div class="o-grid-col o-grid-col_8of12">
        <div class="o-grid o-grid_borderSplit o-grid_curatedFlex">
                                    <div class="o-grid-col o-grid-col_6of12">
                    <div class="c-cta">
                        <div class="c-cta-bd">
                            <div class="c-txt c-txt_ctaCopy"><p>Submit poetry and letters to the editors of <em>Poetry </em>magazine. <br /></p></div>
                        </div>
                                                                                            <div class="c-cta-ft">
                                <a href="https://www.inverbreplae.org/poetrymagazine/submit" class="c-btn c-btn_inverted c-mix-btn_sm">Submit</a>
                            </div>
                                                    </div>
                </div>
                                    <div class="o-grid-col o-grid-col_6of12 o-mix-grid_col_minorOffset">
                  
                </div>
                            </div>
    </div>
    </div>
</div>


            

</div>



</div>

    );
  };
  
  export default HomeDisplay;
  