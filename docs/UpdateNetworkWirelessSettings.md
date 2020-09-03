# MerakiDashboardApi.UpdateNetworkWirelessSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meshingEnabled** | **Boolean** | Toggle for enabling or disabling meshing in a network | [optional] 
**ipv6BridgeEnabled** | **Boolean** | Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode) | [optional] 
**locationAnalyticsEnabled** | **Boolean** | Toggle for enabling or disabling location analytics for your network | [optional] 
**upgradeStrategy** | **String** | The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher' | [optional] 
**ledLightsOn** | **Boolean** | Toggle for enabling or disabling LED lights on all APs in the network (making them run dark) | [optional] 


<a name="UpgradeStrategyEnum"></a>
## Enum: UpgradeStrategyEnum


* `minimizeUpgradeTime` (value: `"minimizeUpgradeTime"`)

* `minimizeClientDowntime` (value: `"minimizeClientDowntime"`)




