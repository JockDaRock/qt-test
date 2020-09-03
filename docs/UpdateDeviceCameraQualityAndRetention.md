# MerakiDashboardApi.UpdateDeviceCameraQualityAndRetention

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **String** | The ID of a quality and retention profile to assign to the camera. The profile's settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera. | [optional] 
**motionBasedRetentionEnabled** | **Boolean** | Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera | [optional] 
**audioRecordingEnabled** | **Boolean** | Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera | [optional] 
**restrictedBandwidthModeEnabled** | **Boolean** | Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera | [optional] 
**quality** | **String** | Quality of the camera. Can be one of 'Standard', 'High' or 'Enhanced'. Not all qualities are supported by every camera model. | [optional] 
**resolution** | **String** | Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080' or '2058x2058'. Not all resolutions are supported by every camera model. | [optional] 
**motionDetectorVersion** | **Number** | The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2. | [optional] 


<a name="QualityEnum"></a>
## Enum: QualityEnum


* `standard` (value: `"Standard"`)

* `high` (value: `"High"`)

* `enhanced` (value: `"Enhanced"`)




<a name="ResolutionEnum"></a>
## Enum: ResolutionEnum


* `_1280x720` (value: `"1280x720"`)

* `_1920x1080` (value: `"1920x1080"`)

* `_1080x1080` (value: `"1080x1080"`)

* `_2058x2058` (value: `"2058x2058"`)




