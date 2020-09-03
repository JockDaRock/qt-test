# MerakiDashboardApi.NetworksnetworkIdwirelessrfProfilesrfProfileIdFiveGhzSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxPower** | **Number** | Sets max power (dBm) of 5Ghz band. Can be integer between 8 and 30. | [optional] 
**minPower** | **Number** | Sets min power (dBm) of 5Ghz band. Can be integer between 8 and 30. | [optional] 
**minBitrate** | **Number** | Sets min bitrate (Mbps) of 5Ghz band. Can be one of &#x27;6&#x27;, &#x27;9&#x27;, &#x27;12&#x27;, &#x27;18&#x27;, &#x27;24&#x27;, &#x27;36&#x27;, &#x27;48&#x27; or &#x27;54&#x27;. | [optional] 
**validAutoChannels** | **[Number]** | Sets valid auto channels for 5Ghz band. Can be one of &#x27;36&#x27;, &#x27;40&#x27;, &#x27;44&#x27;, &#x27;48&#x27;, &#x27;52&#x27;, &#x27;56&#x27;, &#x27;60&#x27;, &#x27;64&#x27;, &#x27;100&#x27;, &#x27;104&#x27;, &#x27;108&#x27;, &#x27;112&#x27;, &#x27;116&#x27;, &#x27;120&#x27;, &#x27;124&#x27;, &#x27;128&#x27;, &#x27;132&#x27;, &#x27;136&#x27;, &#x27;140&#x27;, &#x27;144&#x27;, &#x27;149&#x27;, &#x27;153&#x27;, &#x27;157&#x27;, &#x27;161&#x27; or &#x27;165&#x27;. | [optional] 
**channelWidth** | **String** | Sets channel width (MHz) for 5Ghz band. Can be one of &#x27;auto&#x27;, &#x27;20&#x27;, &#x27;40&#x27; or &#x27;80&#x27;. | [optional] 
**rxsop** | **Number** |     The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after     consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will     reset this to the default.  | [optional] 
