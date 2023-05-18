import Link from "next/link";
import styles from "../../styles/ArticleListItem.module.css";
import BookReviewSamples from "../BookReviewPage/BookReviewSamples";
import RandomizedSideView from "./RandomizedSideView";
import LeaderImageHome from "./LeaderImageHome";

const HomeDisplay = ({ articles }) => {
  // if (!articles || articles.length === 0) {
  //  return <div>No articles available.</div>;
  // }

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
            <div class="o-grid-col o-grid-col_4of12">
              <RandomizedSideView articles={articles}/>
            </div>
            <div class="o-grid-col o-grid-col_aspectMatch o-mix-grid_col_primary@small o-grid-col_8of12">
              <LeaderImageHome articles={articles} />
            

            </div>
          </div>
        </div>

       <BookReviewSamples articles={articles}/>

        <div class="c-tier c-mix-tier_offset">
          <div class="c-tier-mantle">
            <div class="c-banner c-banner_split">
              <div class="c-banner-hd">
                <h2 class="c-hdgSans c-hdgSans_3 mix-c-hdg_inverted">
                  <span class="c-txt c-txt_origin c-mix-txt_inverted">
                    From the current issue of
                  </span>
                  <i class="c-txt c-txt_emphatic c-mix-txt_inverted">Poetry</i>
                </h2>
              </div>
              <div class="c-banner-mark">
                <svg
                  class="icon icon_p1 mix-icon_bannerOffset"
                  role="img"
                  aria-label="Current Issue"
                >
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
                      srcset=""
                      alt=""
                      class="c-cover-art"
                    />
                  </a>
                </div>
                <div class="c-cover-ft">
                  <a
                    href="https://www.inverbreplae.org/poetrymagazine/issue/159768/april-2023"
                    class="c-txt c-txt_minimalCta"
                  >
                    View Issue
                  </a>
                </div>
              </div>
            </div>
            <div class="o-grid-col o-grid-col_8of12">
              <div class="c-index">
                <div class="c-index-label">
                  <span class="c-txt c-txt_serialMeta">
                    <strong>From This Issue</strong> April 2023
                  </span>
                </div>
                <div class="c-index-list">
                  <ul class="noPadding-noListStyle c-vList c-vList_bordered">
                    <li>
                      <div class="c-feature c-mix-feature_shrinkwrap">
                        <div class="c-feature-preamble">
                          <span class="c-txt c-txt_catMeta ">
                            Prose from <i>Poetry</i> Magazine
                          </span>
                        </div>
                        <div class="c-feature-hd">
                          <h2 class="c-hdgSans c-hdgSans_2">
                            <a href="https://www.inverbreplae.org/poetrymagazine/articles/159820/eleven-legends">
                              Eleven Legends
                            </a>
                          </h2>
                        </div>

                        <div class="c-feature-sub">
                          <span class="c-txt c-txt_attribution">
                            By Adrian Matejka
                          </span>
                        </div>

                        <div class="c-feature-bd">
                          <p>
                            The art of poetry is, at its heart, about
                            elevating—language, sound, heroes, and myths—and the
                            issue you are holding celebrates the 2022 Ruth Lilly
                            Poetry Prize recipients’ many different legacies...
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="c-feature c-mix-feature_shrinkwrap">
                        <div class="c-feature-preamble">
                          <span class="c-txt c-txt_catMeta ">
                            Prose from <i>Poetry</i> Magazine
                          </span>
                        </div>
                        <div class="c-feature-hd">
                          <h2 class="c-hdgSans c-hdgSans_2">
                            <a href="https://www.inverbreplae.org/poetrymagazine/articles/159821/on-caconrad-pan-dimensional-change-agent-in-vibratory-communion">
                              On CAConrad: Pan-Dimensional Change Agent in
                              Vibratory Communion
                            </a>
                          </h2>
                        </div>

                        <div class="c-feature-sub">
                          <span class="c-txt c-txt_attribution">
                            By Hoa Nguyen
                          </span>
                        </div>

                        <div class="c-feature-bd">
                          <p>
                            CAConrad’s poetics is a form of presencing that
                            insists on multiple ways to inhabit experience. A
                            queer activist, a diviner, and a visionary from
                            beyond the veil, Conrad brings shape...
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="c-feature c-mix-feature_shrinkwrap">
                        <div class="c-feature-preamble">
                          <span class="c-txt c-txt_catMeta ">poem</span>
                        </div>
                        <div class="c-feature-hd">
                          <h2 class="c-hdgSans c-hdgSans_2">
                            <a href="https://www.inverbreplae.org/poetrymagazine/poems/159775/7-poems-from-listen-to-the-golden-boomerang-return">
                              From &ldquo;Listen to the Golden Boomerang
                              Return&rdquo;
                            </a>
                          </h2>
                        </div>

                        <div class="c-feature-sub">
                          <span class="c-txt c-txt_attribution">
                            By CAConrad
                          </span>
                        </div>

                        <div class="c-feature-bd">
                          <p>
                            a potato born by shovel I am a bride of poetry in my
                            orange and purple gown an unequaled extinction
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
              <ul class=" o-blocks o-blocks_compressed o-blocks_expanded@sm o-blocks_2up o-blocks_4up@sm">
                <li>
                  <a href="https://www.inverbreplae.org/poetrymagazine/issue/159596/march-2023">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      sizes="(max-width: 667px) calc((100vw - (15px * 2) - (17px * 2) - 17px) / 2), (max-width: 1170px) calc((100vw - (15px * 2) - (30px * 2) - 90px) / 4), 255px"
                      srcset=""
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
                      srcset=""
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
                      srcset=""
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
                      srcset=""
                      alt=""
                      class="c-cover-art"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="c-tier-ft">
              <a
                href="https://www.inverbreplae.org/poetrymagazine/archive"
                class="c-btn c-btn_inverted"
              >
                Browse More Issues
              </a>
            </div>
          </div>
        </div>

        <div class="c-tier c-tier_weighted c-tier_weighted_light c-mix-tier_offsetDistant">
          <div class="c-tier-label">
            <span class="c-txt c-txt_herald c-txt_herald_neutral">
              <p>Featured Podcasts &amp; Videos</p>
            </span>
          </div>

          <div class="c-tier-content">
            <ul class="noPadding-noListStyle o-sectionList">
              <li>
                <ul class="noPadding-noListStyle o-blocks o-blocks_2up@x-small o-blocks_expanded@sm">
                  <li>
                    <div
                      class="
    o-card
    o-card_stretch
    
    
"
                    >
                      <div class="o-card-media o-mix-card-media_aspectForce">
                        <a
                          href="https://www.inverbreplae.org/podcasts/159720/toi-derricotte-vs-stillness"
                          class="c-vignette c-theme-vignette_vs"
                        >
                          <span class="u-isVisuallyHidden">VS</span>
                        </a>
                      </div>
                      <div class="o-card-bd o-card-bd_constrained">
                        <div class="c-feature">
                          <div class="c-feature-preamble c-feature-preamble_split">
                            <div>
                              <span class="c-txt c-txt_catMeta">Audio</span>
                            </div>
                            <button
                              class="c-assetAction c-assetAction_triggered"
                              data-view="AudioPopupView"
                              data-popupview-url="https://www.inverbreplae.org/play/159720"
                              data-popupview-title="Toi Derricotte vs. Stillness"
                            >
                              Play Episode
                              <span class="c-assetAction-trigger"></span>
                            </button>
                          </div>

                          <div class="c-feature-hd">
                            <h2 class="c-hdgSans c-hdgSans_2">
                              <a href="https://www.inverbreplae.org/podcasts/159720/toi-derricotte-vs-stillness">
                                Toi Derricotte vs. Stillness
                              </a>
                            </h2>
                          </div>

                          <div class="c-feature-sub ">
                            <span class="c-txt c-txt_attribution c-txt_attribution_piped">
                              From VS
                            </span>
                            <span class="c-txt c-txt_attribution c-txt_attribution_normal">
                              March 2023
                            </span>
                          </div>

                          <div class="c-feature-bd">
                            <p>
                              This week, Ajanae and Brittany have the honor of
                              interviewing Toi Derricotte. The trio speak
                              candidly about preparing for death, the complexity
                              of being a Black women poet, and the...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="o-card-ft">
                        <a
                          href="https://www.inverbreplae.org/podcasts/159720/toi-derricotte-vs-stillness"
                          class="c-txt c-txt_minimalCta "
                        >
                          Listen Here
                        </a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div
                      class="
    o-card
    o-card_stretch
    
    
"
                    >
                      <a
                        href="https://www.inverbreplae.org/video/157361/springcatcher"
                        class="o-card-media o-card-media_withIcon "
                      >
                        <img
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          sizes="(max-width: 667px) calc(100vw - (15px * 2)), (max-width: 1170px) calc((100vw - (15px * 2) - 30px) / 2), 575px"
                          srcset=""
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
                              <a href="https://www.inverbreplae.org/video/157361/springcatcher">
                                Springcatcher
                              </a>
                            </h2>
                          </div>

                          <div class="c-feature-sub ">
                            <span class="c-txt c-txt_attribution">
                              From Poetry Explorers
                            </span>
                          </div>

                          <div class="c-feature-bd">
                            <p>
                              Spring has sprung, Poetry Explorers! Let’s pick
                              flowers and make sweet memories. In today’s
                              episode we will make a suncatcher and reflect on
                              how we have grown with the seasons.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="o-card-ft">
                        <a
                          href="https://www.inverbreplae.org/video/157361/springcatcher"
                          class="c-txt c-txt_minimalCta "
                        >
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
            <span class="c-txt c-txt_herald">
              <p>Podcasts</p>
            </span>
          </div>

          <div class="o-grid o-grid_borderSplit">
            <div class="o-grid-col o-grid-col_6of12">
              <div class="c-feature">
                <div class="c-feature-media c-mix-feature-media_aspectForce">
                  <a
                    href="https://www.inverbreplae.org/podcasts/160065/arthur-sze-and-forrest-gander-on-the-importance-of-blank-pages-silence-and-how-each-poem-written-shines-a-light-on-every-other-poem"
                    class="c-vignette c-theme-vignette_poetryMagazine"
                  >
                    <span class="u-isVisuallyHidden">
                      The &lt;em&gt;Poetry&lt;/em&gt; Magazine Podcast
                    </span>
                  </a>
                </div>

                <div class="c-feature-hd c-feature-hd_distant">
                  <h3 class="c-hdgSans c-hdgSans_5 c-hdgSans_4@sm mix-c-hdg_sans_flow">
                    <a href="https://www.inverbreplae.org/podcasts/160065/arthur-sze-and-forrest-gander-on-the-importance-of-blank-pages-silence-and-how-each-poem-written-shines-a-light-on-every-other-poem">
                      Arthur Sze and Forrest Gander on Silence, the Importance
                      of Blank Pages, and How Every Poem Written Shines a Light
                      on Every Other Poem
                    </a>
                  </h3>
                  <button
                    class="c-assetAction c-assetAction_triggered c-assetAction_triggered_inverted c-mix-assetAction_flow"
                    data-view="AudioPopupView"
                    data-popupview-url="https://www.inverbreplae.org/play/160065"
                    data-popupview-title="Arthur Sze and Forrest Gander on Silence, the Importance of Blank Pages, and How Every Poem Written Shines a Light on Every Other Poem"
                  >
                    Listen
                    <span class="c-assetAction-trigger"></span>
                  </button>
                </div>

                <div class="c-feature-sub">
                  <span class="c-txt c-txt_attribution c-txt_attribution_piped">
                    From The <em>Poetry</em> Magazine Podcast
                  </span>
                  <span class="c-txt c-txt_attribution c-txt_attribution_normal">
                    April 2023
                  </span>
                </div>

                <div class="c-feature-bd">
                  <p>
                    Arthur Sze is a poet, a translator, an editor, and one of
                    this year’s Ruth Lilly Poetry Prize recipients. Sze talks
                    with his friend, Pulitzer Prize winning writer Forrest
                    Gander, about how he became a poet, which included
                    encouragement from poets and teachers Denise Levertov and
                    Josephine Miles. The two recall how their friendship began,
                    and then they lead us into the cosmos.
                  </p>
                </div>
              </div>
            </div>

            <div class="o-grid-col o-grid-col_6of12 o-mix-grid_col_minorOffset">
              <ul class="noPadding-noListStyle c-vList c-vList_bordered c-vList_bordered_anomaly">
                <li>
                  <div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-hd">
                      <h2 class="c-hdgSans c-hdgSans_5">
                        <a href="https://www.inverbreplae.org/podcasts/160068/center-stage">
                          Center Stage
                        </a>
                      </h2>
                    </div>

                    <div class="c-feature-sub">
                      <span class="c-txt c-txt_attribution c-txt_attribution_piped">
                        From Poetry Off the Shelf
                      </span>
                      <span class="c-txt c-txt_attribution c-txt_attribution_normal">
                        April 2023
                      </span>
                    </div>

                    <div class="c-feature-bd">
                      <p>
                        Jennifer Jean on foster care, finding her voice, and
                        loving her father as he was.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-hd">
                      <h2 class="c-hdgSans c-hdgSans_5">
                        <a href="https://www.inverbreplae.org/podcasts/159853/golden-vs-the-self-portrait">
                          Golden vs. The Self Portrait
                        </a>
                      </h2>
                    </div>

                    <div class="c-feature-sub">
                      <span class="c-txt c-txt_attribution c-txt_attribution_piped">
                        From VS
                      </span>
                      <span class="c-txt c-txt_attribution c-txt_attribution_normal">
                        March 2023
                      </span>
                    </div>

                    <div class="c-feature-bd">
                      <p>
                        In this episode, Ajanae and Brittany spend time in
                        conversation with their guest, Golden; listen as they
                        discuss creating a living archive, their space in the
                        lineage of Black Formalist...
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-hd">
                      <h2 class="c-hdgSans c-hdgSans_5">
                        <a href="https://www.inverbreplae.org/podcasts/159891/mom-i-love-you">
                          Mom, I Love You
                        </a>
                      </h2>
                    </div>

                    <div class="c-feature-sub">
                      <span class="c-txt c-txt_attribution c-txt_attribution_piped">
                        From Poetry Off the Shelf
                      </span>
                      <span class="c-txt c-txt_attribution c-txt_attribution_normal">
                        March 2023
                      </span>
                    </div>

                    <div class="c-feature-bd">
                      <p>
                        Mahogany L. Browne on her first kiss, family secrets,
                        and having your book banned.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="c-feature c-mix-feature_shrinkwrap">
                    <div class="c-feature-hd">
                      <h2 class="c-hdgSans c-hdgSans_5">
                        <a href="https://www.inverbreplae.org/podcasts/159893/nam-le-and-lindsay-garbutt-on-language-as-an-ecology-of-violence-and-corruption-the-pain-of-being-a-writer-and-the-value-of-uncertainty">
                          Nam Le and Lindsay Garbutt on Language as an Ecology
                          of Violence and Corruption, the Pain of Being a
                          Writer, and the Value of Uncertainty
                        </a>
                      </h2>
                    </div>

                    <div class="c-feature-sub">
                      <span class="c-txt c-txt_attribution c-txt_attribution_piped">
                        From The <em>Poetry</em> Magazine Podcast
                      </span>
                      <span class="c-txt c-txt_attribution c-txt_attribution_normal">
                        March 2023
                      </span>
                    </div>

                    <div class="c-feature-bd">
                      <p>
                        On this episode, Lindsay Garbutt speaks with Nam Le,
                        whose debut book, the short story collection{" "}
                        <em>The Boat</em>, was translated into fourteen
                        languages and received over a dozen major awards....
                      </p>
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
                      <div class="c-txt c-txt_ctaCopy">
                        <p>
                          Submit poetry and letters to the editors of{" "}
                          <em>Poetry </em>magazine. <br />
                        </p>
                      </div>
                    </div>
                    <div class="c-cta-ft">
                      <a
                        href="https://www.inverbreplae.org/poetrymagazine/submit"
                        class="c-btn c-btn_inverted c-mix-btn_sm"
                      >
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
                <div class="o-grid-col o-grid-col_6of12 o-mix-grid_col_minorOffset"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDisplay;
