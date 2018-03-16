<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="utf-8" >
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" >
<title><?php
    /*
     * Print the <title> tag based on what is being viewed.
     */
    global $page, $paged;


    wp_title( '|', true, 'right' );

    // Add the blog name.
 //   bloginfo( 'name' );

    // Add the blog description for the home/front page.
    $site_description = get_bloginfo( 'description', 'display' );
 //   if ( $site_description && ( is_home() || is_front_page() ) )
 //       echo " | $site_description";

    // Add a page number if necessary:
  //  if ( $paged >= 2 || $page >= 2 )
  //      echo ' | ' . sprintf( __( 'Page %s', 'twentyeleven' ), max( $paged, $page ) );

?></title>

<?php wp_head(); ?>

<link rel="profile" href="http://gmpg.org/xfn/11" >
<!-- <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" > -->
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); echo '?' . filemtime( get_stylesheet_directory() . '/style.css'); ?>" type="text/css" media="screen, projection" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" >

<!-- ********************* TGIT -  Stylesheets ********************* -->
<!-- favicon -->
<link rel="shortcut icon" type="image/png" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/uploads/2016/01/favicon-32x321-16x16.png">
<!-- /favicon -->

<!--  Font Awesome icon and CSS toolkit -->
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" type="text/css">
<!-- /Font Awesome icon and CSS toolkit -->

<!--  Slick -->
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css">
<!--  /Slick -->

<!--  Gridder -->
<link rel="stylesheet" type="text/css" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/TGIT/styles/css/vendor/gridder/jquery.gridder.min.css" >
<!-- /Gridder  -->

<!-- ********************* TGIT - /Stylesheets ********************* -->

<!-- ********************* TGIT -  JavaScript  ********************* -->

<!--  Slick JS -->
<script type="text/javascript" src="http://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js"></script>
<!--  /Slick JS -->

<!--  Velocity JS -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<!--  /Velocity JS -->

<!--  GRIDDER -->
<script type="text/javascript" src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/TGIT/scripts/js/vendor/gridder/jquery.gridder.min.js"></script>
<!-- /GRIDDER  -->

<!--  Hammer JS  -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.6/hammer.min.js"></script>
<!-- /Hammer JS  -->

<!--  jQuery Hammer JS  -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery.hammerjs/2.0.0/jquery.hammer.js"></script>
<!-- /jQuery Hammer JS  -->

<!--  Waypoints  -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"></script>
<!-- /Waypoints  -->

<!--  js-cookie  -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.0/js.cookie.min.js"></script>
<!-- /js-cookie  -->

<!--  codebase  -->
<script type="text/javascript" src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/TGIT/scripts/js/main.js"></script>
<!-- /codebase  -->

<!-- ********************* TGIT - /JavaScript  ********************* -->

<!-- =====================  /Titan Global IT   ===================== -->

</head>

<body <?php body_class(); ?>>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-66029844-2', 'auto');
  ga('send', 'pageview');
</script>

<div id="page" class="hfeed">
    <header id="TGIT-menu" class="TGIT-row TGIT-row--white clearfix" role="banner">
        <div class="TGIT-nav-container TGIT-row__container clearfix">
            <nav class="TGIT-menu clearfix" id="access" role="navigation">
                <h3 class="assistive-text"><?php _e( 'Main menu', 'twentyeleven' ); ?></h3>
                <!-- Allow screen readers / text browsers to skip the navigation menu -->
                <div class="skip-link"><a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to primary content', 'twentyeleven' ); ?>"><?php _e( 'Skip to primary content', 'twentyeleven' ); ?></a></div>
                <div class="skip-link"><a class="assistive-text" href="#secondary" title="<?php esc_attr_e( 'Skip to secondary content', 'twentyeleven' ); ?>"><?php _e( 'Skip to secondary content', 'twentyeleven' ); ?></a></div>
                <div class="TGIT-menu__page-links clearfix">
                    <div class="TGIT-menu__page-links__logo">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                            <img class="TGIT-menu__page-links__logo__image TGIT-menu__page-links__logo__image--cropped" src="/wp-content/uploads/2016/02/Maven-horiz-logo-bug.png">
                            <img class="TGIT-menu__page-links__logo__image TGIT-menu__page-links__logo__image--full" src="/wp-content/uploads/2016/02/Maven-horiz-logo.png">
                        </a>
                    </div><!-- class="TGIT-menu__page-links__logo" -->
                    <div class="TGIT-menu__page-links__items">
                        <?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
                    </div><!-- class="TGIT-menu__page-links__items" -->
                </div><!-- class="TGIT-menu__page-links" -->
                <div class="TGIT-menu__other-links">
                    <div class="TGIT-menu__other-links__apply">
                        <a href="https://angel.co/maven-ventures" target="_blank">
                            <button class="home_hero__slide__text__button TGIT-view_more_button">
                                <div class="button-content"><div class="button-content__text">APPLY NOW</div><div class="button-content__icon"><i class="fa fa-caret-right"></i></div></div>
                            </button>
                        </a>
                    </div><!-- class="TGIT-menu__other-links__apply" -->
                    <div class="TGIT-menu__other-links__social">
                        <a href="https://www.linkedin.com/company/maven-ventures-vc.?trk=biz-companies-cym" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>
                        <a href="https://twitter.com/mavenvc" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
						<a href="https://www.facebook.com/MavenVC/" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>
                    </div><!-- class="TGIT-menu__other-links__social" -->
                    <div class="TGIT-menu__other-links__mobile-menu">
                        <div class="menu-button-wrapper">
                            <div class="menu-button menu-button--x">
                                <span>toggle menu</span>
                            </div><!-- class="menu-button menu-button--x" -->
                        </div><!-- class="menu-button-wrapper" -->
                        <div class="menu-modal">
                            <div class="menu-modal__content">
                                <div class="menu-modal__content__nav-links">
                                    <?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
                                </div><!-- class="menu-modal__content__nav-links" -->
                                <div class="menu-modal__content__footer">
                                    <li class="menu-modal__content__footer__social">
                                        <a href="https://www.linkedin.com/company/mavenvc" target="_blank"><i class="fa fa-linkedin"></i></a>
                                        <a href="https://twitter.com/mavenvc" target="_blank"><i class="fa fa-twitter"></i></a>					
                                      <a href="https://www.facebook.com/MavenVC/" target="_blank"><i class="fa fa-facebook"></i></a> 							
                                    </li>
                                    <li class="menu-modal__content__footer__apply">
                                        <a href="https://angel.co/maven-ventures" target="_blank">APPLY</a>
                                    </li><!-- class="menu-modal__content__footer__apply" -->
                                </div><!-- class="menu-modal__content__footer" -->
                            </div><!-- class="menu-modal__content" -->
                        </div><!-- class="menu-modal" -->
                    </div><!-- class="TGIT-menu__other-links__mobile-menu" -->
                </div><!-- class="TGIT-menu__other-links" -->
            </nav><!-- class="TGIT-menu" id="access" role="navigation" -->
        </div><!-- class="TGIT-nav-container TGIT-row__container clearfix" -->
        <progress class="reading_progress_indicator js-ReadingProgressIndicator" value="0"></progress>
    </header><!-- id="TGIT-menu" class="TGIT-row TGIT-row--white clearfix" role="banner" -->

    <div id="main">
        <div class="scroll-to-top js-jQueryScrollToTop">
            <i class="fa fa-angle-up fa-3x scroll-to-top__icon"></i>
        </div>