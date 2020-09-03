# MerakiDashboardApi.Body33

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | Set mode to &#x27;enabled&#x27; to enable malware prevention, otherwise &#x27;disabled&#x27; | 
**allowedUrls** | [**[NetworksnetworkIdappliancesecuritymalwareAllowedUrls]**](NetworksnetworkIdappliancesecuritymalwareAllowedUrls.md) | The urls that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing | [optional] 
**allowedFiles** | [**[NetworksnetworkIdappliancesecuritymalwareAllowedFiles]**](NetworksnetworkIdappliancesecuritymalwareAllowedFiles.md) | The sha256 digests of files that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing | [optional] 

<a name="ModeEnum"></a>
## Enum: ModeEnum

* `enabled` (value: `"enabled"`)
* `disabled` (value: `"disabled"`)

