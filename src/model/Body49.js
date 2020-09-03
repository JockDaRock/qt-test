/**
 * Meraki Dashboard API
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date: 05 August, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https://www.meraki.com) 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NetworksnetworkIdcameraqualityRetentionProfilesVideoSettings from './NetworksnetworkIdcameraqualityRetentionProfilesVideoSettings';

/**
* The Body49 model module.
* @module model/Body49
* @version 1.0.0
*/
export default class Body49 {
    /**
    * Constructs a new <code>Body49</code>.
    * @alias module:model/Body49
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body49</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body49} obj Optional instance to populate.
    * @return {module:model/Body49} The populated <code>Body49</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body49();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('motionBasedRetentionEnabled')) {
                obj['motionBasedRetentionEnabled'] = ApiClient.convertToType(data['motionBasedRetentionEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('restrictedBandwidthModeEnabled')) {
                obj['restrictedBandwidthModeEnabled'] = ApiClient.convertToType(data['restrictedBandwidthModeEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('audioRecordingEnabled')) {
                obj['audioRecordingEnabled'] = ApiClient.convertToType(data['audioRecordingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('cloudArchiveEnabled')) {
                obj['cloudArchiveEnabled'] = ApiClient.convertToType(data['cloudArchiveEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('motionDetectorVersion')) {
                obj['motionDetectorVersion'] = ApiClient.convertToType(data['motionDetectorVersion'], 'Number');
            }
            if (data.hasOwnProperty('scheduleId')) {
                obj['scheduleId'] = ApiClient.convertToType(data['scheduleId'], 'String');
            }
            if (data.hasOwnProperty('maxRetentionDays')) {
                obj['maxRetentionDays'] = ApiClient.convertToType(data['maxRetentionDays'], 'Number');
            }
            if (data.hasOwnProperty('videoSettings')) {
                obj['videoSettings'] = NetworksnetworkIdcameraqualityRetentionProfilesVideoSettings.constructFromObject(data['videoSettings']);
            }
        }
        return obj;
    }

    /**
    * The name of the new profile. Must be unique.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false.
    * @member {Boolean} motionBasedRetentionEnabled
    */
    'motionBasedRetentionEnabled' = undefined;
    /**
    * Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false.
    * @member {Boolean} restrictedBandwidthModeEnabled
    */
    'restrictedBandwidthModeEnabled' = undefined;
    /**
    * Whether or not to record audio. Can be either true or false. Defaults to false.
    * @member {Boolean} audioRecordingEnabled
    */
    'audioRecordingEnabled' = undefined;
    /**
    * Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.
    * @member {Boolean} cloudArchiveEnabled
    */
    'cloudArchiveEnabled' = undefined;
    /**
    * The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.
    * @member {Number} motionDetectorVersion
    */
    'motionDetectorVersion' = undefined;
    /**
    * Schedule for which this camera will record video, or 'null' to always record.
    * @member {String} scheduleId
    */
    'scheduleId' = undefined;
    /**
    * The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days
    * @member {Number} maxRetentionDays
    */
    'maxRetentionDays' = undefined;
    /**
    * @member {module:model/NetworksnetworkIdcameraqualityRetentionProfilesVideoSettings} videoSettings
    */
    'videoSettings' = undefined;




}