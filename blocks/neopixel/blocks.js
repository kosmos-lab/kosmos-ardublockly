/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.neopixel');

goog.require('Blockly.Blocks');

Blockly.Blocks.neopixel.HUE = 250;

/* Ardublockly logo block */
Blockly.Blocks['ardublockly_name_top'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BLOCKS_TEST_);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.test.HUE);
  }
};


/* Intialisieren der LED(s) an Pin */
Blockly.Blocks['neopixel_led_init'] = {
 /**
 * Grove LED module block definition.
 * @this Blockly.Block
 */
    init: function () {       
        this.setColour(Blockly.Blocks.neopixel.HUE);
        this.appendValueInput("num_led_init")
 /*           .appendField(new Blockly.FieldImage(
                '/blocks/grove/img/led.png', 32, 32))*/
            .appendField(Blockly.Msg.NEOPIXEL_LED_INIT_INIT)
        this.appendDummyInput()
            .appendField(Blockly.Msg.NEOPIXEL_LED_INIT_PIN)
            .appendField(new Blockly.FieldDropdown(
               Blockly.Arduino.Boards.selected.digitalPins), "pin_led_init");
        this.setInputsInline();
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NEOPIXEL_LED_INIT_TIP);
        this.setHelpUrl("webseite");
    }
 
};

/* Setze LED auf RGB-Wert */
Blockly.Blocks['neopixel_led_rgb'] = {
    /**
 * Grove SET LED RGB Color.
 * @this Blockly.Block
 */
    init: function () {
        this.setColour(Blockly.Blocks.neopixel.HUE);
        this.appendValueInput("NUM")
            .setCheck("Number")
 /*           .appendField(new Blockly.FieldImage(
                '/blocks/grove/img/led.png', 32, 32))*/
            .appendField(Blockly.Msg.NEOPIXEL_LED_SETCOLOR)
            .appendField(Blockly.Msg.NEOPIXEL_LED_PXNR);
        this.appendDummyInput()
            .appendField('');
        this.appendValueInput("RED")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_LED_RED);
        this.appendValueInput("GREEN")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_LED_GREEN);
        this.appendValueInput("BLUE")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_LED_BLUE);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('tooltip');
        this.setHelpUrl('webseite');
    }
};
/* Setze die Helligkeit der LED */
Blockly.Blocks['neopixel_led_brightness'] = {
 /**
* Grove SET LED RGB Color.
* @this Blockly.Block
*/
    init: function () {
        this.setColour(Blockly.Blocks.neopixel.HUE);
        this.appendValueInput("led_brightness")
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_LED_BRIGHT);
        this.appendDummyInput()
            .appendField("(0...255)");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('tooltip');
        this.setHelpUrl('webseite');
    }
};
/* Fading der LED */
Blockly.Blocks['neopixel_led_fade'] = {
    init: function () {
        this.setColour(Blockly.Blocks.neopixel.HUE);
        this.appendValueInput("position")
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_LED_FADE)
            .appendField(Blockly.Msg.NEOPIXEL_LED_PXNR);
        this.appendDummyInput()
            .appendField(Blockly.Msg.NEOPIXEL_LED_FADE_FROM);
        this.appendValueInput("fromRed")
            .setCheck("Number");
        this.appendValueInput("fromGreen")
            .setCheck("Number");
        this.appendValueInput("fromBlue")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.NEOPIXEL_LED_FADE_TO);
        this.appendValueInput("toRed")
            .setCheck("Number");
        this.appendValueInput("toGreen")
            .setCheck("Number");
        this.appendValueInput("toBlue")
            .setCheck("Number")
        this.appendDummyInput()
            .appendField("in");
        this.appendValueInput("sec")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.NEOPIXEL_LED_FADE_SEC);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('tooltip');
        this.setHelpUrl('webseite');
    }
};
//Blockly.Blocks['grove_led'] = {
//    /**
//     * Grove LED module block definition.
//     * @this Blockly.Block
//     */
//    init: function () {
//        this.setHelpUrl('http://www.seeedstudio.com/wiki/Grove_-_LED');
//        this.setColour(Blockly.Blocks.grove.HUE);
//        this.appendValueInput('STATE')
//            .appendField(new Blockly.FieldImage(
//                '/blocks/grove/img/led.png', 32, 32))
//            .appendField(Blockly.Msg.BLOCKS_GROVE_LED)
//            .appendField(new Blockly.FieldDropdown(
//                Blockly.Arduino.Boards.selected.groveDigital), 'CONNECTOR')
//            .setCheck(Blockly.Types.BOOLEAN.checkList);
//        this.setInputsInline(false);
//        this.setPreviousStatement(true, null);
//        this.setNextStatement(true, null);
//        this.setTooltip(Blockly.Msg.BLOCKS_GROVE_LED_TIP);
//    },
//    /**
//     * Updates the content of the the pin related fields.
//     * @this Blockly.Block
//     */
//    updateFields: function () {
//        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
//            this, 'CONNECTOR', 'groveDigital');
//    },
//    /**
//     * Returns a list with the connector used pins. For this block just the first.
//     * @this Blockly.Block
//     * @return {!Array<string>} List of used pins by this block.
//     */
//    connectorPinUsage: function () {
//        return [this.getFieldValue('CONNECTOR')];
//    }
//};
/* Setze LED auf HEX-Wert */
Blockly.Blocks['neopixel_led_hex'] = {
    init: function () {
        this.appendValueInput("NUM")
            .setCheck("Number")
            .appendField(Blockly.Msg.SMILE_LED_SET);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SMILE_LED_AT_HEX)
            .appendField(new Blockly.FieldTextInput("00FF00"), "COLOR");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.smile.HUE);
        this.setTooltip('tooltip');
        this.setHelpUrl('webseite');
    }
};

/* Initialisieren eines Wlans mit wifimanager.h */
Blockly.Blocks['smile_wifi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SMILE_WIFI_INIT);
        this.appendValueInput("NETWORKNAME")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SMILE_WIFI_NAME);
        this.setInputsInline(false);
        this.setPreviousStatement(true)
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.smile.HUE);
        this.setTooltip('tooltip');
        this.setHelpUrl('webseite');
    }
};
/* Setze LED Farbe mit Colour Picker */
Blockly.Blocks['neopixel_led_colour'] = {
    init: function () {
        this.appendValueInput("position")
            .setCheck("Number")
            .appendField(Blockly.Msg.SMILE_LED_SET);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SMILE_LED_AT)
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.smile.HUE);
        this.setTooltip('tooltip');
        this.setHelpUrl('webseite');
    }
};
