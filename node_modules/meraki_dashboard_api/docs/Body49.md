# MerakiDashboardApi.Body49

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the new profile. Must be unique. | [optional] 
**motionBasedRetentionEnabled** | **Boolean** | Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. | [optional] 
**restrictedBandwidthModeEnabled** | **Boolean** | Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. | [optional] 
**audioRecordingEnabled** | **Boolean** | Whether or not to record audio. Can be either true or false. Defaults to false. | [optional] 
**cloudArchiveEnabled** | **Boolean** | Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false. | [optional] 
**motionDetectorVersion** | **Number** | The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2. | [optional] 
**scheduleId** | **String** | Schedule for which this camera will record video, or &#x27;null&#x27; to always record. | [optional] 
**maxRetentionDays** | **Number** | The maximum number of days for which the data will be stored, or &#x27;null&#x27; to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days | [optional] 
**videoSettings** | [**NetworksnetworkIdcameraqualityRetentionProfilesVideoSettings**](NetworksnetworkIdcameraqualityRetentionProfilesVideoSettings.md) |  | [optional] 
