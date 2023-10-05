<?php
/**
 * Plugin Name:       Static Block
 * Plugin URI:        craigblain.co.uk
 * Description:       This is a static block, generated using @wordpress&#x2F;create-block (no slug or options defined
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            CRaig Blain
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       static-block
 * Domain Path:       craigblain.co.uk
 * Update URI:        craigblain.co.uk
 *
 * @package           static-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function static_block_static_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'static_block_static_block_block_init' );
