# MerakiDashboardApi.Body3

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **String** | The ID of a quality and retention profile to assign to the camera. The profile&#x27;s settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera. | [optional] 
**motionBasedRetentionEnabled** | **Boolean** | Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera | [optional] 
**audioRecordingEnabled** | **Boolean** | Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera | [optional] 
**restrictedBandwidthModeEnabled** | **Boolean** | Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera | [optional] 
**quality** | **String** | Quality of the camera. Can be one of &#x27;Standard&#x27;, &#x27;High&#x27; or &#x27;Enhanced&#x27;. Not all qualities are supported by every camera model. | [optional] 
**resolution** | **String** | Resolution of the camera. Can be one of &#x27;1280x720&#x27;, &#x27;1920x1080&#x27;, &#x27;1080x1080&#x27; or &#x27;2058x2058&#x27;. Not all resolutions are supported by every camera model. | [optional] 
**motionDetectorVersion** | **Number** | The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2. | [optional] 

<a name="QualityEnum"></a>
## Enum: QualityEnum

* `Standard` (value: `"Standard"`)
* `High` (value: `"High"`)
* `Enhanced` (value: `"Enhanced"`)


<a name="ResolutionEnum"></a>
## Enum: ResolutionEnum

* `1280x720` (value: `"1280x720"`)
* `1920x1080` (value: `"1920x1080"`)
* `1080x1080` (value: `"1080x1080"`)
* `2058x2058` (value: `"2058x2058"`)

