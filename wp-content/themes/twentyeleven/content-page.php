<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><?php the_title(); ?></h1>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<div class="TGIT-row TGIT-row--green">
			
			<div class="TGIT-row__container TGIT-team_testimonials">
        <div class="TGIT-section__title TGIT-team_testimonials__title">
            Testimonials
        </div>
        <div class="TGIT-section__content TGIT-team_testimonials__content">
          <div class="TGIT-row__container TGIT-testimonials__slider TGIT-testimonials__slider--green">
						<?php
						get_template_part('templates/testimonials-slider');
						?>
					</div>
				</div>
			</div>
		</div>
		<?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'twentyeleven' ) . '</span>', 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
	<footer class="entry-meta">
		<?php edit_post_link( __( 'Edit', 'twentyeleven' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->
