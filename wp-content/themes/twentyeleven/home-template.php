<?php
/**
 * Template Name: Home Template
 *
 *
 */

get_header(); ?>

		<div id="primary">
			<div id="content" role="main">

				<?php while ( have_posts() ) : the_post(); ?>
          <div id="TGIT" class="home">
            <div class="TGIT-home_hero__slider">
              <div class="slick-slider">
                  <!-- <div class="slick-slider__arrow slick-slider__arrow--previous">
                      <i class="fa fa-angle-left"></i>
                  </div> -->
                  <div class="slick-slider__slides">
                      <div class="">
                        <div class="home_hero__slide2__background">
                          <img src="/wp-content/uploads/2018/03/Home-slider-3-Team-40opacity-onBlk.png">
                        </div>
                        <!-- <div class="home_hero__slide__text__title">VISION WORTH FIGHTING FOR</div>
                        <div class="home_hero__slide__text__details">
                            <div class="home_hero__slide__text__copy">Backing founders passionate about improving the lives of millions of consumers</div>
                            <a href="/about">
                                <button class="home_hero__slide__text__button TGIT-view_more_button">
                                    <div class="button-content"><div class="button-content__text">LEARN MORE</div><div class="button-content__icon"><i class="fa fa-caret-right"></i></div></div>
                                </button></a>
                        </div> -->
                      </div>
                      <div class="">
                          <div class="home_hero__slide2__background">
                              <img src="/wp-content/uploads/2018/04/2nd-State-Slider-4-4-18-USE.jpg">
                          </div>
                          <div class="home_hero__slide2__wrapper1">
                              <div class="home_hero__slide2__A">
                              </div>
                          </div>
                          <div class="home_hero__slide2__wrapper2">
                              <div class="home_hero__slide2__B">
                                  <div class="home_hero__slide__text">
                                      <div class="home_hero__slide__text__title"> HYPERGROWTH RETREAT </div>
                                      <div class="home_hero__slide__text__details">
                                          <div class="home_hero__slide__text__copy">Learn how to scale your business from industry experts</div>
                                          <a href="http://mavenhypergrowth.com/">
                                              <button class="home_hero__slide__text__button TGIT-view_more_button">
                                                  <div class="button-content"><div class="button-content__text">LEARN MORE</div><div class="button-content__icon"><i class="fa fa-caret-right"></i></div></div>
                                              </button>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="">
                          <div class="home_hero__slide3__background">
                              <img src="/wp-content/uploads/2018/03/TeamPhoto-e1523139098731.jpg">
                          </div>
                          <div class="home_hero__slide3__wrapper1">
                              <div class="home_hero__slide3__A">
                                  <!-- <img src="/wp-content/uploads/2016/01/21115-Broken-Lightbulb.jpg"> -->
                              </div>
                          </div>
                          <div class="home_hero__slide3__wrapper2">
                              <div class="home_hero__slide3__B">
                                  <div class="home_hero__slide__text">
                                      <div class="home_hero__slide__text__title">MAVEN VENTURES</div>
                                      <div class="home_hero__slide__text__details">
                                          <div class="home_hero__slide__text__copy js-homeHeroslide3TextCopy">Seed fund investing in consumer software innovation</div>
                                          <a href="/about">
                                              <button class="home_hero__slide__text__button TGIT-view_more_button">
                                                  <div class="button-content"><div class="button-content__text">LEARN MORE</div><div class="button-content__icon"><i class="fa fa-caret-right"></i></div></div>
                                              </button>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- <div class="slick-slider__arrow slick-slider__arrow--next">
                      <i class="fa fa-angle-right"></i>
                  </div> -->
              </div>
          </div>

					<?php get_template_part( 'content', 'home' ); ?>

					<?php comments_template( '', true ); ?>

				<?php endwhile; // end of the loop. ?>
      </div><!-- TGIT home -->

			</div><!-- #content -->
		</div><!-- #primary -->

<?php get_footer(); ?>