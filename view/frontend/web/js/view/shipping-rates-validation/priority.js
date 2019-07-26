/**
 * Copyright © Shopigo. All rights reserved.
 * See LICENSE.txt for license details (http://opensource.org/licenses/osl-3.0.php).
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/shipping-rates-validator',
        'Magento_Checkout/js/model/shipping-rates-validation-rules',
        '../../model/shipping-rates-validator/priority',
        '../../model/shipping-rates-validation-rules/priority'
    ],
    function (
        Component,
        defaultShippingRatesValidator,
        defaultShippingRatesValidationRules,
        priorityShippingRatesValidator,
        priorityShippingRatesValidationRules
    ) {
        "use strict";
        defaultShippingRatesValidator.registerValidator('swp_priority', priorityShippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('swp_priority', priorityShippingRatesValidationRules);
        return Component;
    }
);
