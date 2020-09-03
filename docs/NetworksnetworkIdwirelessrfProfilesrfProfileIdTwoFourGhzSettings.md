# MerakiDashboardApi.NetworksnetworkIdwirelessrfProfilesrfProfileIdTwoFourGhzSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxPower** | **Number** | Sets max power (dBm) of 2.4Ghz band. Can be integer between 5 and 30. | [optional] 
**minPower** | **Number** | Sets min power (dBm) of 2.4Ghz band. Can be integer between 5 and 30. | [optional] 
**minBitrate** | **Number** | Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'. | [optional] 
**validAutoChannels** | **[Number]** | Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'. | [optional] 
**axEnabled** | **Boolean** | Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. | [optional] 
**rxsop** | **Number** |     The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after     consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will     reset this to the default.  | [optional] 


