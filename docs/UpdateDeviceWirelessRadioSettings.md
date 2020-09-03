# MerakiDashboardApi.UpdateDeviceWirelessRadioSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rfProfileId** | **Number** |     The ID of an RF profile to assign to the device. If the value of this parameter is null, the appropriate basic RF profile     (indoor or outdoor) will be assigned to the device. Assigning an RF profile will clear ALL manually configured overrides     on the device (channel width, channel, power).  | [optional] 
**twoFourGhzSettings** | [**DevicesserialwirelessradiosettingsTwoFourGhzSettings**](DevicesserialwirelessradiosettingsTwoFourGhzSettings.md) |  | [optional] 
**fiveGhzSettings** | [**DevicesserialwirelessradiosettingsFiveGhzSettings**](DevicesserialwirelessradiosettingsFiveGhzSettings.md) |  | [optional] 


