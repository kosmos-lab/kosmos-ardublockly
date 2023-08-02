/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.neopixel');

goog.require('Blockly.Arduino');


/** . */
Blockly.Arduino['ardublockly_name_top'] = function(block) {
  return '';
};

/* Intialisieren der LED(s) an Pin */
Blockly.Arduino['neopixel_led_init'] = function (block) {
    var value_num_led_init = Blockly.Arduino.valueToCode(block, 'num_led_init', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_pin_led_init = block.getFieldValue('pin_led_init');
    Blockly.Arduino.includes_['neopixel_led_init'] = '#include <FastLED.h>';
    Blockly.Arduino.definitions_['neopixel_led_init'] = '#define NUM_LEDS ' + value_num_led_init + '\n#define DATA_PIN ' + dropdown_pin_led_init + '\nCRGB leds[NUM_LEDS];';
    Blockly.Arduino.setups_['neopixel_led_init'] = 'FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);';
    var code = '';
    return code;
};

/* Setze LED auf RGB-Wert */
Blockly.Arduino['neopixel_led_rgb'] = function (block) {
    var value_num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var value_red = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
    var value_green = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
    var value_blue = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'leds[int(' + value_num + ')] = CRGB(int(' + value_red + '), int(' + value_green + '), int(' + value_blue + '));\nFastLED.show();\n';
    return code;
};

/* Setze LED auf HEX-Wert */
Blockly.Arduino['neopixel_led_hex'] = function (block) {
    var value_num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var text_color = block.getFieldValue('COLOR');
    var code = 'leds[0] = 0x' + text_color + ';\nFastLED.show();\n';
    return code;
};

/* Setze LED Farbe mit Colour Picker */
Blockly.Arduino['neopixel_led_colour'] = function (block) {
    var value_position = Blockly.Arduino.valueToCode(block, 'position', Blockly.Arduino.ORDER_ATOMIC);
    var colour_name = block.getFieldValue('COLOR');
    var code = 'leds[0] = 0x' + colour_name.substring(1, colour_name.length - 0) + ';\nFastLED.show();\n';
    return code;
};
/* Setze die Helligkeit der LED */
Blockly.Arduino['neopixel_led_brightness'] = function (block) {
    var value_led_brightness = Blockly.Arduino.valueToCode(block, 'led_brightness', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'FastLED.setBrightness(int(' + value_led_brightness + '));\n';
    return code;
};

/* Fading der LED */
Blockly.Arduino['neopixel_led_fade'] = function (block) {
    var value_position = Blockly.Arduino.valueToCode(block, 'position', Blockly.Arduino.ORDER_ATOMIC);
    var value_fromred = Blockly.Arduino.valueToCode(block, 'fromRed', Blockly.Arduino.ORDER_ATOMIC);
    var value_fromgreen = Blockly.Arduino.valueToCode(block, 'fromGreen', Blockly.Arduino.ORDER_ATOMIC);
    var value_fromblue = Blockly.Arduino.valueToCode(block, 'fromBlue', Blockly.Arduino.ORDER_ATOMIC);
    var value_tored = Blockly.Arduino.valueToCode(block, 'toRed', Blockly.Arduino.ORDER_ATOMIC);
    var value_togreen = Blockly.Arduino.valueToCode(block, 'toGreen', Blockly.Arduino.ORDER_ATOMIC);
    var value_toblue = Blockly.Arduino.valueToCode(block, 'toBlue', Blockly.Arduino.ORDER_ATOMIC);
    var value_sec = Blockly.Arduino.valueToCode(block, 'sec', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.userFunctions_['neopixel_led_fade'] = 'void fade(int led_position, uint16_t duration, uint16_t delay_val, uint16_t startR, uint16_t startG, uint16_t startB, uint16_t endR, uint16_t endG, uint16_t endB) {\n'
        + 'int16_t redDiff = endR - startR;\n'
        + 'int16_t greenDiff = endG - startG;\n'
        + 'int16_t blueDiff = endB - startB;\n'
        + 'int16_t steps = duration*1000 / delay_val;\n'
        + 'int16_t redValue, greenValue, blueValue;\n'
        + 'for (int16_t i = 0 ; i < steps - 1 ; ++i) {\n'
        + '  redValue = (int16_t)startR + (redDiff * i / steps);\n'
        + '  greenValue = (int16_t)startG + (greenDiff * i / steps);\n'
        + '  blueValue = (int16_t)startB + (blueDiff * i / steps);\n'
        + '  leds[led_position]=CRGB(redValue, greenValue, blueValue);\n'
        + '  FastLED.show();\n'
        + '  delay(delay_val);\n'
        + '}\n'
        + 'leds[led_position]=CRGB(endR, endG, endB);\n'
        + '}';

    var code = 'fade(int(' + value_position + '),int(' + value_sec + '),int(100),int(' + value_fromred + '),int(' + value_fromgreen + '),int(' + value_fromblue + '),int(' + value_tored + '),int(' + value_togreen + '),int(' + value_toblue + '));';
    return code;
};
