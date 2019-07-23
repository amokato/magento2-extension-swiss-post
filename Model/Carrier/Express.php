<?php
    /**
     * Copyright © Shopigo. All rights reserved.
     * See LICENSE.txt for license details (http://opensource.org/licenses/osl-3.0.php).
     */

    namespace Shopigo\SwissPost\Model\Carrier;

    class Express extends DefaultCarrier
    {
        /**
         * @return string
         */
        function getCarrier()
        {
            return 'express';
        }
    }