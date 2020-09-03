# MerakiDashboardApi.Body110

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the new profile. Must be unique. This param is required on creation. | 
**clientBalancingEnabled** | **Boolean** | Steers client to best available access point. Can be either true or false. Defaults to true. | [optional] 
**minBitrateType** | **String** | Minimum bitrate can be set to either &#x27;band&#x27; or &#x27;ssid&#x27;. Defaults to band. | [optional] 
**bandSelectionType** | **String** | Band selection can be set to either &#x27;ssid&#x27; or &#x27;ap&#x27;. This param is required on creation. | 
**apBandSettings** | [**NetworksnetworkIdwirelessrfProfilesApBandSettings**](NetworksnetworkIdwirelessrfProfilesApBandSettings.md) |  | [optional] 
**twoFourGhzSettings** | [**NetworksnetworkIdwirelessrfProfilesTwoFourGhzSettings**](NetworksnetworkIdwirelessrfProfilesTwoFourGhzSettings.md) |  | [optional] 
**fiveGhzSettings** | [**NetworksnetworkIdwirelessrfProfilesFiveGhzSettings**](NetworksnetworkIdwirelessrfProfilesFiveGhzSettings.md) |  | [optional] 

<a name="MinBitrateTypeEnum"></a>
## Enum: MinBitrateTypeEnum

* `band` (value: `"band"`)
* `ssid` (value: `"ssid"`)


<a name="BandSelectionTypeEnum"></a>
## Enum: BandSelectionTypeEnum

* `ssid` (value: `"ssid"`)
* `ap` (value: `"ap"`)

