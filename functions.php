<?php
function enqueue_custom_script()
{
    if (is_user_logged_in()) {
        $current_user = wp_get_current_user();
        if ($current_user && isset($current_user->user_email) && !empty($current_user->user_email)) {
            $user_email = $current_user->user_email;
        } else {
            $user_email = 'No email found';
        }
    } else {
        $user_email = 'Not logged in';
    }

    // Enregistrer un script inline dummy
    wp_register_script('custom-inline-script', '');
    wp_enqueue_script('custom-inline-script');
    wp_localize_script('custom-inline-script', 'user_data', array('email' => $user_email));
}
add_action('wp_enqueue_scripts', 'enqueue_custom_script');
