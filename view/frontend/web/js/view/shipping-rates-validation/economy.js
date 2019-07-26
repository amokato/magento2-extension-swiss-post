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
        '../../model/shipping-rates-validator/economy',
        '../../model/shipping-rates-validation-rules/economy'
    ],
    function (
        Component,
        defaultShippingRatesValidator,
        defaultShippingRatesValidationRules,
        economyShippingRatesValidator,
        economyShippingRatesValidationRules
    ) {
        "use strict";
        defaultShippingRatesValidator.registerValidator('swp_economy', economyShippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('swp_economy', economyShippingRatesValidationRules);
        return Component;
    }
);
