<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astrid
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area" role="complementary">
	<!-- <?php dynamic_sidebar( 'sidebar-1' ); ?> -->
	<div class='widget-grouping'>
		<h2 class='entry-title recent-posts-h2'>Recent Posts</h2>
		<ul class='recent-posts-ul'>
			<?php wp_get_archives('type=postbypost&limit=5'); ?>
		</ul>
	</div>
	<div class='widget-grouping widget-grouping-2'>
	    <a href="https://www.linkedin.com/company/maven-ventures-vc.?trk=biz-companies-cym" target="_blank"><i class="fa fa-linkedin fa"></i></a>
        <a href="https://twitter.com/mavenvc" target="_blank"><i class="fa fa-twitter fa"></i></a>
		<a href="https://www.facebook.com/MavenVC/" target="_blank"><i class="fa fa-facebook fa"></i></a>
	</div>
	<div class='widget-grouping video-positioner'>
		<h2 class='entry-title recent-posts-h2 video-h2'>Videos</h2>
		<div class='dain-video-wrapper'><iframe class='youtube-video' width="220px" height="170px" src="https://www.youtube.com/embed/jpccXl_B6Fs" frameborder="0" allowfullscreen></iframe></div>
	</div>
</aside><!-- #secondary -->
