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
        '../../model/shipping-rates-validator/default',
        '../../model/shipping-rates-validation-rules/default'
    ],
    function (
        Component,
        defaultShippingRatesValidator,
        defaultShippingRatesValidationRules,
        moonShippingRatesValidator,
        moonShippingRatesValidationRules
    ) {
        "use strict";
        defaultShippingRatesValidator.registerValidator('moon', moonShippingRatesValidator);
        defaultShippingRatesValidationRules.registerRules('moon', moonShippingRatesValidationRules);
        return Component;
    }
);
