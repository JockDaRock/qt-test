# MerakiDashboardApi.NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxPower** | **Number** | Sets max power (dBm) of 5Ghz band. Can be integer between 8 and 30. | [optional] 
**minPower** | **Number** | Sets min power (dBm) of 5Ghz band. Can be integer between 8 and 30. | [optional] 
**minBitrate** | **Number** | Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'. | [optional] 
**validAutoChannels** | **[Number]** | Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'. | [optional] 
**channelWidth** | **String** | Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'. | [optional] 
**rxsop** | **Number** |     The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after     consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will     reset this to the default.  | [optional] 


