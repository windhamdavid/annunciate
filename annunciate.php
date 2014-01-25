<?php
/**
 * Plugin Name: Annunciate
 * Plugin URI:  http://davidawindham.com/annunciate
 * Description: an·nun·ci·ate - v. to announce [ Latin - annūntiāre ]
 * Version:     0.1.0
 * Author:      windhamdavid
 * Author URI:  http://davidawindham.com/
 * License:     GPLv2+
 * Domain Path: /languages
 */

/**
 * Copyright (c) 2014 windhamdavid (email : david (at) davidawindham.com)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2 or, at
 * your discretion, any later version, as published by the Free
 * Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */


define( 'ANUN_VERSION', '0.1.0' );
define( 'ANUN_URL',     plugin_dir_url( __FILE__ ) );
define( 'ANUN_PATH',    dirname( __FILE__ ) . '/' );

function anun_init() {
	$locale = apply_filters( 'plugin_locale', get_locale(), 'anun' );
	load_textdomain( 'anun', WP_LANG_DIR . '/y/y-' . $locale . '.mo' );
	load_plugin_textdomain( 'anun', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}

function anun_activate() {
	anun_init();
	flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'anun_activate' );

function anun_deactivate() {
}
register_deactivation_hook( __FILE__, 'anun_deactivate' );

// actions
add_action( 'init', 'anun_init' );

// filters

// shortcodes
