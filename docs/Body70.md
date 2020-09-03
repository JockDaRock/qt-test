# MerakiDashboardApi.Body70

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localStatusPageEnabled** | **Boolean** | Enables / disables the local device status pages (&lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;http://my.meraki.com/&#x27;&gt;my.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;http://ap.meraki.com/&#x27;&gt;ap.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;http://switch.meraki.com/&#x27;&gt;switch.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;http://wired.meraki.com/&#x27;&gt;wired.meraki.com&lt;/a&gt;). Optional (defaults to false) | [optional] 
**remoteStatusPageEnabled** | **Boolean** | Enables / disables access to the device status page (&lt;a target&#x3D;&#x27;_blank&#x27;&gt;http://[device&#x27;s LAN IP])&lt;/a&gt;. Optional. Can only be set if localStatusPageEnabled is set to true | [optional] 
