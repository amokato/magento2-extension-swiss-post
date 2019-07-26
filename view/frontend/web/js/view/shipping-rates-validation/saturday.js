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
        '../../model/shipping-rates-validator/saturday',
        '../../model/shipping-rates-validation-rules/saturday'
    ],
    function (
        Component,
        defaultShippingRatesValidator,
        defaultShippingRatesValidationRules,
        saturdayShippingRatesValidator,
        saturdayShippingRatesValidationRules
    ) {
        "use strict";
        defaultShippingRatesValidator.registerValidator('saturday', saturdayShippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('saturday', saturdayShippingRatesValidationRules);
        return Component;
    }
);
