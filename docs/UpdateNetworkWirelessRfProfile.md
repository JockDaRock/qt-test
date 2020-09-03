# MerakiDashboardApi.UpdateNetworkWirelessRfProfile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the new profile. Must be unique. | [optional] 
**clientBalancingEnabled** | **Boolean** | Steers client to best available access point. Can be either true or false. | [optional] 
**minBitrateType** | **String** | Minimum bitrate can be set to either 'band' or 'ssid'. | [optional] 
**bandSelectionType** | **String** | Band selection can be set to either 'ssid' or 'ap'. | [optional] 
**apBandSettings** | [**NetworksnetworkIdwirelessrfProfilesrfProfileIdApBandSettings**](NetworksnetworkIdwirelessrfProfilesrfProfileIdApBandSettings.md) |  | [optional] 
**twoFourGhzSettings** | [**NetworksnetworkIdwirelessrfProfilesrfProfileIdTwoFourGhzSettings**](NetworksnetworkIdwirelessrfProfilesrfProfileIdTwoFourGhzSettings.md) |  | [optional] 
**fiveGhzSettings** | [**NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings**](NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings.md) |  | [optional] 


<a name="MinBitrateTypeEnum"></a>
## Enum: MinBitrateTypeEnum


* `band` (value: `"band"`)

* `ssid` (value: `"ssid"`)




<a name="BandSelectionTypeEnum"></a>
## Enum: BandSelectionTypeEnum


* `ssid` (value: `"ssid"`)

* `ap` (value: `"ap"`)




