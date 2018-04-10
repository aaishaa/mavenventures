
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><?php the_title(); ?></h1>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<div id="TGIT" class="home">
			<?php the_content(); ?>
			<div class="TGIT-row TGIT-row--grey">
				<div class="TGIT-row__container TGIT-team_testimonials">
          <div class="TGIT-section__title TGIT-team_testimonials__title">
              Testimonials
          </div>
          <div class="TGIT-section__content TGIT-team_testimonials__content">
            <div class="TGIT-row__container TGIT-testimonials__slider">
							<?php
							get_template_part('templates/testimonials-slider');
							?>
						</div>
					</div>
				</div>
			</div>
			<?php
			get_template_part('templates/partners-section');
			// get_template_part('templates/home-portfolio-section');
			?>
		</div>
		<?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'twentyeleven' ) . '</span>', 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
	<footer class="entry-meta">
		<?php edit_post_link( __( 'Edit', 'twentyeleven' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->
