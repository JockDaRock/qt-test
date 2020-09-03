# MerakiDashboardApi.NetworksnetworkIdwirelessrfProfilesTwoFourGhzSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxPower** | **Number** | Sets max power (dBm) of 2.4Ghz band. Can be integer between 5 and 30. Defaults to 30. | [optional] 
**minPower** | **Number** | Sets min power (dBm) of 2.4Ghz band. Can be integer between 5 and 30. Defaults to 5. | [optional] 
**minBitrate** | **Number** | Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of &#x27;1&#x27;, &#x27;2&#x27;, &#x27;5.5&#x27;, &#x27;6&#x27;, &#x27;9&#x27;, &#x27;11&#x27;, &#x27;12&#x27;, &#x27;18&#x27;, &#x27;24&#x27;, &#x27;36&#x27;, &#x27;48&#x27; or &#x27;54&#x27;. Defaults to 11. | [optional] 
**validAutoChannels** | **[Number]** | Sets valid auto channels for 2.4Ghz band. Can be one of &#x27;1&#x27;, &#x27;6&#x27; or &#x27;11&#x27;. Defaults to [1, 6, 11]. | [optional] 
**axEnabled** | **Boolean** | Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true. | [optional] 
**rxsop** | **Number** |     The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after     consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will     reset this to the default.  | [optional] 
