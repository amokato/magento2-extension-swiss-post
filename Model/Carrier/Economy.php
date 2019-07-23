<?php
    /**
     * Copyright © Shopigo. All rights reserved.
     * See LICENSE.txt for license details (http://opensource.org/licenses/osl-3.0.php).
     */

    namespace Shopigo\SwissPost\Model\Carrier;

    class Economy extends AbstractCarrier implements CarrierInterface
    {
        /**
         * @return string
         */
        function getCarrier()
        {
            return 'economy';
        }
    }