<?php
/** 
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information by
 * visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// // temp config so can use wp-admin during migration -- kill later
// define('WP_CACHE', true); //Added by WP-Cache Manager
// define( 'WPCACHEHOME', '/Users/abbasis/code/clients/2LDesign/mavenventures/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
// define('WP_HOME', 'http://www.mavenventures.com');
// define('WP_SITEURL', 'http://www.mavenventures.com');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'maven_ventures');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link http://api.wordpress.org/secret-key/1.1/ WordPress.org secret-key service}
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jb%NEcO$@aUnexFW*jZi0*SyPxs9eA!)@ou@pjk6YaXA7$xMqzw#DurSJ84LRCMT');
define('SECURE_AUTH_KEY',  'C#zlt6Td6bway48z8&cOOfVG6^C0Se5n^wDzXSMwPRdhw#w$3l0#Y4#5CSI7Nnlp');
define('LOGGED_IN_KEY',    'OkRwgv2vx7%b#mRCK2f%!Sv^J*VjS8uJ&1*$mJ$OuAS#!qU3fa19b8ou4idWU&Sq');
define('NONCE_KEY',        '8&soAkR776&#9kIPR9O2Ef5AWjTi7^fJu%Nn2&vYxgIeZtS7!evac(Y3wxlyeRSY');
define('AUTH_SALT',        'WLKXOJPdu@ro5vmh5%w@5%1jCvsdXhhg8H0!alcjt1Q!O*&)Va)gcYxtojVD7MQ6');
define('SECURE_AUTH_SALT', 'M@GNom8x1SZP6VN1L0m1Ry)!j3YWF*NVggiWJV174b*rLA3mQrhu9E^3Mx!2bx1(');
define('LOGGED_IN_SALT',   '7V$XNj#1WRZsx2yI1UyJ!eEy3umdZZKksggeFz!0KsPocitebvXF@4lMlRpX$S^I');
define('NONCE_SALT',       '#tG6Pz$K@i!X8p)QJG@QEO)ybYyffxXdUQx)VaN5Kb6o8JN4)b^KJIsyI4*u(@r!');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress.  A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de.mo to wp-content/languages and set WPLANG to 'de' to enable German
 * language support.
 */
define ('WPLANG', 'en_US');

define ('FS_METHOD', 'direct');

define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

?>
