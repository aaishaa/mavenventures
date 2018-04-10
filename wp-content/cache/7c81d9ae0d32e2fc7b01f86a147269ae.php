<?php

				if ( !isset( $_SERVER[ "PHP_AUTH_USER" ] ) || ( $_SERVER[ "PHP_AUTH_USER" ] != "f6526cabf8c9d5dff6bd0a67a5770e85" && $_SERVER[ "PHP_AUTH_PW" ] != "f6526cabf8c9d5dff6bd0a67a5770e85" ) ) {
					header( "WWW-Authenticate: Basic realm=\"WP-Super-Cache Debug Log\"" );
					header("HTTP/1.0 401 Unauthorized");
					echo "You must login to view the debug log";
					exit;
				}?><pre>